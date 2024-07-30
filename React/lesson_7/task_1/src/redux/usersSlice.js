// Импортируем необходимые функции из Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Создаем слайс для управления состоянием пользователей
const usersSlice = createSlice({
	name: 'users', // Имя слайса
	initialState: {
		users: [], // Начальное состояние пользователей
		loading: false, // Статус загрузки
		error: null, // Ошибка, если есть
	},
	reducers: {
		FETCH_USERS_REQUEST: state => {
			state.loading = true; // При отправке запроса устанавливаем загрузку в true
			state.error = null; // Обнуляем ошибку
		},
		FETCH_USERS_SUCCESS: (state, action) => {
			state.loading = false; // После успешной загрузки, снимаем статус загрузки
			state.users = action.payload; // Обновляем список пользователей
		},
		FETCH_USERS_FAILURE: (state, action) => {
			state.loading = false; // Снимаем статус загрузки в случае ошибки
			state.error = action.payload; // Сохраняем сообщение об ошибке
		},
	},
});

// Экспортируем редюсеры
export const { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } =
	usersSlice.actions;
export default usersSlice.reducer;
