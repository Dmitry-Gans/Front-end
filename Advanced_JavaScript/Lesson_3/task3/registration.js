"use strict";

// Импортируем функции из storage.js:
import { getUsers, registerUser } from "./storage.js";

const loginEl = document.querySelector(".login");
const passwordEl = document.querySelector(".password");
const registrationEl = document.querySelector(".registration");

// Обработчик клика на кнопку регистрации:
registrationEl.addEventListener("click", () => {
  const login = loginEl.value;
  const password = passwordEl.value;
  const users = getUsers();

  // Проверяем, есть ли пользователь с таким логином:
  if (users.some((user) => user.login === login)) {
    alert("Пользователь с таким логином уже существует");
    return;
  }
  // Регистрируем нового пользователя:
  registerUser(login, password);

  // Переходим на страницу логина:
  location.href = "login.html";
});
