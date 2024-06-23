'use strict'

// Задание 3.
// Необходимо создать страницу со списком статей.
// Каждая статья состоит из id, заголовка, текста статьи.
// id - будем брать из unix timestamp.
// Необходимо подготовить список статей в JSON-формате,
// которые будут выводиться на странице при первом ее
// открытии.
// Необходимо реализовать возможность удаления статьи.
// Необходимо реализовать возможность добавления статьи.
// Необходимо реализовать возможность изменения статьи,
// ввод данных можно реализовать через prompt.
// Статьи должны сохраняться в локальное хранилище
// браузера, и должны быть доступны после перезагрузки
// страницы.

// Это массив, обернутый в строку с данными о статьях
// Имитация JSON.stringify():
const bdJson = `[
  {
    "id": 1718993473586,
    "title": "заголовок1",
    "text": "text1"
  },
  {
    "id": 1718993473587,
    "title": "заголовок2",
    "text": "text2"
  }
]`

// Ключ для хранения данных в локальном хранилище браузера:
const key = 'articles'

const containerArticleEl = document.querySelector('.containerArticle')

// Если в локальном хранилище браузера нет данных:
if (!localStorage.getItem(key)) {
	// Сохраняем данные в локальном хранилище браузера:
	localStorage.setItem(key, bdJson)
}

// Получаем данные из локального хранилища браузера, будем использовать их,
// чтобы не трогать исходные данные:
const articles = JSON.parse(localStorage.getItem(key))

// Вариант через .forEach() и insertAdjacentHTML:
// articles.forEach((element) => {
//   containerArticleEl.insertAdjacentHTML(
//     `beforeend`,
//     createArticleHtml(element)
//   );
// });

// Вариант через innerHTML:
// С помощью .map() перебираем у articles все элементы,
// применяем к ним функцию createArticleHtml() - тем самым заполняем шаблон дял
// каждой статьи в контейнере. Разделителем служит пробел:
containerArticleEl.innerHTML = articles
	.map(element => createArticleHtml(element))
	.join('')

// Вешаем обработчик события на кнопку удаления статьи через родительский элемент:
containerArticleEl.addEventListener('click', event => {
	// Если кликнули не по кнопке удаления статьи:
	if (!event.target.classList.contains('removeArticle')) {
		// Тогда останавливаем действие по умолчанию:
		return
	}
	// Если кликнули по кнопке удаления статьи, находим родительский элемент:
	const articleEl = event.target.closest('.article')
	// Вызываем функцию removeArticle() для удаления из хранилища браузера,
	// передаем id статьи, с помощью getAttribute()
	// находим его и превращаем строку в число:
	removeArticle(+articleEl.getAttribute('data-id'))

	// Удаляем статью из контейнера:
	articleEl.remove()
})

// Функция удаления статьи из локального хранилища браузера,
// в параметра принимаем id статьи:
function removeArticle(articleId) {
	// Получаем данные из локального хранилища браузера:
	const articles = JSON.parse(localStorage.getItem(key))
	// Находим индекс статьи в массиве articles,
	// с помощью findIndex() и передаем функцию,
	// которая принимает элемент массива и возвращает true,
	// если id статьи совпадает с переданным:
	const articleIndex = articles.findIndex(article => article.id === articleId)
	// Удаляем статью из массива articles:
	articles.splice(articleIndex, 1)
	// Сохраняем изменения в локальном хранилище браузера:
	localStorage.setItem(key, JSON.stringify(articles))
}

const addNewArticleEl = document.querySelector('.addNewArticle')

// Вешаем обработчик события на кнопку добавления статьи:
addNewArticleEl.addEventListener('click', () => {
	// Создаем новый объект с данными статьи:
	const article = {
		// С помощью Date.now() получаем текущее время,
		// тем самым имитируя индивидуальный id статьи:
		id: Date.now(),
		// С помощью prompt() получаем данные из полей ввода,
		// и сохраняем их сразу в свойствах объекта article:
		title: prompt('Введите заголовок'),
		text: prompt('Введите текст'),
	}

	// Добавляем статью в массив articles:
	articles.push(article)
	// Сохраняем изменения в локальном хранилище браузера:
	localStorage.setItem(key, JSON.stringify(articles))
	// Вставляем новую статью в контейнер через insertAdjacentHTML(),
	//и шаблоном для статьи создающимся в функции createArticleHtml():
	containerArticleEl.insertAdjacentHTML(`beforeend`, createArticleHtml(article))
})

// Вешаем обработчик события на кнопку редактировать через родительский элемент:
containerArticleEl.addEventListener('click', event => {
	// Если кликнули не по кнопке редактировать:
	if (!event.target.classList.contains('updateArticle')) {
		// Тогда останавливаем действие по умолчанию:
		return
	}
	// Если кликнули по кнопке редактировать, находим родительский элемент статьи:
	const articleEl = event.target.closest('.article')
	// Находим id статьи, с помошью find(), getAttribute() и превращаем строку в число:
	const article = articles.find(
		article => article.id === +articleEl.getAttribute('data-id')
	)

	// Получаем данные из полей ввода,
	// и сразу их перезаписываем в свойствах найденной статьи:
	article.title = prompt('Введите заголовок')
	article.text = prompt('Введите текст')

	// Сохраняем изменения в локальном хранилище браузера:
	localStorage.setItem(key, JSON.stringify(articles))
	// Перезаписываем статью в контейнере через innerHTML:
	articleEl.querySelector('.title').innerHTML = article.title
	articleEl.querySelector('.text').innerHTML = article.text
})

// Функция создания шаблона html для статьи:
function createArticleHtml(article) {
	return `<div class="article" data-id="${article.id}">
          <div class="title">${article.title}</div>
          <div class="text">${article.text}</div>
          <button class="removeArticle">Удалить</button>
          <button class="updateArticle">редактировать</button>
        </div>
        `
}
