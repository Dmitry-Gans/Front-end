// Задание 1:

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.

// const week = {
//     1:"Понедельник",
//     2:"Вторник",
//     3:"Среда",
//     4:"Четверг",
//     5:"Пятница",
//     6:"Суббота",
//     7:"Воскресенье",
// };
// console.log(week[2]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.

// const user = {
//     name:"Dmitry",
//     surname: "Gans",
//     age:29,
// }
// console.log(`Фамилию ${user.surname}, имя ${user.name} и возраст ${user.age}`);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.

// user.patronymic = prompt("Введите свою фамилию");
// console.log(user);

// 4. Удалите свойство surname.

// delete user.surname;
// console.log(user);

// Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.

// const weekString = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const weekNumber = [1, 2, 3, 4, 5, 6, 7];
// const week = {};

// for (let i = 0; i < weekString.length; i++) {
//   week[weekString[i]] = weekNumber[i];
// }
// console.log(week);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.

// const object = {
//   x: 1,
//   y: 2,
//   z: 3,
// };
// for (const key in object) {
//   object[key] **= 2;
// }
// console.log(object);

// Задание 3:
// Найдите сумму всех чисел, приведенного объекта.

// const obj = {
//     iodsuf: {
//         asd: 1,
//         zxc: {
//             khvxc: {
//                 ncxvm: 9,
//             },
//         },
//         qwd: 3,
//     },
//     gerg: {
//         joij: {
//             shdjk: 100,
//         },
//         kjn: 5,
//         iyu: 6,
//     },
//     xcnkv: {
//         oirje: 7,
//         iuhdv: 8,
//     },
//     idb: 1000,
// };

// function sum(obj) {
//     let curr = 0;
//     for (const key in obj) {
//         if (typeof obj[key] === "number") {
//             curr += obj[key];
//         } else  {
//             curr += sum(obj[key]);
//         }
//     }
//     return curr;
// }

// sum(obj);

// Задание 4:

// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.

// const riddle = {
//   question: "Зимой и летом, одним цветом",
//   answer: ["ёлка", "елка", "ель"],
//   hints: ["Это зеленое", "Это с иголками", "Это на новый год"], // Подсказки
//   askQuestion() {
//     let userAnswer = prompt(
//       `Введите ответ на загадку: ${this.question}`
//     ).toLocaleLowerCase();
//     if (this.answer.includes(userAnswer)) {
//       alert("Молодец, отгадал!");
//       return;
//     }

//     for (let i = 0; i < this.hints.length; i++) {
//       alert(`Подсказка: ${this.hints[i]}`);
//       userAnswer = prompt(
//         `Введите ответ на загадку: ${this.question}`
//       ).toLocaleLowerCase();
//       if (this.answer.includes(userAnswer)) {
//         alert("Молодец, отгадал!");
//         return;
//       }
//     }
//     alert("Соболезнуем...");
//   },
// };

// riddle.askQuestion();

// Вариант с оптимизацией GPT:

// const riddleCpt = {
//   question: "Зимой и летом одним цветом",
//   answer: ["ёлка", "ель", "елка"],
//   askQuestion() {
//     const userAnswer = prompt(
//       `Введите ответ на загадку : ${this.question}`
//     ).toLowerCase();

//     if (this.answer.includes(userAnswer)) {
//       alert("Поздравляем!");
//       return;
//     }

//     alert("Вы проиграли(");
//   },
// };

// riddleCpt.askQuestion();
