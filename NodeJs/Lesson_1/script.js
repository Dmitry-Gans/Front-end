"use strict";

// Задание №5 (тайминг 10 минут)
// Основы Node.js
// Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере
// по URL “/” возвращает такую страницу:
// Подсказки:
// - Обязательно импортируйте модуль http для реализации сервера: const http =
// require('http');
// - Используйте метод модуля http .createServer(): http.createServer((req, res) => {});
// - Для запуска сервера не забудьте вызвать метод .listen(): server.listen(3000);
// - Обязательно установите заголовки ответа с помощью метода res.writeHead():
// 'Content-Type': 'text/html; charset=UTF-8'
// - Отправьте HTML код с помощью метода res.end()

// require() - возвращает объект модуля
const http = require("http");

// Вариант правильный, укороченный и современный:

// У метода createServer() в callBack функции передается два параметра:
// reg(request) - это объект запроса, можно получить заголовки запроса, url и другие данные
// res(response) - это объект ответа, у него есть методы позволяющие установить заголовки(writeHead()) и завершить ответ(end())
const server = http.createServer((req, res) => {
  console.log("Запрос получен");
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("<h1>Мой сервер работает!</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("<h1>Страница About</h1>");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("Page not found");
  }
});

const port = 3000;
// Прослушиваем порт и запускаем сервер с помощью listen()
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

// Вариант по старинке, через свою функцию, которую передаем в createServer():

// function serverHandler(reg, res) {
//   console.log("Запрос получен");
//   if (req.url === "/") {
//     res.writeHead(200, {
//       "Content-Type": "text/html; charset=UTF-8",
//     });
//     res.end("<h1>Мой сервер работает!</h1>");
//   } else if (req.url === "/about") {
//     res.writeHead(200, {
//       "Content-Type": "text/html; charset=UTF-8",
//     });
//     res.end("<h1>Страница About</h1>");
//   } else {
//     res.writeHead(404, {
//       "Content-Type": "text/html; charset=UTF-8",
//     });
//     res.end("Page not found");
//   }
// }

// const server = http.createServer(serverHandler);
// server.listen(3000);
