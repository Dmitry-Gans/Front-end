import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import loggerMiddleware from '../middlewares/middleware';
import createSagaMiddleware from 'redux-saga';
import usersSaga from '../sagas/userSaga';

// Создаем middleware для сагa
const sagaMiddleware = createSagaMiddleware();

// Конфигурируем стор с редюсером избранных товаров
export const store = configureStore({
	reducer: {
		favorites: favoritesReducer, // Добавляем редюсер в store
	},
	// Подключаем наше middleware к стандартным middleware
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(loggerMiddleware, sagaMiddleware),
});

// Запускаем корневую сагу
sagaMiddleware.run(usersSaga); // Подключаем сагу пользователей
