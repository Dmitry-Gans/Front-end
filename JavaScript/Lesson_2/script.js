// Задание 1:
// 1. Создать две переменные и спросить у пользователя значения для данных

// const firstName = prompt("Введите имя");
// const age = prompt("Введите возраст");

// переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// 2. Вывести на экран текст:
// “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”

// console.log(`Добро пожаловать, ${firstName}. Ваше количество оборотов вокруг солнца - ${age}.`);


// Задание 2:

// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.

// const a =13;
// const b = 5;
// const c = a % b;
// console.log(c);

// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// alert(a); // Ответ undefined
// ```
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('abc' * 3);// Ответ NaN, строка на число не умножается
// ```
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert(1 / 0);// Ответ infinity
// alert(-1 / 0);// Ответ -infinity
// ```
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('2' * '3');// Ответ 6, строки переконвертируется в числа
// ```

// Задание 3:
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется
// в консоли. Определите, в какой строке кода случилась ошибка.

// const a;
// alert(a);

// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.

// const a = "2";
// const b = "3";

// console.log(a + b);

// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
// текст ниже, одной строкой с переносами строк:
// Сумма чисел равна “результат”.
// Разность чисел равна “результат”.
// Произведение чисел равно “результат”.
// Частное чисел равно “результат”.
// Остаток от деления чисел равен “результат”.

// const a = Number(prompt("Введите первое число"));
// const b = Number(prompt("Введите второе число"));
// console.log(`Сумма чисел равна ${+a+b}.
//     Разность чисел равна ${a-b}.
//     Произведение чисел равно ${a*b}.
//     Частное чисел равно ${a/b}.
//     Остаток от деления чисел равен ${a%b}.`);

// Задача 4
// 1. Не запуская код, определите, что выводится в консоль:

// console.log(String(true));// true
// console.log('a' + true); atrue
// console.log(Number(true));1
// console.log(true + 1);1 + 1 = 2
// console.log(true + true);1 + 1 = 2
// console.log(true - true);1 - 1 = 0
// console.log(String(true) + Number(true)); true1


// Задание 5:
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.

// const a = Number(prompt('Введите число:'));
// if (Number.isNaN(a)) { // Если а равно NaN
//     console.log("Введено не число");
// }
// else if (!Number.isFinite(a)) { // Если число не конечно, получаем ошибку
//     console.log("Ошибка");
// }
// else if (a === 5) {
//     console.log("Число равно 5");
// }
// else if (a > 5) {
//     console.log("Число больше 5");
// }
// else {
//     console.log("Число меньше 5");
// }

// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.

// const test1 = 12;
// const test2 = 10;

// if (test1 === test2) {
//     console.log("Равны");
// }
// else {
//     console.log("Не равны");
// }

// test1 === test2 ? console.log("Равны") : console.log("Не равны");

// console.log(test1 === test2 ? "Равны" : "Не равны");

// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.

// const firstNumber = Number(prompt("Введите первое число:"));
// const secondNumber = Number(prompt("Введите второе число:"));
// console.log(
//     firstNumber < secondNumber
//         ? `Минимальное число ${firstNumber}`
//         : `Минимальное число ${secondNumber}`
// );

// console.log(
//     `Минимальное число ${
//         firstNumber < secondNumber ? firstNumber : secondNumber
//     }`
// );

// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”

// const input = prompt('Введите число > 0 и < 15');
// const inputNumber = Number(input);
// if (inputNumber <= 0 && inputNumber >= 15) {
//     console.log(`А вы я смотрю хулиганите!
// ${input} - неверное значение`);
// } else {
//     console.log(`Спасибо за число ${inputNumber}`);
// }

// if(inputNumber > 0 && inputNumber < 15) {
//     console.log(`Спасибо за число ${inputNumber}`);
// } else {
//     console.log(`А вы я смотрю хулиганите!
// ${input} - неверное значение`);
// }


// Работа с отладчиком

// const firstNumber = prompt("Введите первое число:");
// const secondNumber = prompt("Введите второе число:");
// console.log(
//     firstNumber < secondNumber
//         ? `Минимальное число ${firstNumber}`
//         : `Минимальное число ${secondNumber}`
// );
// console.log(
//     `Минимальное число ${
//         firstNumber < secondNumber ? firstNumber : secondNumber
//     }`
// );


// Работа с выбором отдельного числа

// const num = 567;
// console.log(num % 10);
// console.log(Math.trunc(num / 10) % 10);
// console.log(Math.trunc(num / 100) % 10);