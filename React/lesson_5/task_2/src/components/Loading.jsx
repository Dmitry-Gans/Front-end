import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Сначала надо утсановить библиотеку Font Awesome!

// Подключаемся к API:
// npm i --save @fortawesome/fontawesome-svg-core

// Добавляем пакет значков:
// npm i --save @fortawesome/free-solid-svg-icons

// Установка компонента Font Awesome React:
// npm i --save @fortawesome/react-fontawesome@latest

// В параметры принимаем объект с пропсами в котором есть isLoading.
function Loading({ isLoading }) {
	return (
		<>
			{isLoading && (
				<h2>
					Загрузка... <FontAwesomeIcon icon={faSpinner} />
				</h2>
			)}
			{!isLoading && <h2>Загрузка завершилась</h2>}
		</>
	);
}

export default Loading;
