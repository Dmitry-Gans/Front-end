import { toggleTheme } from './themeSlice';
import { useDispatch, useSelector } from 'react-redux';

function Theme() {
	const isTheme = useSelector(state => state.theme.theme);
	const dispatch = useDispatch();

	const toggle = () => dispatch(toggleTheme());

	return (
		<div className={isTheme}>
			<h2>Тема: {isTheme}</h2>
			<button onClick={toggle}>Изменить тему</button>
		</div>
	);
}

export default Theme;
