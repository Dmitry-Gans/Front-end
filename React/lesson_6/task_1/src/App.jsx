import './App.css';
import { Provider } from 'react-redux'; // Импортируем Provider для подключения Redux к приложению
import store from './components/store'; // Импортируем наше хранилище Redux
import AddTask from './components/AddTask'; // Импортируем компонент для добавления новых задач
import TaskList from './components/TaskList'; // Импортируем компонент для отображения списка задач

// Задание 1
// Разработайте функционал для управления списком дел, который позволит
// пользователям добавлять новые задачи и удалять их из списка.
// Настройка Redux Store:
// ● Определите начальное состояние для списка задач в вашем
// Redux store. Каждая задача должна иметь следующие атрибуты:
// ● id: Уникальный идентификатор (например, можно
// использовать Date.now() для его генерации).
// ● description : Описание задачи, введенное
// пользователем.
// ● isCompleted : Статус выполнения задачи (изначально
// false).
// ● Создайте два действия:
// ● для добавления новой задачи в список.
// ● для удаления задачи из списка по id.
// Компонент для добавления задачи:
// ● Реализуйте компонент с текстовым полем для ввода описания
// задачи и кнопкой "Добавить", которая будет диспатчить action
// для добавления задачи в store.
// Компонент для отображения списка задач:
// ● Создайте компонент, который будет отображать список всех
// текущих задач. для каждой задачи отобразите описание и
// кнопку "Удалить", которая будет диспатчить action для удаления
// этой задачи из store.

function App() {
	return (
		<Provider store={store}>
			<div>
				<AddTask />
				<h1>Список дел</h1>
				<TaskList />
			</div>
		</Provider>
	);
}

export default App;