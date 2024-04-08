// Задание 1 (тайминг 20 минут)
// 1 В html создать элемент checkbox и текст рядом с
// ним “Согласен с условиями”
// 2 Добавить кнопку отправить
// 3 При клике на кнопку отправить нужно проверять
// выбран ли активным элемент checkbox
// 4 Если элемент не выбран, добавить текст под
// чекбоксом “Необходимо согласиться с условиями”

// const divEl = document.querySelector('div.form');
// const btnEl = divEl.querySelector('button.btn');
// const checkEl = divEl.querySelector('input.check');

// btnEl.addEventListener('click', (e) => {
//     if(!checkEl.checked) {
//         const spanEl = document.createElement('span');
//         spanEl.innerHTML = "Необходимо согласиться с условиями";
//         divEl.appendChild(spanEl);
//     }
// });

// Задание 1 (тайминг 25 минут)
// 1 В html создать 2 элемента радио кнопки (input
// type=”radio”) и текст “Чай”, “Кофе”
// соответственно
// 2 Кнопка отправить
// 3 Если выбран чай, необходимо вывести сообщение
// “Чай закончился”
// 4 Если выбран кофе, необходимо вывести
// соообщение “кофе закончился”

// const divEl = document.querySelector("div.container");
// const inputTea = divEl.querySelector("input.tea");
// const inputCoffe = divEl.querySelector("input.coffe");
// const btnEl = divEl.querySelector("button.btn");

// btnEl.addEventListener("click", (e) => {
//   if (inputCoffe.checked) {
//     console.log("Кофе закончился");
//   } else if (inputTea.checked) {
//     console.log("Чай закончился");
//   } else {
//     console.log('Сделайте выбор');
//   }
// });

// Задание 3 (тайминг 20 минут)
// 1 Создать поле ввода (пароль)
// 2 Кнопка отправить
// 3 Если пользователь вводит текст “пароль” то поле ввода
// должно быть подсвечено зеленым цветом
// 4 Если пароль неверный, у поля ввода появляется красная
// обводка и текст “пароль неверный”

// const password = '123';
// const divEl = document.querySelector('div.container');
// const inputEl = divEl.querySelector('input.password');
// const btnEl = divEl.querySelector('button.btn');

// btnEl.addEventListener('click', (e) => {
//     if(inputEl.value === password) {
//         inputEl.classList.remove('border-red')
//         inputEl.classList.add('border-green');
//     } else {
//         inputEl.classList.remove('border-green')
//         inputEl.classList.add('border-red');
//     }
// });

// Задание 4 (тайминг 20 минут)
// 1 Создать поле ввода и под ним заголовок h1 с текстом
// “Заголовок”
// 2 При вводе текста в поле ввода необходимо чтобы текст
// внутри заголовка менятся на введенный в поле ввода

// const divEl = document.querySelector("div.container");
// const inputEl = divEl.querySelector("input.input");
// const titleEl = divEl.querySelector("h2.title");
// const subtitleEl = divEl.querySelector("h3.subtitle");

// inputEl.addEventListener("input", (e) => {
//   titleEl.innerHTML = e.target.value; //Получаем значение из input которые вбили в ручную и он сразу показывается на экране в реальном времени
// });

// inputEl.addEventListener("change", (e) => {
//   subtitleEl.innerHTML = e.target.value; //Получаем значение из input которые вбили в ручную и он выводится на экране после завершения
// });
