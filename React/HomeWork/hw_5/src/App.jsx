import './App.css';
import { toggleTheme } from './components/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

// Приложение для переключения темы сайта
// Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.

// Функционал:

// Action types: TOGGLE_THEME.
// Actions: Создайте действие для переключения темы.
// Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
// Component: Создайте компонент, который отображает переключатель для изменения темы сайта.

// Описание:

// Состояние: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light").

// Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.

function App() {
	const isTheme = useSelector(state => state.theme.theme);
	const dispatch = useDispatch();

	const toggle = () => dispatch(toggleTheme());

	return (
		<div className='App'>
			<div className={isTheme}>
				<h2>Тема: {isTheme}</h2>
				<button onClick={toggle}>Изменить тему</button>
			</div>
			<div className={isTheme}>
				<h2>Какая то вложенность</h2>
			</div>
		</div>
	);
}

export default App;
