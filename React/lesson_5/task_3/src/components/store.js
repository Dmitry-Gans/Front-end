import { createStore } from 'redux'; // Импортируем функцию для создания хранилища
import counterReducer from './reducer'; // Импортируем редьюсер

// Создаем Redux-хранилище с редьюсером
const store = createStore(counterReducer);

export default store;
