import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

// Конфигурируем стор с редюсером избранных товаров
export const store = configureStore({
	reducer: {
		favorites: favoritesReducer, // Добавляем редюсер в store
	},
});
