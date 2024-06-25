'use strict'

// Задание 2.

// Создайте простое модальное окно, которое появляется при клике
// на кнопку "Открыть модальное окно" и закрывается при клике на
// кнопку "Закрыть". Модальное окно должно содержать заголовок
// "Модальное окно" и кнопку для закрытия. Модальное окно должно
// плавно появляться и исчезать при открытии и закрытии.

const openModalButton = document.querySelector('.open-modal-button')
const modalWindow = document.querySelector('.modal-window')

const closeModalHandler = event => {
	if (
		event.target.closest('.modal-window') ||
		event.target === openModalButton
	) {
		return
	}

	modalWindow.style.display = 'none'

	console.log('Событие по window')
	window.removeEventListener('click', closeModalHandler)
}

openModalButton.addEventListener('click', event => {
	modalWindow.style.display = 'block'
	console.log('Событие block')

	window.addEventListener('click', closeModalHandler)
})
