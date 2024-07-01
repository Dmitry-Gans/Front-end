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
containerEl.innerHTML = reviews
	.map(review => createProductHtml(review))
	.join('')

// Функция создания шаблона html для товара:
function createProductHtml(review) {
	// Переменная для перебора каждого отзыва
	const reviewItems = review.reviewText
		.map(item => {
			return `<div class="item-review">
              <p class="text">${item}</p>
              <button class="removeReview">Удалить отзыв</button>
            </div>`
		})
		.join('')

	return `<div class="review" data-id="${review.id}">
            <h1 class="product-name">${review.productName}</h1>
            <button class="showReview">Показать отзыв</button>
            <button class="hideReview none">Скрыть отзыв</button>
            <div class="all-review none">
              ${reviewItems}
            </div>
          </div>`
}

// Обработчик события для показа/скрытия отзывов:
containerEl.addEventListener('click', el => {
	// Если это кнопка "Показать отзывы" на которую нажали:
	if (el.target.classList.contains('showReview')) {
		const productEl = el.target.closest('.review')
		const allReviewEl = productEl.querySelector('.all-review')
		const buttonShowEl = el.target
		const buttonHideEl = productEl.querySelector('.hideReview')
		buttonShowEl.classList.add('none')
		buttonHideEl.classList.remove('none')
		allReviewEl.classList.remove('none')
		// Если это кнопка "Скрыть отзывы" на которую нажали:
	} else if (el.target.classList.contains('hideReview')) {
		const productEl = el.target.closest('.review')
		const allReviewEl = productEl.querySelector('.all-review')
		const buttonShowEl = productEl.querySelector('.showReview')
		const buttonHideEl = el.target
		buttonShowEl.classList.remove('none')
		buttonHideEl.classList.add('none')
		allReviewEl.classList.add('none')
	}
})

// Обработчик события для удаления отзыва:
if (containerEl.querySelector('.all-review')) {
	containerEl.addEventListener('click', (el) => {
		if (el.target.classList.contains('removeReview')) {
			const productEl = el.target.closest('.review')
			// Получаем id продукта
			const productId = productEl.dataset.id
			const productIndex = reviews.findIndex(review => review.id === productId)
			reviews.splice(productIndex, 1)
			localStorage.setItem(key, JSON.stringify(reviews))
			productEl.remove()
		}
	})
}

