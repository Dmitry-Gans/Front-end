import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_USERS_REQUEST } from './redux/usersSlice'; // Импортируем действие для загрузки пользователей

// В этом примере мы создадим базовое приложение используя Redux Saga
// для выполнения асинхронного запроса данных.
// ● npm install redux-saga
// ● Создайте файл саги. Например, src/sagas/usersSaga.js
// function fetchUsersApi() {
//  return fetch('https://jsonplaceholder.typicode.com/users')
//  .then(response => response.json());
// }
// ● Рабочая сага: должна выполняться, когда сага перехватит
// действие `FETCH_USERS_REQUEST`
// ● Настройте Redux Saga middleware. В файле, где вы создаете ваш
// store
// ● Теперь, когда сага подключена к вашему приложения, вы
// можете инициировать загрузку пользователей, отправив
// действие FETCH_USERS_REQUEST

function App() {
	const dispatch = useDispatch(); // Инициализируем хук для отправки действий
	const { users, loading, error } = useSelector(state => state.users); // Получаем состояние пользователей из store

	// Используем useEffect для загрузки пользователей при первом рендере компонента
	const handleFetchUsers = () => {
		dispatch(FETCH_USERS_REQUEST()); // Отправляем запрос на получение пользователей
		// dispatch({ type: 'FETCH_USERS_REQUEST' });
	};

	return (
		<div>
			<h1>Список пользователей</h1>
			<button onClick={handleFetchUsers}>Запрос пользователей</button>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			<ul>
				{users.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
