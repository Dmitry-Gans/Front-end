import { useState } from 'react'
import {
	TextField,
	Button,
	ListItem,
	IconButton,
	List,
	ListItemText,
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'
import './TodoList.css'

// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon). Нужно до установить значки командой: npm install @mui/icons-material

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

function TodoList() {
	const [tasks, setTasks] = useState([{ id: 1, task: 'Почистить руки' }])
	const [newTask, setNewTask] = useState('')

	const handleAddTask = () => {
		// Проверяем, что задача не пустая:
		if (newTask.trim()) {
			setTasks([...tasks, { id: tasks.length + 1, task: newTask }])
			setNewTask('') // Очищаем поле ввода
		}
	}

	const handleDeleteTask = id => {
		const updatedTasks = tasks.filter(task => task.id !== id)
		setTasks(updatedTasks)
	}
	return (
		<>
			<div>
				<TextField
					id='outlined-basic'
					label='Введите задачу'
					variant='outlined'
					value={newTask} // Привязываем значение, чтобы почистить input
					onChange={e => setNewTask(e.target.value)}
				/>
				<Button variant='outlined' onClick={handleAddTask}>
					Добавить
				</Button>
			</div>
			<h2>Список дел:</h2>
			<div className='list'>
				<List
					sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
				>
					{tasks.map(value => (
						<ListItem
							key={value.id}
							disableGutters
							secondaryAction={
								<IconButton
									aria-label='delete'
									onClick={() => handleDeleteTask(value.id)}
								>
									<DeleteIcon />
								</IconButton>
							}
						>
							<ListItemText primary={value.task} />
						</ListItem>
					))}
				</List>
			</div>
		</>
	)
}

export default TodoList
