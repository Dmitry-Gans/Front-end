import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import MessagesList from './components/MessagesList'
import ThemeSwitcher from './components/ThemeSwitcher'
import TextDisplayForm from './components/TextDisplayForm'

function App() {
	return (
		<div className='App'>
			<Greeting name='Дима' />
			<Greeting name='Жора' />
			<Counter />
			{/* <MessagesList /> Для обычного варианта без смены темы*/}
			<hr />
			<ThemeSwitcher />
			<hr />
			<TextDisplayForm />
		</div>
	)
}

export default App
