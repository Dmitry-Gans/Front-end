import './App.css';
import { Provider } from 'react-redux'; // Импортируем компонент Provider для подключения Redux
import store from './components/store'; // Импортируем созданное хранилище
import Counter from './components/Counter'; // Импортируем компонент счетчика

// Задание
// Создать простое приложение счетчика, которое увеличивает или
// уменьшает значение на 1.
// ● Action types: INCREMENT, DECREMENT.
// ● Actions: Создайте два действия: одно для увеличения счетчика
// и другое для его уменьшения.
// ● Reducer: Реализуйте редьюсер, который обрабатывает эти
// действия и изменяет состояние счетчика соответствующим
// образом.
// ● Component: Создайте компонент, который отображает счетчик
// и имеет кнопки для его увеличения и уменьшения.

// Установка необходимых пакетов:
// npm install redux react-redux

const App = () => {
	// Оборачиваем приложение в Provider, чтобы передать хранилище всем дочерним компонентам
	return (
		<Provider store={store}>
			<Counter />
			<div>
				<p>Первый уровень вложенности</p>
				<Counter />
				<div>
					<p>Второй уровень вложенности</p>
					<Counter />
				</div>
			</div>
		</Provider>
	);
};

export default App;
