import { createSlice } from '@reduxjs/toolkit';

// Создаем слайс для управления состоянием продуктов
const productsSlice = createSlice({
	name: 'products', // Имя слайса
	initialState: [], // Начальное состояние — пустой массив продуктов
	reducers: {
		// Добавление нового продукта
		addProduct: (state, action) => {
			state.push(action.payload); // Добавляем новый продукт в массив
		},
		// Удаление продукта по ID
		removeProduct: (state, action) => {
			return state.filter(product => product.id !== action.payload);
		},
		// Обновление продукта
		updateProduct: (state, action) => {
			const index = state.findIndex(
				product => product.id === action.payload.id
			); // Если индекс продукта нашелся
			if (index !== -1) {
				state[index] = action.payload; // Обновляем продукт по индексу
			}
		},
		// Переключение доступности продукта
		toggleAvailability: (state, action) => {
			const product = state.find(product => product.id === action.payload);
			// Если продукт нашелся
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
