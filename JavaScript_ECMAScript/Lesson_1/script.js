// Задание 1
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

// const mergeArrays = (arrayOne, arrayTwo) => [...arrayOne, ...arrayTwo];

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

// Обычный вариант:

// function removeDuplicates(...params) {
//     return params.filter((element, id) => { //
//         return params.indexOf(element) === id;
//     })
// }

// Стрелочный вариант:

// const removeDuplicates2 = (...arrays) => {
//     const unecArray = [...new Set(arrays)]; // Set - Коллекция уникальных чисел
//     return unecArray;
// }

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));
// console.log(removeDuplicates2(1, 5, 2, 6, 4, 1, 5));

// Задание 2
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

// Обычный вариант:

// function getEvenNumbers(array) {
//     return array.filter((elem) => {
//         return elem % 2 === 0;
//     })
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// Стрелочный вариант:

// const getEvenNumbers = (array) =>  array.filter((elem) => elem % 2 === 0);

// console.log(getEvenNumbers([1, 5, 2, 6, 4, 1, 5]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

// const calculateAverage = (array) => {
//   return array.reduce((sum, element) => sum + element) / array.length;
// };

// console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function capitalizeFirstLetter(str) {
//   // return str.replace(/\b\w/g, (char) => { //replace - замена символа у строчки, первый параметр отвечает за условие, второй это коллбэк функция
//   return str.replace(/(^|\s)\S/g, (char) => {
//     return char.toUpperCase();
//   });
// }

// console.log(capitalizeFirstLetter("hello my friend"));

// Задание 3 (Замыкание)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

// const createCalculator = (def) => {
//     return {
//         value: def,
//         add(num) {
//             return this.value += num;
//             // return this.value + num;
//         },
//         subtract(num) {
//             return this.value -= num;
//             // return this.value - num;
//         }
//     };
// }

// const numberResult = createCalculator(10);
// console.log(numberResult.add(5));
// console.log(numberResult.subtract(5));

// Задание 4 (Лексический контекст)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

// const createGreeting = (name) => {
//     return function () {
//         return `Hello ${name}`
//     }
// }

// const greeting = createGreeting('John');
// console.log(greeting());; // Ожидаемый результат: "Hello, John!"

// Задание 5
// Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// const createPasswordChecker = (passwordLength) => {
//     return function (password) {
//         return password.length < passwordLength;
//     }
// }

// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// Задание 6 (Рекурсия)
// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

const sumDigits = (number) => {
  if (number < 10) {
    return number;
  }
  return (number % 10) + sumDigits(Math.floor(number / 10));
};

console.log(sumDigits(123));
console.log(sumDigits(456789));
/// 123 % 10 = 3 ... 123 / 10 = 12 ... 3 + 12 % 10 = 2 ...  12/10 = 1 ... 3 + 2 + 1 => 1 < 10
//   12
//   1 < 10 выход
