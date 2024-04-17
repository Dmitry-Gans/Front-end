"use strict";

// Задание 1
// 1. Дан макет
// https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/sh
// op-(Copy)-(Copy)?node-id=73%3A140 в котором
// представлены товары на странице корзины
// 2. Необходимо создать файл data.js в котором создать
// переменную dataProducts в которую присвоить JSON
// данные по товарам.
// 3. Вам нужно самостоятельно создать JSON данные (не
// забыть про кавычки для ключей и значений
// 4. Добавить все данные из макета, чтобы в дальнейшим по
// ним мы смогли создать вёрстку

// 5. Создаём вёрстку по данному макету
// 6. Добавляем все теги и стили для них, чтобы получилось
// один в один как в макете
// 7. Пока данные для шаблонизации использовать не нужно

// 8. Создаём блоки с помощью javascript для этого используем данные
// из dataProducts
// 9. Формируем товары на основе нашей вёрстки
// 10. Проверяем, как будет выглядеть сайт, если в json данных, добавить
// еще один объект с товаром (в вёрстке должен появиться еще один
// блок, на основе этих данных)

const data = JSON.parse(DataJS);
const cartContainer = document.querySelector("div.containerCarts");

data.forEach((element) => {
  const tempEl = document.getElementById("cartTemplate");
  const clone = tempEl.content.cloneNode(true);

  clone.querySelector("img.cart__img").src = element.imgUrl;
  clone.querySelector("span.cart__name").innerHTML = element.name;
  clone.querySelector("span.cart__category").innerHTML = element.category;
  clone.querySelector("span.cart__priceSelect").innerHTML = element.price;
  clone.querySelector("span.cart__colorSelect").innerHTML = element.color;
  clone.querySelector("span.cart__sizeSelect").innerHTML = element.size;
  clone.querySelector("span.cart__quantitySelect").innerHTML = element.quantity;

  cartContainer.appendChild(clone);
});
