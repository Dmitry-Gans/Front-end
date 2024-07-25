// Задание 4
// ● Создайте маленькое приложение со страницей списка
// (ListPage) и страницей деталей (DetailPage).
// ● На ListPage отобразите список элементов (например, статей или
// продуктов), где каждый элемент является ссылкой на
// DetailPage, содержащую детальную информацию об элементе.
// Используйте react-router-dom для настройки маршрутизации.
// ● На DetailPage используйте useParams для извлечения
// параметра из URL (например, ID элемента) и отобразите
// детальную информацию об элементе.

// Важно: не забывать npm install react-router-dom

// Импортируем компонент Link для навигации:
import { Link } from 'react-router-dom'

const items = [
	{ id: 1, title: 'Статья 1', description: 'Описание статьи 1' },
	{ id: 2, title: 'Статья 2', description: 'Описание статьи 2' },
	{ id: 3, title: 'Статья 3', description: 'Описание статьи 3' },
]

const ListPage = () => {
	return (
		<div>
			<h1>Список статей</h1>
			<ul>
				{items.map(item => (
					<li key={item.id}>
						{/* Создаем шаблон-ссылку на DetailPage с ID элемента */}
						<Link to={`/item/${item.id}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ListPage
