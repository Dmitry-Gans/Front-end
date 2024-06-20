"use strict";

const lsUsersKey = "users";
const lsLoginKey = "login";

// Функция запрашивающая пользователей из локального хранилища:
function getUsers() {
  const users = localStorage.getItem(lsUsersKey);
  // Если в локальном хранилище нет пользователей, возвращаем пустой массив:
  if (!users) {
    return [];
  }
  // Парсим из строки в массив и возвращаем:
  return JSON.parse(users);
}

// Функция регистрирующая пользователя в локальном хранилище:
function registerUser(login, password) {
  // Получаем массив пользователей из локального хранилища:
  const users = getUsers();
  // Добавляем нового пользователя в массив:
  users.push({ login, password });
  // Перезаписываем массив в локальное хранилище с новыми данными:
  localStorage.setItem(lsUsersKey, JSON.stringify(users));
  console.log(localStorage.setItem(lsUsersKey, JSON.stringify(users)));
}

// Функция для входа пользователя в систему:
function loginUser(login, password) {
  const users = getUsers();
  if (
    // some() возвращает true, если хоть один элемент массива схож с введенным
    // в инпуте логином:
    // Проверяем, есть ли пользователь с таким логином и паролем:
    !users.some((user) => user.login === login && user.password === password)
  ) {
    throw new Error("Не верный логин или пароль");
  }
  // Если пользователь с таким логином и паролем существует,
  // записываем его логин в локальное хранилище по ключу:
  localStorage.setItem(lsLoginKey, login);
}

// Функция возвращающая логин авторизованного пользователя:
function getAuthorizedLogin() {
  return localStorage.getItem(lsLoginKey);
}

// Функция для выхода пользователя из системы:
function logOutUser() {
  localStorage.removeItem(lsLoginKey);
}

// Экспортируем функции для использования в других скриптах:
export { getUsers, registerUser, loginUser, getAuthorizedLogin, logOutUser };
