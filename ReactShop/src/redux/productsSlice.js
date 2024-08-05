import { createSlice } from '@reduxjs/toolkit';
import dataProducts from '../data/dataProduct';

const productsSlice = createSlice({
	name: 'products',
	initialState: dataProducts,
	reducers: {},
});

export default productsSlice.reducer;
