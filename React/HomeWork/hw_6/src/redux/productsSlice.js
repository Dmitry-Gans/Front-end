import { createSlice } from '@reduxjs/toolkit';

// Создаем слайс для управления состоянием продуктов
const productsSlice = createSlice({
	name: 'products', // Имя слайса
	initialState: [], // Начальное состояние — пустой массив продуктов
	reducers: {
		addProduct: (state, action) => {
			// Добавление нового продукта
			state.push(action.payload); // Добавляем новый продукт в массив
		},
		removeProduct: (state, action) => {
			// Удаление продукта по ID
			return state.filter(product => product.id !== action.payload);
		},
		updateProduct: (state, action) => {
			// Обновление продукта
			const index = state.findIndex(
				product => product.id === action.payload.id
			); // Находим индекс продукта
			if (index !== -1) {
				state[index] = action.payload; // Обновляем продукт по индексу
			}
		},
		toggleAvailability: (state, action) => {
			// Переключение доступности продукта
			const product = state.find(product => product.id === action.payload); // Находим продукт
			if (product) {
				product.available = !product.available; // Меняем доступность
			}
		},
	},
});

// Экспортируем действия из слайса
export const { addProduct, removeProduct, updateProduct, toggleAvailability } =
	productsSlice.actions;

// Экспортируем редьюсер для использования в хранилище
export default productsSlice.reducer;
