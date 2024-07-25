import { useContext } from 'react'; // Импортируем React и useContext
import { ThemeContext } from './ThemeContext'; // Импортируем ThemeContext
import classes from './Style.module.css';

// Компонент футера
const Footer = () => {
	// Получаем текущую тему из ThemeContext
	const { theme } = useContext(ThemeContext);
	return (
		<footer
			className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}
		>
			<p>&copy; {new Date().getFullYear()} Все права защищены.</p>
		</footer>
	);
};

export default Footer;
