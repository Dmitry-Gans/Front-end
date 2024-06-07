"use strict";

const express = require("express");
const fs = require("fs");
const path = require("path");
const joi = require("joi");

const app = express();
const port = 3005;

const pathFile = path.join(__dirname, "users.json");
let uniqueId = Math.floor(Math.random() * 100);

const userSchema = joi.object({
  name: joi.string().min(3).required(),
  surname: joi.string().min(5).required(),
  age: joi.number().min(0).required(),
  city: joi.string(),
});

app.use(express.json());

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  res.send({ users });
});

app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    res.send({ user });
  } else {
    res
      .status(404)
      .send({ user: null, error: "пользователь не найден", status: "error" });
  }
});

app.post("/users/", (req, res) => {
  const resultValid = userSchema.validate(req.body);
  if (resultValid.error) {
    return res
      .status(404)
      .send({ error: resultValid.error.details, status: "error" });
  }
  const users = JSON.parse(fs.readFileSync(pathFile));

  const user = {
    id: uniqueId++,
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    city: req.body.city,
  };
  users.push(user);

  fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));

  res.send({ user });
});

app.delete("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    users.splice(user, 1);
    fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
    res.send({ status: "ok" });
  } else {
    res
      .status(404)
      .send({ user: null, error: "пользователь не найден", status: "error" });
  }
});

app.put("/users/:id", (req, res) => {
  const resultValid = userSchema.validate(req.body);
  if (resultValid.error) {
    return res
      .status(404)
      .send({ error: resultValid.error.details, status: "error" });
  }
  const users = JSON.parse(fs.readFileSync(pathFile));
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.age = req.body.age;
    user.city = req.body.city;
    fs.writeFileSync(pathFile, JSON.stringify(users, null, 2));
    res.send({ user });
  } else {
    res
      .status(404)
      .send({ user: null, error: "пользователь не найден", status: "error" });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на ${port} порту!`);
});
