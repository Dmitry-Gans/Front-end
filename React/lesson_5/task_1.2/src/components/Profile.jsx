import { useContext } from 'react'; // Импортируем React и useContext
import { ThemeContext } from './ThemeContext'; // Импортируем ThemeContext
import { UserContext } from './UserContext';
import classes from './Style.module.css';

// Компонент профиля
const Profile = () => {
	// Получаем текущую тему из ThemeContext
	const { theme } = useContext(ThemeContext);
	// Получаем текущее имя из UserContext
	const { username } = useContext(UserContext);
	return (
		<div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>
			<h2>Профиль {username}</h2>
			<p>Это профиль пользователя.</p>
		</div>
	);
};

export default Profile;
