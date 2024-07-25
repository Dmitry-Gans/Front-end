import { useContext, useState, useEffect } from 'react'; // Хуки для работы с контекстом и состоянием
import { ThemeContext } from '../App'; // Импортируем контекст темы из главного приложения
import classes from './Profile.module.css'; // Импортируем CSS модули для стилизации компонента

function Footer() {
	// Получаем текущее значение темы из ThemeContext
	const theme = useContext(ThemeContext);
	// Хук состояния для отслеживания текущего времени
	const [now, setNow] = useState(new Date());

	// Используем useEffect для обновления времени каждую секунду
	useEffect(() => {
		// Функция для обновления состояния времени
		const intervalId = setInterval(() => {
			setNow(new Date()); // Обновляем текущее время
		}, 1000);

		// Очистка интервала при размонтировании компонента
		return () => clearInterval(intervalId);
	}, []); // Эффект запускается один раз при монтировании компонента

	return (
		<section
			// Устанавливаем класс в зависимости от текущей темы
			className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}
		>
			<h2>Подменю</h2>
			<p>Время: {now.toLocaleTimeString()}</p>{' '}
		</section>
	);
}

export default Footer;
