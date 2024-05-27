"use strict";

// Задание №2
// 1. Необходимо вынести функцию .calculateResultSum() в отдельный
// файл, импортировать её в основной файл и использовать.
// 2. Также необходимо вынести запуск скрипта в скрипты запуска NPM,
// для того, чтобы можно было запускать скрипт с помощью команды npm run start.

// const NP = require("number-precision");
// const { plus, times: malt } = require("number-precision"); с присвоением нового имени переменной, вместо times
const { plus, times } = require("number-precision");

function calculateResultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => plus(acc, purchase), 0);

  total = times(total, discount);
  return total;
}

module.exports = { calculateResultSum };
