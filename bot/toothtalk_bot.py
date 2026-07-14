# -*- coding: utf-8 -*-
"""
ToothTalk — бот-компаньон.
Приветствие, знакомство, кнопка запуска тренажёра, ежедневные напоминания,
заготовка под приём прогресса из приложения.

Запуск:  python3 toothtalk_bot.py
Токен берётся из config.json (или переменной окружения TOOTHTALK_BOT_TOKEN).
"""

import json
import logging
import os
import random
from datetime import time as dtime, datetime
from pathlib import Path

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.constants import ParseMode
from telegram.ext import (
    Application, CommandHandler, MessageHandler, ContextTypes, filters,
)

BASE = Path(__file__).resolve().parent
CFG_PATH = BASE / "config.json"
USERS_PATH = BASE / "users.json"

# ── Конфиг ────────────────────────────────────────────────────
def load_cfg():
    cfg = {}
    if CFG_PATH.exists():
        cfg = json.loads(CFG_PATH.read_text(encoding="utf-8"))
    token = os.environ.get("TOOTHTALK_BOT_TOKEN") or cfg.get("token", "")
    return {
        "token": token,
        "webapp_url": cfg.get("webapp_url", "https://toothtalk-murex.vercel.app"),
        # часы (по серверному времени) для напоминаний
        "reminder_hours": cfg.get("reminder_hours", [10, 19]),
    }

CFG = load_cfg()

logging.basicConfig(
    format="%(asctime)s | %(levelname)-7s | %(name)s | %(message)s", level=logging.INFO
)
logging.getLogger("httpx").setLevel(logging.WARNING)
log = logging.getLogger("toothtalk-bot")

# ── Хранилище пользователей (простой JSON) ────────────────────
def load_users():
    if USERS_PATH.exists():
        try:
            return json.loads(USERS_PATH.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}

def save_users(u):
    try:
        USERS_PATH.write_text(json.dumps(u, ensure_ascii=False, indent=2), encoding="utf-8")
    except Exception:
        log.exception("Не смог сохранить users.json")

USERS = load_users()

def get_user(chat_id):
    return USERS.setdefault(str(chat_id), {
        "name": None, "dream": None, "stage": None,
        "streak": 0, "last_day": None,
        "xp": 0, "lessons": 0,   # обновляется приложением (когда подключим прогресс)
    })

# ── Кнопки ────────────────────────────────────────────────────
def open_kb():
    return InlineKeyboardMarkup([[
        InlineKeyboardButton("🦷 Открыть тренажёр", web_app=WebAppInfo(url=CFG["webapp_url"]))
    ]])

# ── Мотивационные напоминания ─────────────────────────────────
REMINDERS = [
    "{name}, 5 минут английского сегодня — шаг к большой мечте ✈️",
    "{name}, врачи, которые учат язык, открывают себе новые страны 🌍 Удели 5 минут?",
    "Маленький шаг каждый день > большой рывок раз в месяц. {name}, 5 минут? 🦷",
    "{name}, представь: приём на английском, и ты уверена. Это тренируется. 5 минут 💪",
    "Серия не должна прерваться 🔥 {name}, короткая тренировка — и ты молодец!",
    "{name}, мечта не ждёт — но и не требует многого. Всего 5 минут английского 🌟",
]

def reminder_text(u):
    name = u.get("name") or "Привет"
    base = random.choice(REMINDERS).format(name=name)
    if u.get("dream"):
        base += f"\n\nТвоя цель: <i>{u['dream']}</i> — ты идёшь к ней 👣"
    return base

# ── /start и знакомство ───────────────────────────────────────
WELCOME = (
    "Привет! 🦷 Я — твой помощник в <b>ToothTalk</b>, английском для стоматологов.\n\n"
    "Я буду держать тебя в тонусе: напоминать позаниматься, показывать прогресс "
    "и запускать тренажёр в один тап.\n\n"
    "Давай знакомиться — <b>как тебя зовут?</b>"
)

async def cmd_start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    u = get_user(chat_id)
    if not u.get("name"):
        u["stage"] = "ask_name"
        save_users(USERS)
        await update.message.reply_text(WELCOME, parse_mode=ParseMode.HTML)
    else:
        await update.message.reply_text(
            f"С возвращением, {u['name']}! 👋\nГотова уделить 5 минут мечте?",
            reply_markup=open_kb(),
        )

async def on_text(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    u = get_user(chat_id)
    text = (update.message.text or "").strip()
    stage = u.get("stage")

    if stage == "ask_name":
        u["name"] = text[:40]
        u["stage"] = "ask_dream"
        save_users(USERS)
        await update.message.reply_text(
            f"Приятно познакомиться, {u['name']}! 🌟\n\n"
            "А <b>зачем тебе английский</b>? Куда мечтаешь — страна, работа за границей?\n"
            "(напиши в двух словах — я буду напоминать про твою мечту)",
            parse_mode=ParseMode.HTML,
        )
        return

    if stage == "ask_dream":
        u["dream"] = text[:120]
        u["stage"] = None
        save_users(USERS)
        await update.message.reply_text(
            f"Отлично, {u['name']}! Мечта записана 🎯\n\n"
            "Я буду мягко напоминать про занятия. А сейчас — начнём?",
            reply_markup=open_kb(),
        )
        return

    # обычное сообщение вне знакомства
    await update.message.reply_text(
        "Я рядом 🦷 Готова позаниматься? Жми кнопку ниже.",
        reply_markup=open_kb(),
    )

# ── /progress ─────────────────────────────────────────────────
async def cmd_progress(update: Update, context: ContextTypes.DEFAULT_TYPE):
    u = get_user(update.effective_chat.id)
    name = u.get("name") or "Друг"
    # xp/lessons обновятся, когда подключим передачу прогресса из приложения
    if u.get("lessons"):
        txt = (f"📊 <b>Прогресс, {name}</b>\n\n"
               f"⚡ XP: {u.get('xp',0)}\n"
               f"📚 Уроков пройдено: {u.get('lessons',0)}\n"
               f"🔥 Серия: {u.get('streak',0)} дн.")
    else:
        txt = (f"📊 {name}, прогресс появится здесь после первых уроков.\n\n"
               "Открой тренажёр и пройди урок — я начну считать 👇")
    await update.message.reply_text(txt, parse_mode=ParseMode.HTML, reply_markup=open_kb())

# ── /help ─────────────────────────────────────────────────────
async def cmd_help(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Команды:\n/start — начать\n/progress — мой прогресс\n/stop — выключить напоминания\n/go — открыть тренажёр",
        reply_markup=open_kb(),
    )

async def cmd_go(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Погнали! 🦷", reply_markup=open_kb())

async def cmd_stop(update: Update, context: ContextTypes.DEFAULT_TYPE):
    u = get_user(update.effective_chat.id)
    u["reminders_off"] = True
    save_users(USERS)
    await update.message.reply_text("Ок, напоминания выключил. Включить обратно — /start")

# ── Рассылка напоминаний ──────────────────────────────────────
async def send_reminders(context: ContextTypes.DEFAULT_TYPE):
    sent = 0
    for chat_id, u in list(USERS.items()):
        if u.get("reminders_off") or not u.get("name"):
            continue
        try:
            await context.bot.send_message(
                chat_id=int(chat_id), text=reminder_text(u),
                parse_mode=ParseMode.HTML, reply_markup=open_kb(),
            )
            sent += 1
        except Exception:
            log.warning("Не смог отправить напоминание %s", chat_id)
    log.info("Напоминания отправлены: %d", sent)

def main():
    if not CFG["token"]:
        raise SystemExit("Нет токена! Положи его в config.json (token) или переменную TOOTHTALK_BOT_TOKEN.")
    app = Application.builder().token(CFG["token"]).build()
    app.add_handler(CommandHandler("start", cmd_start))
    app.add_handler(CommandHandler("help", cmd_help))
    app.add_handler(CommandHandler("progress", cmd_progress))
    app.add_handler(CommandHandler("go", cmd_go))
    app.add_handler(CommandHandler("stop", cmd_stop))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, on_text))

    # напоминания в заданные часы
    for h in CFG["reminder_hours"]:
        app.job_queue.run_daily(send_reminders, time=dtime(hour=int(h), minute=0))

    log.info("ToothTalk-бот запущен. webapp=%s reminders=%s", CFG["webapp_url"], CFG["reminder_hours"])
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()
