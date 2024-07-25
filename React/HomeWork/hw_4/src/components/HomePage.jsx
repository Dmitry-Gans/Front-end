import { Link } from 'react-router-dom';
function HomePage() {
	return (
		<>
			<h1>Главная страница</h1>
			<Link to='/about'>Перейти на страницу "О нас"</Link>
		</>
	);
}

export default HomePage;
