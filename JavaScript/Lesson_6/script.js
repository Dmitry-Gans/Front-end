/* <div id="block">
<p>1</p>
<p>2</p>
</div>
1 Получите ссылку на первый абзац из дива с id,
равным block, выведите его в консоль
2 Получите ссылку на первый абзац с классом www.
и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */

// const divEl = document.querySelector('div#block');
// console.log(divEl);

// // Первый вариант:
// console.log(document.querySelectorAll('div#block p.www')[0].innerHTML);

// // ВТорой вариант:
// console.log(devil.querySelectorAll('p.www')[0].innerHTML);

// Задание 2 (тайминг 15 минут)
// 1 Дан тег <a class="link" href="#">link text html</a>
// a. Вам необходимо поменять текст внутри ссылки на “link
// text js”
// b. Заменить href, на значение
// https://developer.mozilla.org/ru/
// 2 Дан тег <img class="photo" src="" alt="">
// a. Вам необходимо с помощью js поменять значение src на
// любое изображение из интернета

// const linkEl = document.querySelector("a.link");
// linkEl.innerHTML = "link text js";
// linkEl.href = "https://developer.mozilla.org/ru/";

// const imgEl = document.querySelector("img.photo");
// imgEl.src =
//   "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663110886_50-mykaleidoscope-ru-p-spokoinii-chelovek-vkontakte-62.jpg";

// Задание 3 (тайминг 20 минут)
// 1 Дан тег <div class="content"></div>
// 2 Создайте новый элемент p
// 3 Добавьте в него текст “Новый текстовый элемент”
// 4 Добавьте созданный элемент внутри <div
// class="content"></div>
// 5 Удалите добавленный узел

// const divEl = document.querySelector("div.content");
// const pEl = document.createElement('p');
// pEl.innerHTML = 'Новый текстовый элемент';
// divEl.appendChild(pEl);
// pEl.remove();

// Задание 4 (тайминг 15 минут)
// 1 Создать элемент button, добавить в блок <div
// class="content"></div>
// 2 При клике на который в консоль выводится сколько раз
// пользователь нажал на данную кнопку

// const divEl = document.querySelector("div.content");
// const btnEl = document.querySelector("button");
// divEl.appendChild(btnEl);

// let count = 0;

// btnEl.innerHTML = 'Button нажми на меня';
// btnEl.onclick = function (event) {
//     count++;
//     console.log(count);
// };

// Задание 4 (тайминг 20 минут)
// 1 Дан тег <div class="content"></div>
// 2 Создайте с помощью javascript новый элемент button
// 3 Добавьте текст для кнопки “Отправить”
// 4 При клике на данную кнопку необходимо чтобы текст
// поменялся на “Текст отправлен”

const divEl = document.querySelector("div.content");
const btnEl = document.createElement("button");
divEl.appendChild(btnEl);
btnEl.innerHTML = "Button нажми на меня";
btnEl.classList.add("btn"); //Создать класс тегу
// btnEl.style.color = 'blue'; // Но так лучше стили не создавать, так как они пишутся в сам HTML, а не в CSS

bottNew.onclick = function (e) {
  console.log(e.target); // target - хранит элемент на который кликнули
  e.target.innerHTML = "Текст отправлен";
};

// divEl.appendChild(bottNew);
// btnEl.onclick = function (event) {
//         count++;
//         console.log(count);
//     };
