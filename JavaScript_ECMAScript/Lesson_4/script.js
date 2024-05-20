"use strict";
// Промис - это обещание
// Промис принимает колбек функцию с аргументами: resolve и reject
// resolve(разрешить) - этот метод исполняется когда промис решается успехом
// reject(отклонить) - этот метод исполняется когда промис не решается и выдает ошибку
// const myPromise = new Promise((resolve, reject) => {тут обычно выполняется асинхронный код});
// myPromise
//   .then((value) => {}) // then - последующие действия, после удачного запроса resolve
//   .catch((error) => { // catch - обработка ошибки, после неудачного запроса reject
//     console.log("Ошибка");
//   });

// Ссылка на API ресурсы https://jsonplaceholder.typicode.com/

// Задача 1

// Берем оттуда API с контактами
// const url = "https://jsonplaceholder.typicode.com/users";

// Пример работы с fetch:
// fetch(url) // Делаем запрос на сервер по ссылке
//   .then((response) => response.json()) // Получаем ответ от сервера и помещаем его в response, затем вызываем у него метод json - он по ссылке как раз забирает данные
//   .then((data) => console.log(data)) // Теперь принимаем эти данные и можем делать с ними все, что хотим, пока просто выводим в консоли
//   .catch((error) => console.error(`Ошибка ${error}`)); // Обрабатываем ошибку, обязательно через console.error, а не log

// Пример работы через Promise внутри функции, можно использовать на будущее как шаблон для создания Promise:
// const getData = (url) =>
//   new Promise((resolve, reject) => {
//     fetch(url).then((response) =>
//       response
//         .json()
//         .then((data) => resolve(data)) // Используем resolve вместо console.log
//         .catch((error) => reject(error)) // Используем reject вместо console.log
//     );
//   });

// Шаблон мы создавали для того чтобы в конечном итоге упростить работу с обработкой данных полученных с API, при использовании функции getData, мы обращаемся к then один раз.
// В сравнению с fetch обычным без шаблона, там к then обращаемся 2 раза

// getData(url)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// Второй пример через async/await:
// При создании асинхронных функций, пишем async перед самой функцией
// const getData2 = async (url) => {
//   try { // try вместо resolve
//     const res = await fetch(url); // await вместо then, пишем его при вызове методов, функций, чтобы программа подождала, пока выполнится функция и только потом идем дальше
//     const data = await res.json();
//     return data;
//   } catch (error) { // catch вместо reject
//     console.log(error);
//   }
// };

// const fetchData = await getData2(url);
// console.log(fetchData);

// Задача 2

// API NASA https://api.nasa.gov/

// Берем ссылку на API и вставляем ключ в конце пути самой ссылки, затем ставим знак & и прописываем условие: с помощью count ограничиваем количество. Весь этот синтаксис написан в инструкции к API.
const nasaUrl =
  "https://api.nasa.gov/planetary/apod?api_key=VG7hcoFMcSvGDhlJh3ylikHVk7Q8Q4Op8ZFDomGN&count=10";

const getData3 = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = await getData3(nasaUrl);
console.log(fetchData);

// Отрисовываем полученные данные в виде карточек с помощью шаблона в html файле:
const divEl = document.querySelector("div.catalog");
// Перебираем массив данных
fetchData.forEach((element) => {
  // insertAdjacentHTML - принимает 2 параметра: 1 - позиционирование, 2 - шаблон разметки тегов
  divEl.insertAdjacentHTML(
    // Создаем разметку с помощью шаблона и вставляем ее перед закрывающимся тегом с классом catalog
    "beforeend",
    `
    <figure>
        <img
          src="${element.url}"
          alt="Elephant at sunset"
        >
        <figcaption>${element.explanation}</figcaption>
    </figure>
    `
  );
});
