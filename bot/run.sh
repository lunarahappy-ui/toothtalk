#!/bin/bash
# Запуск ToothTalk-бота с авто-перезапуском при падении.
cd "$(dirname "$0")"
while true; do
  echo "[$(date '+%F %T')] Запуск ToothTalk-бота..." >> bot.log
  python3 toothtalk_bot.py >> bot.log 2>&1
  echo "[$(date '+%F %T')] Бот остановился, перезапуск через 5с..." >> bot.log
  sleep 5
done
