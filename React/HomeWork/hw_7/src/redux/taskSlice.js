import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasks from '../data/tasks.js';

// Создаем асинхронный thunk для запроса задач
export const fetchTasks = createAsyncThunk(
	'tasks/fetchTasks', // Имя действия для pending, fulfilled, rejected
	async () => {
		// Возвращаем новое Promise, чтобы имитировать асинхронный запрос
		return new Promise((resolve, reject) => {
			// Установка задержки в 1 секунду для имитации ожидания
			setTimeout(() => {
				// Случайным образом решаем, будет ли ошибка
				const shouldFail = Math.random() < 0.5; // 50% вероятность ошибки
				if (shouldFail) {
					reject(new Error('Ошибка при загрузке задач!'));
				} else {
					resolve(tasks); // Возвращаем задачи при успехе
				}
			}, 1000);
		});
	}
);

// Создаем slice для управления состоянием задач
const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: [],
		status: 'idle', // Статус выполнения задач (idle | loading | succeeded | failed)
		error: null, // Поле для хранения ошибок, если они есть
	},
	// Обработка дополнительных действий для асинхронных thunk
	extraReducers: builder => {
		// Когда запрос на получение задач начат
		builder.addCase(fetchTasks.pending, state => {
			state.status = 'loading'; // Устанавливаем статус в "loading"
		});
		// Когда запрос завершился успешно
		builder.addCase(fetchTasks.fulfilled, (state, action) => {
			state.status = 'succeeded'; // Устанавливаем статус в "succeeded"
			state.tasks = action.payload; // Обновляем состояние задач с полученными данными
		});
		// Когда запрос завершился с ошибкой
		builder.addCase(fetchTasks.rejected, (state, action) => {
			state.status = 'failed'; // Устанавливаем статус в "failed"
			state.error = action.error.message; // Сохраняем сообщение об ошибке в состоянии
		});
	},
});

export default tasksSlice.reducer;
