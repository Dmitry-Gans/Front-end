import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки для работы с Redux
import { increment, decrement } from './actions'; // Импортируем действия

const Counter = () => {
	// Получаем текущее значение счетчика из хранилища
	const count = useSelector(state => state.count);

	// Создаем функцию для отправки действий
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Счетчик: {count}</h1>
			<button onClick={() => dispatch(increment())}>Увеличить</button>
			<button onClick={() => dispatch(decrement())}>Уменьшить</button>
		</div>
	);
};

export default Counter;
