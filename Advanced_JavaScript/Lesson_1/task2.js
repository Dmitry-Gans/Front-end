"use strict";

/*
Задание 2 Вариант от Павла Тарасова:
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/

// Список книг:
const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

// Пример через генератор функцию iterator:
// const library = {
// Когда свойство и переменная пишется одинаково, можно записать одним словом, чтобы не писать books: books
//  books,
// Функция генератор со звездочкой - это функция которая может возвращать несколько значений, вместо return используется yield
//   *[Symbol.iterator]() {
//     for (const book of this.books) {
//       yield book;
//     }
//   },
// };

// Вариант через обычную функцию, показывает как генератор *[Symbol.iterator]() работает под капотом, в прототипе у него лежат методы next, return, throw и next() он дергает постоянно. Благодаря Symbol.iterator мы можем перебирать объекты, которые до этого не могли:
const library = {
  books,
  [Symbol.iterator]() {
    let index = 0;
    return {
      // Создаем свойство next и в его значении кладем анонимную, стрелочную функцию, тем самым мы обычный метод next() превратили в стрелочную функцию, чтобы this мог ссылаться именно на library.
      // next() вызывается на каждой итерации for..of
      next: () => {
        if (index < this.books.length) {
          // Он должен возвращать объект {значение, флаг(остановился перебор(true) или нет(false))}
          return {
            value: this.books[index++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };

        // Пример через тернарный оператор:

        // return this.current < this.to
        // ? { done: false, value: books[this.current++] }
        // : { done: true };
      },
    };
  },
};

// Из library получаем то, что лежит под Symbol.iterator и вызываем его:
const iterator = library[Symbol.iterator]();
console.log(iterator); // Объект с функцией {next: ƒ}

// Теперь наконец то можем перебрать все книги:
for (const book of library) {
  console.log(book);
}

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
