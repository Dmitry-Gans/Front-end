import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние с пустым массивом избранных товаров
const initialState = {
	favoriteItems: [],
};

const favoritesSlice = createSlice({
	name: 'favorites', // Имя slice
	initialState, // Устанавливаем начальное состояние
	reducers: {
		// Редюсер для добавления товара в избранное
		addFavorite: (state, action) => {
			const item = action.payload;
			// Проверяем, нет ли уже такого товара в избранном
			if (!state.favoriteItems.some(fav => fav.id === item.id)) {
				state.favoriteItems.push(item); // Если нет, добавляем товар
			}
		},
		// Редюсер для удаления товара из избранного
		removeFavorite: (state, action) => {
			state.favoriteItems = state.favoriteItems.filter(
				item => item.id !== action.payload
			); // Удаляем товар по id
		},
	},
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
