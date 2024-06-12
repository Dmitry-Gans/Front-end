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

// Вариант от Павла Тарасова:
/*
Задание 1:
Необходимо создать механизм для безопасного добавления метаданных к объектам
книг с использованием ключей типа Symbol. Для чего необходимо:
1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
2. Реализовать методы addMetadata и getMetadata и другие методы, которые будут необходимы для работы кода ниже.
*/

// Объявляем символы reviewSymbol, ratingSymbol и tagsSymbol

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");

// Создадим класс Book

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  /**
   * Метод извлекает из объекта значение под свойством metadataType
   * и возвращает его.
   * @param {Symbol} metadataType
   * @returns {Array}
   */
  getMetadata(metadataType) {
    if (!this[metadataType]) {
      return [];
    }
    return this[metadataType];
  }

  /**
   * Метод добавляет в объект массив под ключом metadataType, со значением
   * data внутри. Если массив под данным свойством уже существует,
   * тогда data просто будет добавлен в данный массив.
   * @param {Symbol} metadataType
   * @param {any} data
   */
  addMetadata(metadataType, data) {
    if (!this[metadataType]) {
      this[metadataType] = [];
    }
    this[metadataType].push(data);
  }

  // Метод для получения среднего рейтинга:
  getAverageRating() {
    // Получаем массив отметок:
    const arrRating = this.getMetadata(ratingSymbol);
    if (!arrRating) {
      return null;
    }
    let sum = 0;
    for (let i = 0; i < arrRating.length; i++) {
      sum += arrRating[i];
    }
    return Math.round((sum / arrRating.length) * 10) / 10;
  }

  // Метод для получения тега:
  hasTag(tag) {
    const arrTags = this.getMetadata(tagsSymbol);
    if (!arrTags) {
      return false;
    }
    // includes () позволяет определить, содержит ли массив искомый элемент
    return arrTags.includes(tag);

    // Или можно перебрать массив и сравнивать каждое значение:

    // for (let i = 0; i < arrTags.length; i++) {
    //     if (arrTags[i] === tag) {
    //         return true;
    //     }
    // }
    // return false;
  }

  // Метод для получения количества отзывов:
  reviewsCount() {
    const arrReviews = this.getMetadata(reviewSymbol);
    if (!arrReviews) {
      return 0;
    }
    return arrReviews.length;
  }
}

const book = new Book("1984", "George Orwell");
book.addMetadata(reviewSymbol, "Отличная книга о дистопии!");
book.addMetadata(reviewSymbol, "Книга отстой, не покупайте ее.");
book.addMetadata(ratingSymbol, 5);
book.addMetadata(ratingSymbol, 4);
book.addMetadata(ratingSymbol, 4);

console.log(book.getMetadata(reviewSymbol)); // ["Отличная книга о дистопии!", "Книга отстой, не покупайте ее."]
console.log(book.getMetadata(ratingSymbol)); // [5, 4, 4]
console.log(book.getMetadata(tagsSymbol)); // []

book.addMetadata(tagsSymbol, "novel");
book.addMetadata(tagsSymbol, "dystopia");
console.log(book.getMetadata(tagsSymbol)); // ["novel", "dystopia"]

console.log(book.getAverageRating()); // 4.3
console.log(book.hasTag("novel")); // true
console.log(book.hasTag("blockbuster")); // false
console.log(book.reviewsCount()); // 2