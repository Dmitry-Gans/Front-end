'use strict'

// Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

// На странице должна быть таблица с расписанием занятий, на основе JSON-данных.
// Каждая строка таблицы должна содержать информацию о занятии, а именно:
// - название занятия
// - время проведения занятия
// - максимальное количество участников
// - текущее количество участников
// - кнопка "записаться"
// - кнопка "отменить запись"

// Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.
// Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

// Пользователь может записаться на один курс только один раз.

// При нажатии на кнопку "записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

// Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.

// Начальные данные (JSON) в переменной data.

const data = `[
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
]`

const key = 'trainings'

// Получить элемент тела таблицы
const tbodyEl = document.querySelector('tbody')

// Проверяем наличие данных в локальном хранилище браузера:
if (!localStorage.getItem(key)) {
	localStorage.setItem(key, data)
}

// Получаем данные из локального хранилища браузера и преобразуем их в объект JavaScript:
const trainings = JSON.parse(localStorage.getItem(key))

// Заполняем тело таблицы c помощью созданной функции createTrainingHtml(), перебирая все данные из localStorage:
tbodyEl.innerHTML = trainings
	.map(training => createTrainingHtml(training))
	.join('')

// Шаблон создания HTML для занятий:
function createTrainingHtml(training) {
	return `<tr class = "training" data-id="${training.id}">
					<td class="name">${training.name}</td>
					<td class="time">${training.time}</td>
					<td class="maxParticipants">${training.maxParticipants}</td>
					<td class="currentParticipants">${training.currentParticipants}</td>
					<td><button class="buttonAdd">Записаться</button></td>
					<td><button class="buttonCancel" disabled>Отмена</button></td>
				</tr>`
}

// Добавляем обработчик на нажатие кнопок "Записаться"/"Отмена"
tbodyEl.addEventListener('click', el => {
	// Если нажали на кнопку "Записаться":
	if (el.target.classList.contains('buttonAdd')) {
		const trainingEl = el.target.closest('.training')
		const targetCurrent =
			trainings[trainingEl.dataset.id - 1].currentParticipants + 1
		const currentEl = trainingEl.querySelector('.currentParticipants')
		const maxEl = trainingEl.querySelector('.maxParticipants')
		const buttonAddEl = trainingEl.querySelector('.buttonAdd')
		const buttonCancelEl = trainingEl.querySelector('.buttonCancel')

		// Проверка на максимальное количество человек:
		if (Number(currentEl.innerHTML) < Number(maxEl.innerHTML)) {
			// Включаем доступ к кнопке "Отмена":
			buttonCancelEl.disabled = false
			const count = Number(currentEl.innerHTML) + 1
			currentEl.innerHTML = count

			// Перебираем массив, чтобы найти нужный элемент по id:
			trainings.forEach(element => {
				if (element.id === Number(trainingEl.dataset.id)) {
					// Перезаписываем текущее количество посетителей:
					element.currentParticipants = count
				}
			})

			// Сохраняем изменения в локальное хранилище браузера:
			localStorage.setItem(key, JSON.stringify(trainings))

			// Если достигнуто максимальное количество нажатий, для одного клиента:
			if (Number(currentEl.innerHTML) === targetCurrent) {
				// Выключаем доступ к кнопке:
				buttonAddEl.disabled = true
			}
		} else {
			// Если достигнуто максимальное количество человек, выключаем доступ к кнопке:
			buttonAddEl.disabled = true
		}
	}

	// Если нажали на кнопку "Отмена":
	if (el.target.classList.contains('buttonCancel')) {
		const trainingEl = el.target.closest('.training')
		const targetCurrent =
			trainings[trainingEl.dataset.id - 1].currentParticipants
		const currentEl = trainingEl.querySelector('.currentParticipants')
		const buttonAddEl = trainingEl.querySelector('.buttonAdd')
		const buttonCancelEl = trainingEl.querySelector('.buttonCancel')

		// Если клиент уже нажал 1 раз кнопку "Отмена":
		if (Number(currentEl.innerHTML) === targetCurrent) {
			// Выключаем доступ к кнопке:
			buttonCancelEl.disabled = true
		}

		// Включаем доступ к кнопке "Записаться":
		buttonAddEl.disabled = false
		const count = Number(currentEl.innerHTML) - 1
		currentEl.innerHTML = count

		trainings.forEach(element => {
			if (element.id === Number(trainingEl.dataset.id)) {
				element.currentParticipants = count
			}
		})
		localStorage.setItem(key, JSON.stringify(trainings))
	}
})
