import { useState } from 'react'

// Задание 3
// Создать компонент TodoList, который позволяет добавлять
// элементы в список дел через текстовое поле ввода. Список
// должен обновляться при добавлении нового дела.

function TodoList() {
	const [list, setList] = useState([])
	const [input, setInput] = useState()

	function addItem() {
		// Проверка на пустоту введенного текста:
		// Если текст пустой, ничего не добавляем в список и не меняем поле ввода
		if (!input.trim()) {
			return
		}
		// Если текст не пустой, добавляем его в конец списка:
		setList([...list, input])
		// Очищаем поле ввода:
		setInput('')
	}
	return (
		<>
			<label htmlFor='input'>Введите текст: </label>
			<input
				type='text'
				onChange={event => setInput(event.target.value)}
				id='input'
				value={input}
			/>
			<button onClick={addItem}>Добавить</button>
			<ul>
				{list.map(item => (
					<li key={list.indexOf(item)}>{item}</li>
				))}
			</ul>
		</>
	)
}

export default TodoList
