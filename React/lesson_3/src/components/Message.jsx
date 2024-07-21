import { PropTypes } from 'prop-types'
import './Message.css'

function Message({ text, time, author, themeColor }) {
	return (
		<>
			<h2 className={themeColor === 'light' ? 'light' : 'dark'}>
				Автор номер: {author}
			</h2>
			<p className={themeColor === 'light' ? 'light' : 'dark'}>{text}</p>
			<p className={themeColor === 'light' ? 'light' : 'dark'}>Время: {time}</p>
		</>
	)
}

Message.propTypes = {
	text: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	author: PropTypes.number.isRequired,
	themeColor: PropTypes.string.isRequired,
}

export default Message
