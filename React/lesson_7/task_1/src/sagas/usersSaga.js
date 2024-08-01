// Импортируем необходимые библиотеки из redux-saga/effects
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from '../redux/usersSlice';

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
		yield put(FETCH_USERS_SUCCESS(users)); // Если запрос успешен, отправляем действие с пользователями
	} catch (error) {
		console.error('Ошибка при загрузке пользователей:', error); // Логируем ошибку для проверки
		yield put(FETCH_USERS_FAILURE(error.message)); // В случае ошибки отправляем действие с сообщением об ошибке
	}
}

// Слушаем действие FETCH_USERS_REQUEST и вызываем fetchUsers
function* usersSaga() {
	yield takeEvery('FETCH_USERS_REQUEST', fetchUsers); // Запускаем сагу на каждое действие FETCH_USERS_REQUEST
}

// Экспортируем сагу
export default usersSaga;
