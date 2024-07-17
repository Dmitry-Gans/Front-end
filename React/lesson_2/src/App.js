import './App.css'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import TodoList from './components/TodoList'
import Timer from './components/Timer'

function App() {
	return (
		<div className='App'>
			<Counter />
			<hr></hr>
			<TextInput />
			<hr></hr>
			<TodoList />
			<hr></hr>
			<Timer />
		</div>
	)
}

export default App
