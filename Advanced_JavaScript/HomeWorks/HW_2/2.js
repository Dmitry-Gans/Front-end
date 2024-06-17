"use strict";

/*
Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50
символов в длину и не более 500. В случае неверной длины, необходимо выводить сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру.
На странице должны отображаться товары, под каждым товаром должен быть список
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

*/

const containerEl = document.querySelector(".container");

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

// Отрисовываем начальные данные:
initialData.forEach((element) => {
  // Переменная для накопления отзывов:
  let reviewsHTML = "";
  // Перебираем массив отзывов и добавляем их в переменную:
  element.reviews.forEach((review) => {
    reviewsHTML += `<p class="product__review">${review.text}</p>`;
  });

  containerEl.insertAdjacentHTML(
    "beforeEnd",
    `
    <div class="product">
  <h2 class="product__title">${element.product}</h2>
  <div class="product__listError">
    <p class="product__error20 none">Отзыв должен быть не менее 20 символов</p>
    <p class="product__error100 none">
      Отзыв должен быть не более 100 символов
    </p>
  </div>
  <form class="product__form">
    <input
      class="product__input"
      type="text"
      placeholder="Оставьте свой комментарий"
    />
    <button class="product__button" type="submit">Отправить</button>
  </form>
  <div class="product__listReviews">${reviewsHTML}</div>
</div>
    `
  );
});

// Обрабатываем событие на клик по кнопке:
containerEl.addEventListener("click", (event) => {
  // Отменяем стандартное поведение кнопки:
  event.preventDefault();
  // Находим ближайший главный родительский элемент кликнутого элемента:
  const targetItem = event.target.closest(".product");
  // Теперь находим внутри него нужные элементы:
  const error20 = targetItem.querySelector(".product__error20");
  const error100 = targetItem.querySelector(".product__error100");
  const button = targetItem.querySelector(".product__button");
  const title = targetItem.querySelector(".product__title");
  const input = targetItem.querySelector(".product__input");
  // Получаем значение введенного текста из инпута:
  const inputValue = input.value;

  // Проверяем, что кнопка принадлежит нужному элементу:
  if (event.target === button) {
    if (inputValue.length < 20) {
      error20.classList.remove("none");
    } else if (inputValue.length > 100) {
      error100.classList.remove("none");
    } else {
      error20.classList.add("none");
      error100.classList.add("none");

      // // Добавляем новый отзыв в массив:
      // initialData.forEach((element) => {
      //   if (element.product === title.textContent) {
      //     element.reviews.push({
      //       id: uid(),
      //       text: inputValue,
      //     });
      //   }
      // });

      // Переменная для разметки отзыва:
      const newReviewHTML = `<p class="product__review">${inputValue}</p>`;
      // Добавляем новый отзыв на страницу:
      targetItem
        .querySelector(".product__listReviews")
        .insertAdjacentHTML("beforeend", newReviewHTML);
      input.value = "";
    }
  }
});
