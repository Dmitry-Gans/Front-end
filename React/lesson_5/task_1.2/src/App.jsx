import { useContext } from 'react'; // Импортируем React и useContext для работы с контекстами
import { UserProvider, UserContext } from './components/UserContext'; // Импортируем UserProvider
import { ThemeProvider, ThemeContext } from './components/ThemeContext'; // Импортируем ThemeProvider
import Header from './components/Header'; // Импортируем компонент Header
import Profile from './components/Profile'; // Импортируем компонент Profile
import Footer from './components/Footer'; // Импортируем компонент Footer
import './App.css';

// Альтернативное решение 1 задачи, разбил все на отдельные компоненты!

// Главный компонент приложения
const App = () => {
	return (
		// Оборачиваем приложение в провайдеры для предоставления контекста
		<UserProvider>
			<ThemeProvider>
				<MainContent />
			</ThemeProvider>
		</UserProvider>
	);
};

// Компонент(самый глубокий), содержащий основное содержимое приложения
const MainContent = () => {
	// Получаем функции для изменения значений из контекстов
	const { setUsername } = useContext(UserContext);
	const { setTheme } = useContext(ThemeContext);

	// Функция для изменения имени пользователя
	const changeUserName = event => {
		// Получаем значение из поля ввода
		const newUserName = event.target
			.closest('div')
			.querySelector('input').value;
		setUsername(newUserName); // Обновляем состояние имени пользователя
		event.target.closest('div').querySelector('input').value = ''; // Очищаем поле ввода после изменения
	};

	// Функция для переключения темы между светлой и темной
	const toggleTheme = () => {
		// Обновляем состояние темы, переключая его между 'light' и 'dark'
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<div className='container'>
			<Header />
			<input type='text' placeholder='Имя пользователя' />
			<button onClick={changeUserName}>Изменить имя пользователя</button>
			<Profile />
			<Footer />
			<button onClick={toggleTheme}>Изменить тему</button>
		</div>
	);
};

export default App;
