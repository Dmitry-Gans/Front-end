import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки для взаимодействия с Redux
import { removeTask, toggleTaskStatus } from './store'; // Импортируем действия для удаления и переключения статуса задачи

const TaskList = () => {
	const tasks = useSelector(state => state.tasks); // Получаем массив всех задач из хранилища
	const dispatch = useDispatch(); // Получаем метод dispatch для отправки действий

	return (
			<ul>
				{tasks.map(task => (
					<li
						key={task.id}
						onClick={() => dispatch(toggleTaskStatus(task.id))}
						style={{ cursor: 'pointer' }}
					>
						<span
							style={{
								textDecoration: task.isCompleted ? 'line-through' : 'none',
							}}
						>
							{task.description}
						</span>
						<button
							onClick={e => {
								e.stopPropagation();
								dispatch(removeTask(task.id));
							}}
						>
							Удалить
						</button>
					</li>
				))}
			</ul>
	);
};

export default TaskList;
