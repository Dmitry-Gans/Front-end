import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			const existingProduct = state.find(item => item.id === action.payload.id);
			if (existingProduct) {
				// Если товар уже в корзине, увеличиваем его количество
				existingProduct.quantity += 1;
			} else {
				// Если товара еще нет в корзине, добавляем его с количеством 1
				state.push({ ...action.payload, quantity: 1 });
			}
		},
		removeCart: (state, action) => {
			return state.filter(item => item.id !== action.payload.id);
		},
		clearCart: state => {
			// Очищаем корзину
			return [];
		},
	},
});

export const { addToCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
