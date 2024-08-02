import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

// Настраиваем хранилище Redux
const store = configureStore({
	reducer: {
		products: productsReducer, // Добавляем редьюсер для управления продуктами
	},
});

export default store;
