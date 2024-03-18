// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// const firstName = 'Дмитрий';
// const lastName = 'Гуслов';
// const age = 29;

// userInfo(firstName, lastName, age);

// function userInfo(firstName, lastName, age) {
//   console.log(`Привет, ${firstName} ${lastName}. Вы уже большой, вам ${age}.`);
// }

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// function makeSquare(x) {
//   return x ** 2;
// }

// console.log(makeSquare(4));

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function numberPositive(num) {
//   if (typeof number !== "number") {
//     return;
//   } else if (num > 0) {
//     console.log("+++");
//   } else if (num < 0) {
//     console.log("---");
//   }
// }

// numberPositive("sdfsdf");

// Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// const sumNumbers = (a, b, c) => console.log(a + b + c);

// const a = Math.trunc(Math.random() * 10);
// const b = Math.trunc(Math.random() * 10);
// const c = Math.trunc(Math.random() * 10);

// sumNumbers(a, b, c);

// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции.

// Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// const root = (x) => Math.sqrt(x);
// console.log(root(3) + root(4));

// Второй вариант:
// const root = (x) => {
//   return Math.sqrt(x);
// };
// console.log(root(3) + root(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// const findMin = (x, y) => Math.min(x, y);
// console.log(findMin(2, 54));

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

// const number = Number(prompt("Введите число от 1 до 7"));

// function dayWeek(num) {
//   switch (num) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     default:
//       return "Не верное число";
//   }
// }

// console.log(dayWeek(number));

// Второй вариант:

// const number = Number(prompt("Введите число от 1 до 7"));

// function dayWeek(num) {
//   switch (num) {
//     case 1:
//       console.log("Понедельник");
//       break;
//     case 2:
//       console.log("Вторник");
//       break;
//     case 3:
//       console.log("Среда");
//       break;
//     default:
//       console.log("Не верное число");
//       break;
//   }
// }

// dayWeek(number);

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// const myName = "Дмитрий";

// console.log(sayHello(myName));

// function sayHello(name) {
//   const time = new Date(); //Создали переменную с датой, временем в реальном времени
//   const hour = time.getHours(); //Создали новую переменную, и у time запросили только часы
//   if (hour < 6) {
//     return `Доброй ночи, ${name}`;
//   }
//   if (hour < 12) {
//     return `Доброе утро, ${name}`;
//   }
//   if (hour < 18) {
//     return `Добрый день, ${name}`;
//   }
//   return `Добрый вечер, ${name}`;
// }

// Дополнительно:

// const a = 500;

// console.log(a * 0.75);

/**
 * Функция возвращает приветствие
 * @param {string} name - имя пользователя
 * @param {number} age - возраст пользователя
 * @returns {string} результирующая строка приветствия с участием переменных
 */
function seyHello(name, age) {
  return `Привет, ${name}, вам ${age} лет`;
}
