// Задание

// Развернуть новый проект с использованием create-react-app.
// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).
// Дополнительное задание: Установить расширение React Devtools.

import './Message.css'
function Message(props) {
	return (
		<>
			<div className='card'>
				<h2 className='card__header'>{props.title}</h2>
				<p className='card__message'>{props.message}</p>
			</div>
		</>
	)
}

export default Message
