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

console.log(reviews)
// Выводим список всех продуктов, на которые были оставлены отзывы:
containerEl.innerHTML = reviews
	.map(review => createProductHtml(review))
	.join('')

// Функция создания шаблона html для товара:
function createProductHtml(review) {
	// Переменная для перебора каждого отзыва
	// C помощью Object.entries() - преобразуем объект в массив пар ключ-значение и чтобы к нему применить метод map():
	const reviewItems = Object.entries(review.reviewText)
		.map(([reviewId, reviewItem]) => {
			return `<div class="item-review" data-review-id="${reviewId}">
                <p class="text">${reviewItem}</p>
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

// Проверка, открыто ли окно с отзывами:
if (containerEl.querySelector('.all-review')) {
	// Обработчик события для удаления отзыва:
	containerEl.addEventListener('click', el => {
		if (el.target.classList.contains('removeReview')) {
			const removeEl = el.target.closest('.removeReview')
			const productEl = el.target.closest('.review')
			const productId = +productEl.getAttribute('data-id')
			const reviewEl = removeEl.closest('.item-review')
			const reviewId = +reviewEl.getAttribute('data-review-id')
			// Перебираем массив:
			reviews.forEach(product => {
				// Если id продукта совпадает с id удаляемого продукта:
				if (product.id === productId) {
					// Удаляем по id нужный нам отзыва:
					delete product.reviewText[reviewId]
					// Обновляем данные в локальном хранилище браузера:
					localStorage.setItem(key, JSON.stringify(reviews))
					// Удаляем отзыв со страницы
					reviewEl.remove()
				}
			})

			// Если удалены все отзывы продукта, то продукт вовсе должен быть удален со страницы, поэтому переменную allReviewEl объявляем в конце, если ее объявить выше, то длинна будет не 0:
			const allReviewEl = productEl.querySelectorAll('.item-review')
			if (allReviewEl.length === 0) {
				productEl.remove()
			}
		}
	})
}
