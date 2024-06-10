"use strict";

// Задание 1
// Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на консоль.

// Функция для добавления метаданных к объектам, в качестве аргумента передаем три параметра(объект, Symbol, значение):
// function addMetadata(book, metadataType, data) {
//   // Проверяем на наличие данного идентификатора:
//   if (book[metadataType]) {
//     // Если есть, то в массив добавляем новое значение:
//     book[metadataType].push(data);
//   } else {
//     // Добавляем уникальный идентификатор(ключ) и присваиваем ему значение(обернув его в массив):
//     book[metadataType] = [data];
//   }
// }

// // функция дял извлечения метаданных из объекта:
// function getMetadata(book, metadataType) {
//   // Возвращаем идентификатор:
//   return book[metadataType];
// }

// // Создание объекта книги и добавление метаданных:
// const book = {
//   title: "1984",
//   author: "George Orwell",
// };

// // Создаем уникальные идентификаторы с помощью Symbol:
// const reviewSymbol = Symbol("review");
// const ratingSymbol = Symbol("rating");
// const tagsSymbol = Symbol("tags");

// // Добавляем уникальные идентификаторы объекту book:
// addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
// addMetadata(book, ratingSymbol, 5);
// addMetadata(book, tagsSymbol, "dystopia");

// console.log(book);

// console.log(getMetadata(book, reviewSymbol));
// console.log(getMetadata(book, ratingSymbol));
// console.log(getMetadata(book, tagsSymbol));

// Задание 2
// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойство символ Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.

// Массив книг:
// const books = [
//   { title: "1984", author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];

// Работа Symbol.iterator под капотом:

// Применяем перебор наподобие for...of, через Symbol.iterator, внутри него вызываем callBack функцию, она возвращает объект итератора:
// books[Symbol.iterator] = function () {
//   // Далее работаем с этим итератором и запрашиваем у него новые значения:
//   return {
//     current: 0, // Начала
//     to: this.length, // Конец
//     // next() вызывается на каждой итерации for..of
//     next() {
//       // Он должен возвращать объект {флаг(остановить или нет), значение}
//       return this.current < this.to
//         ? { done: false, value: books[this.current++] }
//         : { done: true };
//     },
//   };
// };

// Упрощенный вариант перебора:
// for (const book of books) {
//   console.log(`Название:${book.title}, Автор:${book.author}.`);
// }

// Задание 3
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.

// Дан код html:
// <div>Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true">Element 4</div>

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active. Выведите результат на консоль.

// Метод .from() позволяет создать массив из итерируемых объектов, в данном случае это коллекции с div-ами:
// const divElements = Array.from(document.querySelectorAll("div"));

// // Теперь фильтруем этот массив по наличию атрибута, при помощи метода hasAttribute() - проверяет наличие заданного атрибута у элемента:
// const activeDivs = divElements.filter((element) =>
//   element.hasAttribute("data-active")
// );
// // Или через dataset.active
// const activeDivs = divElements.filter((element) => element.dataset.active);

// // Перебираем отфильтрованный массив и выводим в консоль:
// activeDivs.forEach((element) => {
//   console.log(element);
// });

// Задание 4
//  Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.

// Создаем коллекцию:
const lessons = new Map();
// Через set() добавляем ключ(урок) и его значение(преподаватель):
lessons.set("Математика", "Смирнов");
lessons.set("История", "ИВанова");

// Создаем множество:
const ivanLessons = new Set();
// Добавляем новые значения:
ivanLessons.add("Математика").add("История");

const students = new Map();
// Добавляем ключ(имя) и множество(уроки):
students.set("Иван", ivanLessons);

// Запрашиваем значение(преподаватель) по ключу(урок):
console.log(`Преподаватель по математике: ${lessons.get("Математика")}`); // Смирнов
// Перечисляем все уроки у Ивана через spread оператор, обращаясь по ключу(имя):
console.log(`Уроки Ивана: ${[...students.get("Иван")]}`); // Математика, История
