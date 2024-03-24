"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const num = Number(prompt("Введите число:"));

if (!Number.isFinite(num)) {// - проверяем что значение num число и что оно не Infinity и не NaN, в общем, что это корректное число.
  console.log("Значение задано неверно");
} else {
  const salary = (num) => {
    const result = Math.round((num - (num * 0.13)) *100)/100;//Округляем до 2 знаков после запятой
    return `Размер заработной платы за вычетом налогов равен ${result}.`;
  };
  console.log(salary(num));
}
