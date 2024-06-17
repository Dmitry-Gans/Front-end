"use strict";

/*
Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
*/

class Library {
  // Приватное свойство #books, которое должно хранить книги
  #books;
  constructor(books) {
    // Проверяем, что предоставленный массив не содержит дубликатов:
    listBooks.forEach((book) => {
      if (listBooks.indexOf(book) !== listBooks.lastIndexOf(book)) {
        throw new Error("Дубликат книги!");
      }
    });
    // Присваиваем приватному свойству #books переданный массив:
    this.#books = books;
  }

  // Метод возвращает текущий список книг:
  allBooks() {
    return this.#books;
  }

  // Метод ищет книгу в списке по названию и возвращает true или false:
  hasBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error("Нет такой книги!");
    }
    return this.#books.includes(title);
  }

  // Метод добавляет книгу в список:
  addBook(title) {
    // Проверяем, есть ли книга с таким названием в списке:
    if (this.#books.includes(title)) {
      throw new Error("Книга с таким названием уже существует!");
    } else {
      this.#books.push(title);
      return "Книга добавлена!";
    }
  }
  // Метод удаляет книгу из списка:
  removeBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error("Книга с таким названием не существует");
    }
    // Ищем индекс книги по названию:
    const index = this.#books.indexOf(title);
    // Удаляем книгу из списка по индексу:
    this.#books.splice(index, 1);
    return "Книга удалена!";
  }
}

const listBooks = [
  "Выразительный JavaScript",
  "React и Redux",
  "JavaScript с нуля",
];

const book = new Library(listBooks);

console.log(book.allBooks());
console.log(book.hasBook("React и Redux"));
// // console.log(book.hasBook("Redux"));
console.log(book.addBook("Камасутра для оратора"));
// // console.log(book.addBook("Камасутра для оратора"));
console.log(book.allBooks());
console.log(book.removeBook("React и Redux"));
// console.log(book.removeBook("Redux"));
console.log(book.allBooks());
