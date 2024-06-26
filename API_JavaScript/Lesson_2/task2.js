'use strict'

// Задание 2.

// Создайте простое модальное окно, которое появляется при клике
// на кнопку "Открыть модальное окно" и закрывается при клике на
// кнопку "Закрыть". Модальное окно должно содержать заголовок
// "Модальное окно" и кнопку для закрытия. Модальное окно должно
// плавно появляться и исчезать при открытии и закрытии.

const openModalButton = document.querySelector('.open-modal-button')
const modalWindow = document.querySelector('.modal-window')

// Функция для закрытия модального окна:
const closeModalHandler = event => {
	// Проверяем, кликнули ли мы внутри модального окна или кнопке закрытия:
	if (
		event.target.closest('.modal-window') ||
		event.target === openModalButton
	) {
		// Если да, то не закрываем модальное окно:
		return
	}

	// Иначе закрываем модальное окно:
	modalWindow.style.display = 'none'

	// После закрытия модального окна удаляем обработчик, чтобы обработчик не срабатывал, если мы не заимодействуем с модальным окном:
	window.removeEventListener('click', closeModalHandler)
}

openModalButton.addEventListener('click', event => {
	// Делаем модальное окно видимым:
	modalWindow.style.display = 'block'

	// После открытия модального окна добавляем еще один обработчик, на закрытие модального окна:
	window.addEventListener('click', closeModalHandler)
})
