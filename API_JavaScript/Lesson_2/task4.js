'use strict'

// Задание 4

// Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям
// отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность
// для этого опросника, используя HTML, CSS и JavaScript.
// 1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен
// иметь несколько вариантов ответов.
// 2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
// 3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
// 4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все
// вопросы, и отобразить выбранные им варианты ответов.
// 5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить
// на все вопросы перед завершением опроса.
// 6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего
// пользовательского опыта.

const questionEls = document.querySelectorAll('.question')
const submitButtonEl = document.querySelector('#submit')
const resultsEl = document.querySelector('.result')
const resultsListEl = document.querySelector('.result-list')

submitButtonEl.addEventListener('click', function (e) {
	const answers = []
	questionEls.forEach(questionEl => {
		const answerEl = questionEl.querySelector('input:checked')
		if (answerEl) {
			answers.push(answerEl.value)
			questionEl.classList.remove('redBorder')
		} else {
			questionEl.classList.add('redBorder')
		}
	})

	if (questionEls.length === answers.length) {
		// alert("Пользователь на всё ответил!")
		resultsEl.style.display = 'block'
		resultsListEl.innerHTML = answers
			.map((answer, i) => `<p>Вопрос ${i + 1}: ${answer}</p>`)
			.join('')
	}
})
