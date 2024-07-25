import { useContext } from 'react'; // Хук для доступа к контекстам
import { ThemeContext, UserContext } from '../App'; // Импортируем контексты темы и пользователя из главного приложения
import classes from './Profile.module.css'; // Импортируем CSS модули для стилизации компонента

function Profile() {
	// Получаем текущее значение темы из ThemeContext
	const theme = useContext(ThemeContext);
	// Получаем имя пользователя из UserContext
	const name = useContext(UserContext);

	return (
		<section
			// Устанавливаем класс в зависимости от текущей темы
			className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}
		>
			<h2>Профиль {name}</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
				voluptatum consectetur mollitia reiciendis consequuntur! Enim fugit
				recusandae debitis pariatur magnam.
			</p>
		</section>
	);
}

export default Profile;
