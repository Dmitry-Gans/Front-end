"use strict";

const dataProducts = JSON.parse(dataProductsItem); // Парсим JSON файл
const articleProductEl = document.querySelector("article.products-content");

//Создание карточек продукта:
dataProducts.forEach((element) => {
  // Перебираем каждый элемент в JSON файле
  const templateEl = document.getElementById("cartTemplate"); // Находим шаблон по индексу
  const clone = templateEl.content.cloneNode(true); // Делаем копию шаблона

  // Заполняем шаблон с помощью полей JSON файла
  clone.querySelector("img.products-content__img-bg").src = element.src;
  clone.querySelector("p.products-content__button_text").innerHTML =
    element.textButton;
  clone.querySelector("h2.products-content__title").innerHTML = element.title;
  clone.querySelector("p.products-content__text").innerHTML =
    element.textContent;
  clone.querySelector("p.products-content__price").innerHTML = element.price;

  articleProductEl.appendChild(clone); // Добавляем готовый шаблон внутрь нужного родителя
});

// Переменные для взаимодействия с корзиной:
const articleCartPreview = document.querySelector("article.cartPreview");
const divCartBoxEl = document.querySelector("div.cart-content__box");
const divCartEl = document.querySelector("div.cart-content__selected");
const buttonAddToCart = document.querySelectorAll("a.products-content__button");
const titleCart = divCartBoxEl.querySelector("h2.cart-content__box-title");
const counterValue = document.querySelector("p.nav__number");

// Счетчик сколько товаров в корзине над иконкой "Корзина":
buttonAddToCart.forEach((e) => {
  // Перебираем каждую кнопку и накладываем event
  e.addEventListener("click", (e) => {
    const number =
      divCartEl.querySelectorAll("div.cart-content__selected-item").length + 1; // Создаем переменную для отслеживания, она следит, сколько товаров в корзине, массив начинается с 0, поэтому + 1
    counterValue.classList.remove("none");
    counterValue.innerHTML = number; // Присваиваем количество  товаров иконке
  });
});

//Добавление карточек в корзину:
buttonAddToCart.forEach((e, index) => {
  // Перебираем все кнопки и накладываем event
  e.addEventListener("click", (e) => {
    const templateCartEl = document.getElementById("templateCartItem");
    const cloneCart = templateCartEl.content.cloneNode(true);

    articleCartPreview.classList.remove("none");
    titleCart.classList.remove("none");
    cloneCart.querySelector("img.cart-content__img").src =
      dataProducts[index].src;
    cloneCart.querySelector("p.cart-content__title").innerHTML =
      dataProducts[index].title;
    cloneCart.querySelector("span.text-price").innerHTML =
      dataProducts[index].price;
    cloneCart.querySelector("span.text-colors").innerHTML =
      dataProducts[index].color;
    cloneCart.querySelector("span.text-size").innerHTML =
      dataProducts[index].size;

    divCartEl.appendChild(cloneCart);
  });
});

//Удаление карточек из корзины:
divCartEl.addEventListener("click", (e) => {
  // Захватываем всю область после заголовка Корзины
  if (e.target.closest(".cart-content__button")) {
    // Делегируем event только наследнику(Кнопка удалить/закрыть)
    const deleteItem = e.target.closest(".cart-content__selected-item"); // При нажатии на кнопку Удалить, ищем родительский элемент всей карточки

    deleteItem.remove(); // Удаляем родительский элемент(Карточку)

    counterValue.innerHTML -= 1; // Убавляем счетчик у верхней иконки у корзины

    // Проверка у иконки, если у иконки будет 0, то скрываем всю иконку
    if (counterValue.innerHTML.includes("0")) {
      counterValue.classList.add("none");
    }
  }

  // Вызываем метод на проверки наличия товаров в корзине
  checkCart();
});

// Метод, проверяющий корзину, если она пуста, то скрываем весь блок Предпросмотра корзины
const checkCart = () => {
  if (
    divCartEl.querySelectorAll("div.cart-content__selected-item").length === 0
  ) {
    articleCartPreview.classList.add("none");
  }
};
