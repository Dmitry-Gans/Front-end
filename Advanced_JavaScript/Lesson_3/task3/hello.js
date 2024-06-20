"use strict";

// Импортируем функции из storage.js:
import { getAuthorizedLogin, logOutUser } from "./storage.js";

const helloMessageEl = document.querySelector(".helloMessage");
const logOutEl = document.querySelector(".logout");
// Получаем логин авторизованного пользователя:
const authorizedUser = getAuthorizedLogin();

// Если пользователь не авторизован, то выводим сообщение об ошибке
if (!getAuthorizedLogin) {
  alert("Вы не авторизованы. Пожалуйста, авторизуйтесь! ");
  // Перенаправляем пользователя на страницу авторизации:
  location.href = "login.html";
}

helloMessageEl.textContent = `Hello, ${authorizedUser}!`;

// Добавляем обработчик события на кнопку выхода:
logOutEl.addEventListener("click", () => {
  // Вызываем функцию для выхода из системы:
  logOutUser();
  // Перенаправляем пользователя на страницу авторизации:
  location.href = "login.html";
});
