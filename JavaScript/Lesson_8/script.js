"use strict";

// Задание 1 (тайминг 15 минут)
// 1 В html создать кнопку button
// 2 После загрузки страницы вывести в консоль текст
// “страница загрузилась”
// 3 Добавить событие onclick которое выводит в
// консоль текст “событие onclick”
// 4 Добавить событие addEventListener которое
// выводит в консоль текст “событие
// addEventListener”

// const findBtn = document.querySelector("button.btn");

// window.addEventListener("load", (e) => {
//   console.log("Страница загрузилась");
// });

// findBtn.addEventListener("click", (e) => {
//   console.log("Событие onclick");
// });

// findBtn.addEventListener("click", (e) => {
//   console.log("Событие addEventListener");
// });

// Задание 2 (тайминг 30 минут)
// 1 Создать в html три кнопки button с нумерацией (1, 2, 3
// соответственно)
// 2 Добавить клик на кнопку , чтобы в консоль выводилась
// именно та кнопка на которую мы нажали

// const divContainer = document.querySelector("div.container");

// const button1 = document.createElement("button");
// button1.innerHTML = "Кнопка1";
// const button2 = document.createElement("button");
// button2.innerHTML = "Кнопка2";
// const button3 = document.createElement("button");
// button3.innerHTML = "Кнопка3";
// const button4 = document.createElement("button");
// button4.innerHTML = "Кнопка4";
// const button5 = document.createElement("button");
// button5.innerHTML = "Кнопка5";

// divContainer.appendChild(button1);
// divContainer.appendChild(button2);
// divContainer.appendChild(button3);
// divContainer.appendChild(button4);
// divContainer.appendChild(button5);

// const clickBtn = (e) => {
//   console.log(e.target.innerHTML);
// };

// button1.addEventListener("click", clickBtn);
// button2.addEventListener("click", clickBtn);
// button3.addEventListener("click", clickBtn);

// 3 Добавить кнопку button с текстом 4, которая считает
// сколько раз на нее нажали и количество нажатий на эту
// кнопку выводит в консоль

// let count = 0;

// button4.addEventListener("click", (e) => {
//     count++;
//     console.log(count);
// });

// 4 Создать кнопку button с текстом 5, При клике на которую,
// меняется текст данной кнопки на “Вы нажали на эту
// кнопку”

// button5.addEventListener("click", (e) => {
//     e.target.innerHTML = 'Вы нажали на эту кнопку';
// });

// Задание 3 (тайминг 30 минут)
// 1 Создать кнопку, которая добавляем заголовок h1 с текстом,
// “Новый заголовок, данный элемент нужно расположить
// после кнопки

// const buttonContainer = document.querySelector("div.container");
// const btn1 = document.createElement("button");
// btn1.innerHTML = "Создаю заголовок";
// buttonContainer.appendChild(btn1);

// btn1.addEventListener("click", (e) => {
//   const h1Text = document.createElement("h1");
//   h1Text.innerHTML = "Новый заголовок";
//   buttonContainer.appendChild(h1Text);
// });

// 2 Создать вторую кнопку, которая будет удалять созданный
// заголовок h1

// const btn2 = document.createElement("button");
// btn2.innerHTML = "Удалить заголовок";
// buttonContainer.appendChild(btn2);
// btn2.addEventListener("click", (e)  {
//   const h1Array = buttonContainer.querySelectorAll("h1");
//   h1Array.forEach((el) => {
//     el.remove();
//   });
// });

// 3 Создать третью кнопку, при наведении на которую в
// консоль будет выводиться текст “вы навели на данную
// кнопку” , как только вы убираем курсор мыши с кнопки, в
// консоли должен появиться текст “Наведения на кнопку
// больше нет”

// const btn3 = document.createElement("button");
// btn3.innerHTML = "Наведись на меня";
// buttonContainer.appendChild(btn3);

// btn3.addEventListener("mouseover", (e) => {
//   console.log("вы навели на данную кнопку");
// });
// btn3.addEventListener("mouseleave", (e) => {
//   console.log("Наведения на кнопку  больше нет");
// });

// Задание 4:
// 1. Создать в html список состоящий из 3-х произвольных элементов li
// 2. Нужно создать кнопку которая будет добавлять элементы списка с текстом "Новый элемент"

// const buttonContainer = document.querySelector("div.container");
// const ulEl = buttonContainer.querySelector("ul");
// const btn1 = document.createElement("button");
// btn1.innerHTML = "Создать новый элемент";
// buttonContainer.appendChild(btn1);

// btn1.addEventListener("click", (e) => {
//   const liEl = document.createElement("li");
//   liEl.innerHTML = "новый элемент списка " + Math.floor(Math.random(1) * 100);
//   ulEl.appendChild(liEl);
// });

// 3. Создать кнопку, которая будет удалять первый элемент из созданного списка

// const btn2 = document.createElement("button");
// btn2.innerHTML = "Удалить добавленный элемент";
// buttonContainer.appendChild(btn2);

// btn2.addEventListener("click", function (e) {
//   const liArray = ulEl.querySelectorAll("li");
//   if (liArray.length > 0) {
//     liArray[liArray.length-1].remove();
//   }
// });

// 4. Создать кнопку, при клике на которую ей добавляется класс "click"

// const btn3 = document.createElement("button");
// btn3.innerHTML = "Добавить класс";
// buttonContainer.appendChild(btn3);

// btn3.addEventListener("click", function (e) {
//   e.target.setAttribute("class", "click");
// });
