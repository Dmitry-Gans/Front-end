// Импортируем необходимые библиотеки из redux-saga/effects
import { call, put, takeLatest } from 'redux-saga/effects';

// Функция для выполнения запроса к API
async function fetchUsersApi() {
	// Возвращаем промис, который получает данные пользователей
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	if (!response.ok) {
		throw new Error(`Ошибка HTTP: ${response.status}`);
	}
	return await response.json(); // Преобразуем ответ в JSON
}

// Сага для обработки действия FETCH_USERS_REQUEST
function* fetchUsers() {
	console.log('Сага запущена'); // Добавляем лог для проверки
	try {
		const users = yield call(fetchUsersApi); // Вызываем функцию API и ждем результата
    console.log(users);
		yield put({ type: 'FETCH_USERS_SUCCESS', payload: users }); // Если запрос успешен, отправляем действие с пользователями
	} catch (error) {
		console.error('Ошибка при загрузке пользователей:', error); // Логируем ошибку для проверки
		yield put({ type: 'FETCH_USERS_FAILURE', payload: error.message }); // В случае ошибки отправляем действие с сообщением об ошибке
	}
}

// Слушаем действие FETCH_USERS_REQUEST и вызываем fetchUsers
function* usersSaga() {
	yield takeLatest ('FETCH_USERS_REQUEST', fetchUsers); // Запускаем сагу на каждое действие FETCH_USERS_REQUEST
}

// Экспортируем сагу
export default usersSaga;
