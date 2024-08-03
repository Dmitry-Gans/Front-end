import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/taskSlice';

const TaskList = () => {
	const dispatch = useDispatch();

	// Используем useSelector для извлечения задач, статуса и ошибок из store
	const { tasks, status, error } = useSelector(state => state.tasks);

	// Используем useEffect для выполнения побочного эффекта при изменении статуса
	useEffect(() => {
		// Проверяем, если статус 'idle', т.е. если еще не были загружены данные
		if (status === 'idle') {
			// Если статус 'idle', отправляем действие для получения задач
			dispatch(fetchTasks());
		}
	}, [status, dispatch]); // Зависимости: вызываем эффект при изменении status и dispatch

	if (status === 'loading') {
		return <div>Загрузка...</div>;
	}

	if (status === 'failed') {
		return <div>{error}</div>;
	}

	// Если загрузка завершена успешно, отображаем список задач
	return (
		<ul>
			{tasks.map(task => (
				<li key={task.id}>
					{task.title} - {task.completed ? 'Выполнено' : 'Не выполнено'}
				</li>
			))}
		</ul>
	);
};

// Экспортируем компонент TaskList как модуль по умолчанию
export default TaskList;
