import { useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import withLoadingIndicator from './components/LoadingIndicator';

// Задание 2
// Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для оборачивания любого компонента. Этот HOC должен принимать параметр isLoading, который определяет, идет ли в данный момент загрузка. Если isLoading равен true, то вместо оборачиваемого компонента должен отображаться загрузочный индикатор.
// 1. Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый компонент, который показывает либо индикатор загрузки, либо содержимое оригинального компонента в зависимости от пропса isLoading.
// 2. Можно использовать простой текстовый индикатор или любой спиннер из доступных библиотек.

function App() {
	const [isLoading, setIsLoading] = useState(true);
	// Оборачиваем компонент Loading в HOC withLoadingIndicator,
	// передавая новый пропс - текущее состояние загрузки.
	const NewLoading = withLoadingIndicator(Loading, isLoading);

	setTimeout(() => {
		// В этом коллбэке переключаем состояние загрузки на противоположное.
		setIsLoading(prev => !prev);
	}, 3000);

	return (
		<>
			{/* Отображаем обернутый компонент с индикатором загрузки. */}
			<NewLoading />
		</>
	);
}

export default App;
