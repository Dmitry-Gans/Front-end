"use strict";

// Задание №2
// 1. Необходимо вынести функцию .calculateResultSum() в отдельный
// файл, импортировать её в основной файл и использовать.
// 2. Также необходимо вынести запуск скрипта в скрипты запуска NPM,
// для того, чтобы можно было запускать скрипт с помощью команды npm run start.

//Подключаем установленную библиотеку number-precision

// const NP = require("number-precision"); Придется обращаться к методам через переменную - NP.plus
// const { plus, times: malt } = require("number-precision"); с присвоением нового имени переменной с методом, вместо times
// plus - сложение
// times - умножение
const { plus, times } = require("number-precision");

// Передаем в атрибуты, 1 массив чисел, 2 множитель
function calculateResultSum(values, multiplier) {
  // Вызываем метод reduce() и результат callBack функции оборачиваем в метод библиотеки
  let total = values.reduce((acc, values) => plus(acc, values), 0);

  // Результат сложения и множитель оборачиваем в метод библиотеки, чтобы исключить плавающую запятую
  total = times(total, multiplier);
  return total;
}
// Экспортируем функцию, превращая ее в модуль
module.exports = { calculateResultSum };
