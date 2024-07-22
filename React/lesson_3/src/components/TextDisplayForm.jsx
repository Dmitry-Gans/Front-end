import { useState } from 'react'
import { TextField, Button } from '@mui/material'

// Задание 5
// Создать React компонент TextDisplayForm, который позволяет пользователю ввести текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию кнопки.

// ● Создание поля ввода (TextField)
//    ○ Добавить TextField для ввода текста пользователем.
//    ○ Установить метку (label) поля ввода на "Введите текст".
//    ○ Сделать поле ввода на всю ширину (fullWidth).
// ● Разместить кнопку под полем ввода.
//    ○ Установить текст кнопки на "Отобразить текст".
//    ○ При нажатии на кнопку введенный текст должен отображаться под
// кнопкой.
// ● Отображение введенного текста
//    ○ Использовать состояние для хранения введенного и отображаемого текста.
//    ○ При нажатии на кнопку текст из поля ввода должен отображаться в
// стилизованной карточке (Card) под кнопкой.
// ● Стилизация отображаемого текста
//    ○ Для отображения текста использовать компонент Typography с вариантом h5.

function TextDisplayForm() {
	// Создаем состояния для хранения текста в поле ввода:
	const [text, setText] = useState('')
	// И состояние для отображаемого текста:
	const [printText, setPrintText] = useState('')

	const handleText = event => {
		event.preventDefault()
		// Передаем текст из инпута в переменную для отображения:
		setPrintText(text)
		// Очищаем поле ввода:
		setText('')
	}
	return (
		<>
			<TextField
				label='Введите текст'
				variant='outlined'
				fullWidth
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<Button variant='contained' color='primary' onClick={handleText}>
				Отобразить текст
			</Button>
			<h2>{printText}</h2>
		</>
	)
}

export default TextDisplayForm