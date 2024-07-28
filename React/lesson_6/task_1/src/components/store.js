import { configureStore, createSlice } from '@reduxjs/toolkit';

// Создаем слайс для задач (tasks),
// который будет содержать состояние и редюсеры.
const taskSlice = createSlice({
	name: 'tasks',
	initialState: [],
	reducers: {
		// Редюсер для добавления новой задачи
		// переименовываем payload в newTask
		addTask: (state, { payload: newTask }) => {
			state.push(newTask); // Добавляем новую задачу из payload в массив
		},
		// Редюсер для удаления задачи по id
		removeTask: (state, action) => {
			return state.filter(task => task.id !== action.payload); // Фильтруем задачи, исключая удаляемую
		},
		// Редюсер для переключения статуса задачи
		toggleTaskStatus: (state, action) => {
			const task = state.find(task => task.id === action.payload); // Находим задачу по id
			if (task) {
				// Если задача найдена
				task.isCompleted = !task.isCompleted; // Переключаем статус
			}
		},
	},
});

// Конфигурируем и создаем хранилище Redux с использованием нашего редюсера задач
const store = configureStore({
	reducer: {
		tasks: taskSlice.reducer, // Подключаем редюсер задач к хранилищу
	},
});

export default store; // Экспортируем хранилище для использования в других частях приложения
