"use strict";

// Импортируем функции из storage.js:
import { loginUser } from "./storage.js";

const loginEl = document.querySelector(".login");
const passwordEl = document.querySelector(".password");
const loginBtnEl = document.querySelector(".loginBtn");

// Обработчик события клика по кнопке:
loginBtnEl.addEventListener("click", () => {
  const login = loginEl.value;
  const password = passwordEl.value;

  // Вызываем функцию loginUser и передаем ей логин и пароль:
  try {
    // Если логин и пароль введены верно, то переходим на страницу hello.html:
    loginUser(login, password);
    location.href = "hello.html";
    // Если логин или пароль введены неверно, то выводим сообщение об ошибке:
  } catch (err) {
    alert(err.message);
  }
});
