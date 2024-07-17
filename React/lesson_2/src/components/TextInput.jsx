import { useState } from 'react'

// Задание 2
// Создать компонент TextInput, который содержит текстовое
// поле ввода и отображает введённый текст под ним в реальном
// времени.

function TextInput() {
	const [txt, setTxt] = useState()

	// Из event достаем свойство target с помощью деструктуризации, чтобы не писать event.target:
	const textChange = ({ target }) => {
		setTxt(target.value)
	}
	return (
		<>
			<input type='text' onChange={textChange} placeholder='Введите текст...' />
			<p>Отображение: {txt}</p>
		</>
	)
}

export default TextInput
