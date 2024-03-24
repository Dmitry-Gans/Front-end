"use strict";

// Реализовать функцию round5, которой передается целое число, функция должна
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся
// на 5.

function round5(val) {
  if (val >= 0) {
    return Math.round(val / 5) * 5;
  } else if (val >= -2) {
    return Math.round(val / 5) * -5;
  } else if(val < -2) {
    return Math.round(val / 5) * 5;
  }
}

console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5
