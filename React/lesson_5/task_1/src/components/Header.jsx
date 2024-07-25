import { useContext } from 'react'; // Хук для использования контекста
import { UserContext } from '../App'; // Импортируем контекст пользователя из главного приложения

function Header() {
	// Используем useContext для получения имени пользователя из UserContext
	const userName = useContext(UserContext);

	return (
		<>
			<h1>Привет {userName}</h1>
		</>
	);
}

export default Header;
