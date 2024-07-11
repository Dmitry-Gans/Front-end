import logo from './logo.svg'
import './App.css'
import Hello from './components/Hello.js'
import More from './components/More.js'
import CurrentTime from './components/CurrentTime.js'
import EventCard from './components/EventCard.js'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Hello />
				<CurrentTime />
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					<More />
				</a>
				<div className='container-card'>
					<EventCard name='Йога' time='12:00' location='Москва' />
					<EventCard
						name='Бокс'
						time='16:00'
						location='Коломна'
						propsBoolean='false'
					/>
				</div>
			</header>
		</div>
	)
}

export default App
