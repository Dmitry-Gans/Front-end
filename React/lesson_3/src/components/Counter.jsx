import { useState } from 'react'
import Button from '@mui/material/Button'

// Задание 2
// 1. Разработайте компонент Counter, который отображает число и
// две кнопки: одна для увеличения значения на 1, а другая для
// уменьшения на 1.
// 2. Используйте хук useState для управления состоянием счётчика.
// 3. Кнопки можно сделать с помощью material ui

// Команда для установки библиотеки:
// npm install @mui/material @emotion/react @emotion/styled

function Counter() {
	const [count, setCount] = useState(0)

	const handleIncrement = () => {
		setCount(count + 1)
	}

	const handleDecrement = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	return (
		<>
			<p>{count}</p>
			<Button variant='outlined' onClick={handleIncrement}>
				+1
			</Button>
			<Button variant='outlined' onClick={handleDecrement}>
				-1
			</Button>
		</>
	)
}

export default Counter
