import { useContext } from 'react'; // Импортируем React и useContext
import { UserContext } from './UserContext'; // Импортируем UserContext

// Компонент заголовка
const Header = () => {
	// Получаем имя пользователя из UserContext
	const { username } = useContext(UserContext);
	// Отображаем приветствие с именем пользователя
	return <h1>Привет, {username}!</h1>;
};

export default Header;
