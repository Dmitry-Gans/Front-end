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

const key = 'articles'

const containerArticleEl = document.querySelector('.containerArticle')

if (!localStorage.getItem(key)) {
	localStorage.setItem(key, bdJson)
}
const articles = JSON.parse(localStorage.getItem(key))
//вариант 1
// articles.forEach((element) => {
//   containerArticleEl.insertAdjacentHTML(
//     `beforeend`,
//     createArticleHtml(element)
//   );
// });
//вариант 2
containerArticleEl.innerHTML = articles
	.map(element => createArticleHtml(element))
	.join('')

containerArticleEl.addEventListener('click', event => {
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	if (!event.target.classList.contains('removeArticle')) {
		return
	}
	const articleEl = event.target.closest('.article')
	removeArticle(+articleEl.getAttribute('data-id'))

	articleEl.remove()
})
function removeArticle(articleId) {
	const articles = JSON.parse(localStorage.getItem(key))
	const articleIndex = articles.findIndex(article => article.id === articleId)
	articles.splice(articleIndex, 1)
	localStorage.setItem(key, JSON.stringify(articles))
}

const addNewArticleEl = document.querySelector('.addNewArticle')
addNewArticleEl.addEventListener('click', () => {
	// вариант 1
	//   const id = Date.now();
	//   const title = prompt("Введите заголовок");
	//   const text = prompt("Введите текст");
	const article = {
		id: Date.now(),
		title: prompt('Введите заголовок'),
		text: prompt('Введите текст'),
	}
	articles.push(article)
	localStorage.setItem(key, JSON.stringify(articles))
	containerArticleEl.insertAdjacentHTML(`beforeend`, createArticleHtml(article))
})

// const updateArticleEl = document.querySelector('.updateArticle')

containerArticleEl.addEventListener('click', event => {
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	if (!event.target.classList.contains('updateArticle')) {
		return
	}
	const articleEl = event.target.closest('.article')
	const article = articles.find(
		article => article.id === +articleEl.getAttribute('data-id')
	)

	article.title = prompt('Введите заголовок')
	article.text = prompt('Введите текст')

	//--------------запись в local storage-----------------------------
	localStorage.setItem(key, JSON.stringify(articles))
	articleEl.querySelector('.title').innerHTML = article.title
	articleEl.querySelector('.text').innerHTML = article.text
})

function createArticleHtml(article) {
	return `<div class="article" data-id="${article.id}">
          <div class="title">${article.title}</div>
          <div class="text">${article.text}</div>
          <button class="removeArticle">Удалить</button>
          <button class="updateArticle">редактировать</button>
        </div>
        `
}
