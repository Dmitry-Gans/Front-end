'use strict'

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const img = [
	{
		id: 0,
		src: 'https://s0.rbk.ru/v6_top_pics/media/img/2/71/756173742871712.jpg',
	},
	{
		id: 1,
		src: 'https://monjaro.ru/attachments/geely-monjaro-jpg.429/',
	},
	{
		id: 2,
		src: 'https://avatars.dzeninfra.ru/get-zen_doc/9278169/pub_6434fb08ffa6097e6fb91322_643504805a8b3d77ca32e703/scale_1200',
	},
	{
		id: 3,
		src: 'https://www.pushcar.ru/img/public/2023/1674_4.jpg',
	},
	{
		id: 4,
		src: 'https://encarrus.ru/upload/resize_cache/iblock/e87/1920_1080_1/lhcpwm0bm8tfo08ki6faynqx5rhqlbue.png',
	},
]

const sliderContainerEl = document.querySelector('.slider-container')
const imgEL = sliderContainerEl.querySelector('img')
const navEl = sliderContainerEl.querySelector('.navButtons')
const buttonNextEl = sliderContainerEl.querySelector('.next-button')
const buttonPrevEl = sliderContainerEl.querySelector('.prev-button')

// Отобразить первую картинку при загрузке страницы:
imgEL.setAttribute('src', img[0].src)

// Переменная для цикличности переключения:
let currentIndex = 0
// Переменная для остановки автопереключения:
let intervalId

// Обновление изображения и пагинации при клике на кнопку "Следующее изображение":
buttonNextEl.addEventListener('click', () => {
	stopAutoSwitchImages()
	currentIndex = (currentIndex + 1) % img.length
	// Второй вариант:
	// currentIndex = ++currentIndex === img.length ? 0 : currentIndex
	imgEL.setAttribute('src', img[currentIndex].src)
	updatePagination(currentIndex)
	autoSwitchImages()
})

// Обновление изображения и пагинации при клике на кнопку "Предыдущее изображение":
buttonPrevEl.addEventListener('click', () => {
	stopAutoSwitchImages()
	currentIndex = (currentIndex - 1 + img.length) % img.length
	// Второй вариант:
	// currentIndex = currentIndex-- === 0 ? img.length - 1 : currentIndex
	imgEL.setAttribute('src', img[currentIndex].src)
	updatePagination(currentIndex)
	autoSwitchImages()
})

navEl.addEventListener('click', el => {
	if (el.target.classList.contains('pagination')) {
		stopAutoSwitchImages()
		currentIndex = +el.target.dataset.id
		imgEL.setAttribute('src', img[currentIndex].src)
		updatePagination(currentIndex)
		autoSwitchImages()
	}
})

// Обновление пагинации при изменении изображения:
function updatePagination(currentIndex) {
	const paginationEls = sliderContainerEl.querySelectorAll('.pagination')
	paginationEls.forEach(pagination => {
		pagination.classList.remove('scale')
		if (+pagination.dataset.id === currentIndex) {
			pagination.classList.add('scale')
		}
	})
}

// Обновление изображения при клике на навигационную точку:
function updateImg(paginationId) {
	imgEL.setAttribute('src', img[paginationId].src)
}

// Функция для автоматического переключения картинок:
function autoSwitchImages() {
	intervalId = setInterval(() => {
		// Для цикличности:
		currentIndex = (currentIndex + 1) % img.length
		imgEL.setAttribute('src', img[currentIndex].src)
		updatePagination(currentIndex)
	}, 3000)
}

// Функция для остановки автоматического переключения картинок:
function stopAutoSwitchImages() {
	clearInterval(intervalId)
}

// Запуск автоматического переключения картинок при загрузке страницы:
autoSwitchImages()
