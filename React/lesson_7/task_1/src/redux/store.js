// Импортируем необходимые функции из Redux Toolkit и redux-saga
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import usersSaga from '../sagas/usersSaga'; // Импортируем созданную сагу
import usersReducer from './usersSlice'; // Импортируем редюсер для пользователей (создадим позже)

// Создаем сагу middleware
const sagaMiddleware = createSagaMiddleware();

// Конфигурируем store с редюсером пользователей и middleware
const store = configureStore({
	reducer: {
		users: usersReducer, // Подключаем редюсер пользователей
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(sagaMiddleware), // Добавляем middleware saga
});

// Запускаем корневую сагу
sagaMiddleware.run(usersSaga);

// Экспортируем store для использования в приложении
export default store;
