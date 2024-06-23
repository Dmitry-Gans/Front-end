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
    "reviewText": ["Отличный телевизор"]
  }
]`

// Проверяем наличие данных в локальном хранилище браузера:
if (!localStorage.getItem(key)) {
	localStorage.setItem(key, dataReviews)
}

// Получаем данные из локального хранилища браузера, будем использовать их,
// чтобы не трогать исходные данные:
const reviews = JSON.parse(localStorage.getItem(key))

document.querySelector('.button-review').addEventListener('click', () => {
	const productName = document.querySelector('.product-name').value
	const reviewText = document.querySelector('.review-text').value
	if (productName === '' || reviewText === '') {
		alert('Заполните все поля!')
	} else {
		const existingReview = reviews.find(
			review => review.productName === productName
		)

		if (existingReview) {
			// Добавляем новый отзыв к существующему продукту:
			existingReview.reviewText.push(reviewText)
			// Обновляем данные в локальном хранилище браузера:
			localStorage.setItem(key, JSON.stringify(reviews))
		} else {
			// Добавляем новый продукт с своими отзывами:
			const newReview = {
				id: reviews.length + 1,
				productName,
				reviewText: [reviewText],
			}
			reviews.push(newReview)
		}
		localStorage.setItem(key, JSON.stringify(reviews))
		alert('Отзыв успешно добавлен!')
	}
	document.querySelector('.product-name').value = ''
	document.querySelector('.review-text').value = ''
})
