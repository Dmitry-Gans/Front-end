import { createContext, useState } from 'react';
import './App.css'; // Импорт стилей приложения
import Profile from './components/Profile'; // Импорт компонента профиля
import Footer from './components/Footer'; // Импорт компонента подвала
import Header from './components/Header'; // Импорт компонента заголовка

// Создаем контексты для пользователя и темы. Начальное значение - "Гость" и "light" соответственно.
export const UserContext = createContext('Гость');
export const ThemeContext = createContext('light');

function App() {
	// Хук состояния для хранения текущей темы и имени пользователя
	const [theme, setTheme] = useState('light'); // Установка начальной темы как "light"
	const [userName, setUserName] = useState('Гость'); // Установка начального имени пользователя как "Гость"

	// Функция для изменения имени пользователя
	const changeUserName = event => {
		// Получаем значение из поля ввода
		const newUserName = event.target
			.closest('div')
			.querySelector('input').value;
		setUserName(newUserName); // Обновляем состояние имени пользователя
		event.target.closest('div').querySelector('input').value = ''; // Очищаем поле ввода после изменения
	};

	// Функция для переключения темы между светлой и темной
	const toggleTheme = () => {
		// Обновляем состояние темы, переключая его между 'light' и 'dark'
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<>
			{/* Провайдер контекста темы позволяет всем дочерним компонентам подписываться на изменения темы */}
			<ThemeContext.Provider value={theme}>
				{/* Провайдер контекста пользователя позволяет всем дочерним компонентам получать имя пользователя */}
				<UserContext.Provider value={userName}>
					<Header />
					<div>
						<input placeholder='Введите имя пользователя' />{' '}
						<button onClick={changeUserName}>Изменить имя пользователя</button>{' '}
					</div>
					<Profile />
					<Footer />
					<div>
						<button onClick={toggleTheme}>Изменить тему</button>{' '}
					</div>
				</UserContext.Provider>
			</ThemeContext.Provider>
		</>
	);
}

// Экспортируем компонент App для использования в других частях приложения
export default App;
