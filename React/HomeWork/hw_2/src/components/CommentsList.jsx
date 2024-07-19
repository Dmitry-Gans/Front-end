import { useState } from 'react'
import './CommentsList.css'

// Задание: Список комментариев с удалением.

// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

function CommentsList() {
	const [comments, setComments] = useState([
		{ id: 1, text: 'Это первый комментарий' },
		{ id: 2, text: 'Это второй комментарий' },
		{ id: 3, text: 'Это третий комментарий' },
	])

	const removeComment = comment => {
		setComments(comments.filter(item => item.id !== comment.id))
	}
	return comments.map(item => (
		<div className='comment' key={item.id}>
			<li>{item.text}</li>
			<button onClick={() => removeComment(item)}>Удалить</button>
		</div>
	))
}

export default CommentsList
