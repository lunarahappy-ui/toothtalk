import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Глобальная защита от горизонтального выхода за экран + перенос длинных фраз
const _gs = document.createElement("style");
_gs.textContent = `
  *{box-sizing:border-box}
  html,body,#root{max-width:100%;overflow-x:hidden}
  img,svg{max-width:100%;height:auto}
  button{word-break:break-word;overflow-wrap:anywhere}
  input{max-width:100%}
`;
document.head.appendChild(_gs);

// Инициализация Telegram Mini App (безопасно и вне Telegram)
const tg = window.Telegram?.WebApp;
if (tg) {
  try {
    tg.ready();
    tg.expand();
  } catch {}
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
