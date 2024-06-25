'use strict'

// 2. Страница просмотра отзывов.
// Показывает список всех продуктов, на которые были оставлены отзывы.
// Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы"
// (надпись кнопки меняется), при нажатии на которую показываются / скрываются
// отзывы продукта.
// После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв
// из localstorage и со страницы.
// Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из
// localstorage, так и со страницы.

const key = 'reviews'

const reviews = JSON.parse(localStorage.getItem(key))

const containerEl = document.querySelector('.container')

// Выводим список всех продуктов, на которые были оставлены отзывы:
containerEl.innerHTML = reviews.map(review => createReviewHtml(review)).join('')

// Функция создания шаблона html для отзыва:
function createReviewHtml(review) {
	return `<div class="review" data-id="${review.id}">
	  <h1 class="product-name">${review.productName}</h1>
	  <button class="showReview none">Показать отзыв</button>
	  <button class="hideReview">Скрыть отзыв</button>
	  <div class="all-review">
		  <div class="item-review">
			  <p class="text">${review.reviewText}</p>
			  <button class="removeReview">Удалить отзыв</button>
		  </div>
	  </div>
  </div>
  `
}
