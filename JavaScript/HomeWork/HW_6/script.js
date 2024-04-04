"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const idEl = document.getElementById("super_link");
console.log(idEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const linkEls = document.querySelectorAll("a.card-link");
for (let i = 0; i < linkEls.length; i++) {
  linkEls[i].innerHTML = "ссылка";
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const parentCard = document.querySelector("div.card-body");
const childCard = parentCard.querySelectorAll("a.card-link");
console.log(childCard);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const numberEl = document.querySelector('p[data-number="50"]');
console.log(numberEl);

// 5. Выведите содержимое тега title в консоль.

const titleValue = document.querySelector('title');
console.log(titleValue.innerHTML);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.\

const parentTitle = document.querySelector('h5.card-title')
console.log(parentTitle.parentElement);

// 7. Создайте тег 'p', запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const parentEl = document.querySelector('div.card');
const hello = document.createElement('p');
hello.innerHTML = 'Привет';

parentEl.insertBefore(hello, parentEl.childNodes[1]);


// 8. Удалите тег h6 на странице.

const subtitle = document.querySelector('h6');
subtitle.remove(subtitle);