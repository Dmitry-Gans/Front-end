import './App.css'
import Box from './components/Box'
import List from './components/List'

function App() {
	// Для второй задачи:
	const liElements = [
		'Пример 1',
		'Пример 2',
		'Пример 3',
		'Пример 4',
		'Пример 5',
	]

	// Функция для пропса renderItem у List:
	const render = (item, index) => {
		// Переменная в которую помещаем цвет для стилей:
		const style = { color: index % 2 === 0 ? 'aqua' : 'red' }
		return (
			<p style={style}>
				{index} - {item}
			</p>
		)
	}
	return (
		<>
			<Box>
				<h1>Box 1</h1>
				<p>Пробник 1</p>
			</Box>
			<Box>
				<h1>Box 2</h1>
				<p>Пробник 2</p>
			</Box>
			<hr />
			<List listItems={liElements} renderItem={render} />
		</>
	)
}

export default App
