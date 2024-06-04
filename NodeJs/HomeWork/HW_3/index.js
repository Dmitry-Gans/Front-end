"use strict";

// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "counter.json");

app.get("/", function (req, res) {
  const counter = JSON.parse(fs.readFileSync(pathFile));
  res.send(`<h1>Главная страница</h1>
    <p>${counter.index++}</p>
      <a href="http://localhost:3000/about">Перейти на страницу About</a>
      `);
  fs.writeFileSync(pathFile, JSON.stringify(counter, null, 2));
});

app.get("/about", function (req, res) {
  const counter = JSON.parse(fs.readFileSync(pathFile));
  res.send(`<h1>Страница about</h1>
    <p>${counter.about++}</p>
    <a href="http://localhost:3000/">Перейти на главную страницу</a>`);
  fs.writeFileSync(pathFile, JSON.stringify(counter, null, 2));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
