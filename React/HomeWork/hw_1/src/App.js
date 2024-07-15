import './App.css'
import Message from './components/Message'

function App() {
	return (
		<div className='App'>
			<Message title='Пробный заголовок 1' message='Пробный текст 1'/>
			<Message title='Пробный заголовок 2' message='Пробный текст 2'/>
			<Message title='Пробный заголовок 3' message='Пробный текст 3'/>
		</div>
	)
}

export default App
