import { messages } from './data'
import Message from './Message'
import { PropTypes } from 'prop-types'

// Задание 3
// ● Создайте компонент MessagesList, который отображает список
// сообщений. Принимаем их из другого компонента Message. Каждое сообщение должно иметь уникальный id и текст.
// ● Используйте проп key при рендеринге списка, чтобы
// обеспечить оптимальную производительность.

function MessagesList({ themeColor }) {
	return (
		<>
			{messages.map(message => (
				<Message themeColor={themeColor} key={message.id} {...message} />
			))}
		</>
	)
}

MessagesList.propTypes = {
	themeColor: PropTypes.string,
}

export default MessagesList
