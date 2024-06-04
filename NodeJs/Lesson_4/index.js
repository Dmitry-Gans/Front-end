"use strict";

// Сервер для управления списком контактов

// Библиотека "nodemon", использовать по желанию.
// Установить: npm i -g nodemon
// Это библиотека для сервера, чтобы при изменении кода, каждый раз не перезапускать сервер, запускать файлы через команду nodemon имя файла, вместо node имя файла

// Библиотека для работы с файлами:
const fs = require("fs");
// Библиотека дял работы с путями к файлам:
const path = require("path");
// Библиотека для валидности данных:
const joi = require("joi");
const express = require("express");

// Создаем объект, который будет представлять приложение:
const app = express();
const port = 3000;

// Создаем шаблон для проверки на валидность:
const userSchema = joi.object({
  name: joi.string().min(1).required(),
  surname: joi.string().min(1).required(),
  age: joi.number().min(0).required(),
  city: joi.string(),
});

let uniqueId = 3;
// Путь к файлу, он нам пригодится, чтобы при перезапуске сервера данные не терялись:
const pathFile = path.join(__dirname, "users.json");

// Преобразуем строку JSON в объект JSON и заполняет свойство req.body:
app.use(express.json());

// Обрабатываем GET-запрос протокола HTTP, что позволяет связать маршруты с обработчиком. Для этого первым параметром передается маршрут, а вторым - обработчик(callBack функция), который будет вызываться, если запрос к серверу соответствует данному маршруту.
// Составляем запрос на поиск всех пользователей, req - запрос, res - ответ:
app.get("/users", (req, res) => {
  // Читаем файл и парсим его, чтобы превратить в объект/массив:
  const users = JSON.parse(fs.readFileSync(pathFile));
  // Возвращаем в ответе массив в объекте, с информацией из файла:
  res.send({ users });
});

// Составляем запрос на поиск конкретного пользователя:
app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  // Ищем в массиве по id нужного пользователя, req.params.id - возвращает строку, поэтому плюсом превращаем в число
  const user = users.find((item) => item.id === +req.params.id);
  // Если ответ true
  if (user) {
    // Тогда возвращаем в ответе пользователя
    res.send({ user });
  } else {
    // Если нет, то возвращаем код ошибки, сообщение и статус
    res
      .status(404)
      .send({ user: null, error: "пользователь не найден", status: "error" });
  }
});

// Составляем запрос на обновление данных конкретного пользователя:
app.put("/users/:id", (req, res) => {
  // Запускаем шаблон с валидностью тела запроса:
  const result = userSchema.validate(req.body);
  if (result.error) {
    return res
      .status(404)
      .send({ error: result.error.details, status: "error" });
  }
  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    // Обновляем на данные из тела запроса:
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.age = req.body.age;
    user.city = req.body.city;

    // Перезаписываем новые данные в файл:
    fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));

    // Возвращаем в ответе объект с пользователем:
    res.send({ user });
  } else {
    res
      .status(404)
      .send({ user: null, error: "пользователь не найден", status: "error" });
  }
});

// Составляем запрос на добавление нового пользователя:
app.post("/users/", (req, res) => {
  const result = userSchema.validate(req.body);
  if (result.error) {
    return res
      .status(404)
      .send({ error: result.error.details, status: "error" });
  }

  const users = JSON.parse(fs.readFileSync(pathFile));
  // Создаем нового пользователя из тела запроса:
  const user = {
    id: uniqueId++,
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    city: req.body.city,
  };
  // Добавляем пользователя в массив всех пользователей:
  users.push(user);

  // Перезаписываем новые данные в файл:
  fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));

  // Возвращаем в ответе объект с пользователем:
  res.send({ user });
});

// Составляем запрос на удаление конкретного пользователя:
app.delete("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  // Поиск по индексу с помощью метода findIndex() - он возвращает 1, если нашел и -1, если не нашел
  const userIndex = users.findIndex((item) => item.id === +req.params.id);
  if (userIndex > -1) {
    // Удаляем из массива по индексу, 1 объект
    users.splice(userIndex, 1);
    // Перезаписываем новые данные в файл:
    fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
    res.send({ status: "ОК" });
  } else {
    res
      .status(404)
      .send({ user: null, error: "пользователь не найден", status: "error" });
  }
});

// Запускаем сервер:
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
