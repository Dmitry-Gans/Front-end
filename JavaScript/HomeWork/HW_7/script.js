"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdown = document.querySelectorAll("a.dropdown-item");
dropdown.forEach((item) => {
  item.classList.add("super-dropdown");
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btns = document.querySelectorAll("button.btn");

document.addEventListener("click", (e) => {
  btns.forEach((btn) => {
    btn.classList.toggle("btn-secondary");
  });
});

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menu = document.querySelectorAll("div.menu");
menu.forEach((item) => {
  item.classList.remove("dropdown-menu");
});

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divDropdown = document.querySelector("div.dropdown");
divDropdown.insertAdjacentHTML("afterend", '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const superId = (document.getElementById("dropdownMenuButton").id =
  "superDropdown");

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const attribute = document.querySelector("div.menu");
if (attribute.getAttribute("aria-labelledby") === "dropdownMenuButton") {
  attribute.dataset.dd = "3";
}

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const removeDT = document.querySelector("button.dropdown-toggle").removeAttribute('type');