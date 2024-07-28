import { useDispatch } from 'react-redux';
import { addTask } from './store';
import { useState } from 'react';

const AddTask = () => {
	const [description, setDescription] = useState(''); // Локальное состояние для описания задачи
	const dispatch = useDispatch(); // Получаем функцию dispatch для отправки действий

	const handleAddTask = () => {
		if (description.trim()) {
			// Проверяем, не пусто ли описание
			const newTask = {
				id: Date.now(), // Используем текущее время как уникальный ID
				description, // Описание задачи
				isCompleted: false, // По умолчанию задача не выполнена
			};
			dispatch(addTask(newTask)); // Отправляем действие для добавления задачи в состояние, в хранилище
			setDescription(''); // Очищаем поле ввода
		}
	};

	return (
		<div>
			<input
				type='text'
				value={description}
				onChange={e => setDescription(e.target.value)} // Обновляем локальное состояние при вводе
				placeholder='Описание задачи'
			/>
			<button onClick={handleAddTask}>Добавить</button>
		</div>
	);
};

export default AddTask;
