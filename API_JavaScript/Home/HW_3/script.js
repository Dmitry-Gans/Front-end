'use strict'

// Цель: Разработать веб-приложение, которое будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Регистрация на Unsplash:

// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

// Создание приложения:

// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.

// Application ID:
// 631434

// Access Key:
// psEPQNl321YGHzaMQ5coI9l3N_LmQZ0Lqt7XBIMmRIg

// Secret key
// 7t5ybsE-uIayLGbdlV4-rEE5r70wSNS12CePyLo5iOk

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу. Обратите внимание, что должно подгружаться всегда случайное изображение, для этого есть отдельная ручка (эндпоинт) у API.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу. Одну фотографию пользователь может лайкнуть только один раз. Также должна быть возможность снять лайк, если ему разонравилась картинка.
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался, если будет показана та же самая картинка.
// • Реализуйте возможность просмотра предыдущих фото с сохранением их в истории просмотров в localstorage.
// • Реализовать все с помощью async/await, без цепочем then.

const containerEl = document.querySelector('.container')
const imgEl = containerEl.querySelector('.img')
const btnLikeEl = containerEl.querySelector('.like-btn')
const btnHistoryEl = containerEl.querySelector('.btn-history')
const historyContainerEl = containerEl.querySelector('.history-container')
const key = 'photo'

// Парсим данные из localStorage и превращаем в объект:
const historyBrowser = JSON.parse(localStorage.getItem(key))
// Если ничего не пришло, то присваиваем пустой массив:
if (!historyBrowser) {
	historyBrowser = []
}

document.addEventListener('DOMContentLoaded', main)

btnLikeEl.addEventListener('click', likeClick)

btnHistoryEl.addEventListener('click', historyClick)

// Функция для получения случайного изображения из Unsplash:
async function fetchPhoto() {
	const response = await fetch('https://api.unsplash.com/photos/random', {
		headers: {
			Authorization: `Client-ID psEPQNl321YGHzaMQ5coI9l3N_LmQZ0Lqt7XBIMmRIg`,
		},
	})

	if (!response.ok) {
		throw new Error(`Ошибка: ${response.status}`)
	}

	return await response.json()
}

// Функция для загрузки страницы и отображения случайного изображения:
async function main() {
	const data = await fetchPhoto()
	addSrc(data)
}

// Функция для проверки повтора и добавления изображения в контейнер:
function addSrc(data) {
	const newSrc = data.urls.regular
	const currentLikes = containerEl.querySelector('.likes').innerHTML

	if (!historyBrowser.some(photo => photo.src === newSrc)) {
		imgEl.setAttribute('src', newSrc)
		historyBrowser.push({ src: newSrc, like: currentLikes })
		localStorage.setItem(key, JSON.stringify(historyBrowser))
	} else {
		const like = containerEl.querySelector('.likes')
		const foundPhoto = historyBrowser.find(photo => photo.src === newSrc)
		imgEl.setAttribute('src', foundPhoto.src)
		like.innerHTML = foundPhoto.like
	}
}

// Функция для обработки нажатия кнопки "лайк":
function likeClick() {
	let currentLikes = parseInt(containerEl.querySelector('.likes').innerHTML)
	const likeBtn = btnLikeEl

	if (likeBtn.classList.contains('unlike')) {
		currentLikes -= 1
		likeBtn.classList.remove('unlike')
		likeBtn.classList.add('like')
	} else {
		currentLikes += 1
		likeBtn.classList.remove('like')
		likeBtn.classList.add('unlike')
	}

	containerEl.querySelector('.likes').innerHTML = currentLikes
	updateHistoryBrowser(imgEl.src, currentLikes)
}

// Функция для отображения истории просмотра:
function historyClick() {
	if (historyContainerEl.classList.contains('none')) {
		historyContainerEl.innerHTML = historyBrowser
			.map(photo => createHistory(photo))
			.join('')
		historyContainerEl.classList.remove('none')
	} else {
		historyContainerEl.classList.toggle('none')
	}
}

// Функция для обновления лайков в локальном хранилище:
function updateHistoryBrowser(src, like) {
	historyBrowser.forEach(element => {
		if (element.src === src) {
			element.like = like
		}
	})
	localStorage.setItem(key, JSON.stringify(historyBrowser))
}

// Функция для создания шаблона отрисовки истории просмотров:
function createHistory(data) {
	return `
				<div class="card">
					<div class="img-container">
						<img class="img" src="${data.src}" alt="Image" />
					</div>
					<h2 class="nameAuthor">Лара Крофт</h2>
					<div class="like-container">
						<button class="like-btn">❤</button>
						<span class="likes">${data.like}</span>
					</div>
				</div>`
}
