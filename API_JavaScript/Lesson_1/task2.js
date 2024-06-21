'use strict'

// Задание 2

// Необходимо создать страницу, в которой будут работать
// все три кнопки.
// - При нажатии на кнопку "Добавить элемент" на страницу
// добавляется новый квадратный элемент (<div>) с размерами
// 100x100 пикселей. Этот элемент должен иметь класс .box
// и содержать текст, указывающий порядковый номер элемента
// (1, 2, 3 и так далее).

const addButtonEl = document.querySelector('#addButton')

const containerEl = document.querySelector('#container')

addButtonEl.addEventListener('click', () => {
	const boxsEl = containerEl.querySelectorAll('.box').length
	containerEl.insertAdjacentHTML(
		'beforeend',
		`<div class="box">${boxsEl + 1}</div>`
	)
})

// - При нажатии на кнопку "Удалить элемент" удаляется
// последний добавленный элемент, если таковой имеется.

const removeButtonEl = document.querySelector('#removeButton')
removeButtonEl.addEventListener('click', () => {
	containerEl.lastElementChild?.remove()
})

// - При нажатии на кнопку "Клонировать элемент" создается
// копия последнего добавленного элемента и добавляется на
// страницу. Если последнего добавленного элемента нет на
// странице, необходимо вывести сообщение в alert, с надписью
// о невозможности клонирования, так как клонировать нечего.

const cloneButtonEl = document.querySelector('#cloneButton')

cloneButtonEl.addEventListener('click', () => {
	const cloneEl = containerEl.lastElementChild?.cloneNode(true)
	if (cloneEl) {
		containerEl.appendChild(cloneEl)
	} else {
		alert('!!!')
	}
})
