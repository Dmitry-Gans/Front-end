import { useEffect, useState } from 'react'

// Задание 4
// Создать компонент Timer, который отображает таймер, увеличивающийся на 1
// каждую секунду. Использовать useEffect для установки и очистки интервала.

function Timer() {
	const [time, setTime] = useState(new Date())

	// Используем хук useEffect для выполнения кода после рендеринга компонента:
	useEffect(() => {
		// Устанавливаем таймер, который будет вызывать setTime каждую секунду:
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)

		// Очищаем таймер при удалении компонента (например, при переключении страницы):
		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<>
			<p>Текущее время</p>
			<p>
				{time.toLocaleTimeString()}
			</p>
		</>
	)
}

export default Timer
