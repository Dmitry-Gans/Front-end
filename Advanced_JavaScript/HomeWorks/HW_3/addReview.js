'use strict'

// 1. Страница добавления отзыва о продукте.
// Должна содержать форму с полем для ввода названия продукта и текстовое поле
// для текста отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
// Необходимо реализовать проверку, оба поля должны быть заполнены, если это не
// так, необходимо выводить ошибку пользователю.

const key = 'reviews'

const dataReviews = `[
  {
    "id": 1,
    "productName": "Телевизор",
    "reviewText": {
      "1": ["Отличный телевизор"]
    }
  }
]`

// Проверяем наличие данных в локальном хранилище браузера:
if (!localStorage.getItem(key)) {
	localStorage.setItem(key, dataReviews)
}

// Получаем данные из локального хранилища браузера и преобразуем их в объект JavaScript:
const reviews = JSON.parse(localStorage.getItem(key))

document.querySelector('.button-review').addEventListener('click', () => {
	const productName = document.querySelector('.product-name').value
	const reviewText = document.querySelector('.review-text').value

	// Устраиваем проверку на заполненность полей:
	if (productName === '' || reviewText === '') {
		alert('Заполните все поля!')
	} else {
		// Ищем совпадение по имени продукта в массиве хранилище браузера:
		const existingReview = reviews.find(
			review => review.productName === productName
		)

		// Проверяем, оставляли ли уже отзыв на этот продукт:
		if (existingReview) {
			// Если да, добавляем новый отзыв к существующему продукту:
			const reviewId = Object.keys(existingReview.reviewText).length + 1
			existingReview.reviewText[reviewId] = [reviewText]

			// Обновляем данные в локальном хранилище браузера:
			localStorage.setItem(key, JSON.stringify(reviews))
		} else {
			// Если нет, добавляем новый продукт с новыми отзывами:
			const newReview = {
				id: reviews.length + 1,
				productName,
				reviewText: {
					1: [reviewText],
				},
			}
			reviews.push(newReview)
		}

		localStorage.setItem(key, JSON.stringify(reviews))
		alert('Отзыв успешно добавлен!')
	}

	// Очищаем поля формы:
	document.querySelector('.product-name').value = ''
	document.querySelector('.review-text').value = ''
})
