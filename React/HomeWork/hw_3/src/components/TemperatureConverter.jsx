import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import './TemperatureConverter.css'

// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

function TemperatureConverter() {
	const [celsius, setCelsius] = useState('')
	const [fahrenheit, setFahrenheit] = useState('')

	const handleConvert = () => {
		if (celsius !== '') {
			const f = (celsius * 9) / 5 + 32
			setFahrenheit(f.toFixed(2)) // Ограничиваем до 2 знаков после запятой
		}

		if (fahrenheit !== '') {
			const c = ((fahrenheit - 32) * 5) / 9
			setCelsius(c.toFixed(2)) // Ограничиваем до 2 знаков после запятой
		}
	}

	return (
		<>
			<div className='container-degree'>
				<TextField
					label='Градусы °C'
					variant='outlined'
					value={celsius}
					onChange={e => setCelsius(e.target.value)}
				/>
				<TextField
					label='Градусы °F'
					variant='outlined'
					value={fahrenheit}
					onChange={e => setFahrenheit(e.target.value)}
				/>
			</div>
			<Button variant='outlined' onClick={handleConvert}>
				Конвертировать
			</Button>
		</>
	)
}

export default TemperatureConverter
