// Задача 2.

// Бесконечная лента фотографий
// Для создания бесконечной ленты с фотографиями с использованием
// Unsplash API, выполните следующие шаги:
// 1. Зарегистрируйтесь на Unsplash:
// ○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// ○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
// ○ Войдите в свой аккаунт Unsplash.

// 2. Создайте приложение:
// ○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
// (https://unsplash.com/developers).
// ○ Нажмите на кнопку "Your apps".
// ○ Нажмите "New Application" (Новое приложение).
// ○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
// использовать http://localhost для тестового сайта).
// ○ После заполнения информации, нажмите "Create Application" (Создать приложение).

// 3. Получите API-ключ:
// ○ После создания приложения, вы получите API-ключ. Этот ключ будет
// отображаться в вашей панели управления приложением.
// ○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
// Скопируйте его.
// 4. Измените код HTML и JavaScript:
// ○ Откройте вашу HTML-страницу в текстовом редакторе или
// интегрированной среде разработки.
// ○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
// API-ключ.

// 5. Реализуйте загрузку фотографий при открытии страницы.

// 6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.

// Application ID
// 627819

// Access Key
// teI77ybP41b2nJcQY-mOmE8nEH0sFeXnWJQTxdgpZcA

let counter = 2
// Флаг для проверки, выполняется запрос или нет:
let isFetching = false
const photoContainerEl = document.querySelector('#photos-container')

// Secret key
// wKUQV2wZFilKkHnRh-7vDuLq_TbXQS6WcUho80C5rZw
document.addEventListener('DOMContentLoaded', Main)
document.addEventListener('scroll', async function () {
	// Получаем высоту элемента,
	// на котором произошло событие
	//   console.log(document.documentElement.scrollTop);
	//   console.log(document.documentElement.clientHeight); //высота страницы на текущий момент
	//   console.log(document.documentElement.scrollHeight);//хз

	//   console.log(`текущая прокрутка ${document.documentElement.scrollTop}`);
	//   console.log(`точка прокрутки ${document.documentElement.clientHeight - 100}`);

	// Ссылка на корневой HTML-элемент документа:
	const page = document.documentElement

	//  Проверяем, достиг ли пользователь конца страницы и не выполняется ли в данный момент запрос к API Unsplash:
	if (
		page.scrollTop + page.clientHeight >= page.scrollHeight - 100 &&
		!isFetching
	) {
		counter++
		await Main()
	}
})

// Асинхронная функция, которая выполняет запрос к API Unsplash для получения списка фотографий. Затем она обрабатывает ответ и возвращает промис объектов(позже превратим его в полноценный массив) с информацией о фотографиях:
async function fetchPhotoList(page) {
	// Открытие блока try, в котором находится код, который может вызвать исключение:
	try {
		// Установка флага isFetching в true, чтобы указать, что запрос выполняется:
		isFetching = true
		// Вызов функции fetch для отправки HTTP-запроса к API Unsplash. Оператор await ожидает завершения запроса и возвращает ответ. В качестве параметра передаем ссылку и объект включающий в себя конфигурацию:
		const response = await fetch(
			`https://api.unsplash.com/photos?page=${page}`,
			{
				// Объект конфигурации для запроса, включающий заголовок Authorization с моим ключом API:
				headers: {
					Authorization:
						'Client-ID teI77ybP41b2nJcQY-mOmE8nEH0sFeXnWJQTxdgpZcA',
				},
			}
		)
		// Проверка статуса ответа. Если статус не 200 (OK), то вызывается исключение:
		if (!response.ok) {
			throw new Error(`ошибка ,сервер статус ${response.status}`)
		}

		// Если ответ успешен, то вызов response.json() для преобразования ответа в JSON и возврат промиса с информацией о фотографиях:
		return await response.json()

		// Открытие блока finally, в котором находится код, который выполняется в любом случае, независимо от того, было ли вызвано исключение или нет:
	} finally {
		// Сброс флага isFetching в false, чтобы указать, что запрос завершен:
		isFetching = false
	}
}

// Асинхронная функция, которая выполняет основную работу:
async function Main() {
	// Получаем промис по текущему счетчику из функции, дожидаясь его завершения и присваиваем в новую переменную, тем самым промис превратился в обычный массив с данными:
	const data = await fetchPhotoList(counter)
	// Перебираем все элементы и отрисовываем их на странице внутри контейнера:
	photoContainerEl.innerHTML = data.map(element => createImg(element)).join('')

	// Второй вариант, как это сделать вручную:

	// Объявление и инициализация переменной imgsHTML пустой строкой:
	// let imgsHTML = ''
	// Перебираем каждый элемент:
	// data.forEach(element => {
	// Добавление HTML-разметку, возвращаемую функцией createImg(element), к imgsHTML:
	// imgsHTML += createImg(element)
	// })
	// Отрисовываем все элементы на странице внутри контейнера:
	// photoContainerEl.innerHTML = imgsHTML
}

// Функция, которая создает шаблон HTML-разметки для одной фотографии:
function createImg(objInfo) {
	return `<div class="photo">
        <img src="${objInfo.urls.regular}" alt="" />
      </div>`
}
