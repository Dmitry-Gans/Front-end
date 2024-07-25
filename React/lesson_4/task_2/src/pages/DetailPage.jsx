// Импортируем хук useParams для получения параметров URL:
import { useParams } from 'react-router-dom'

const items = [
	{ id: 1, title: 'Статья 1', description: 'Описание статьи 1' },
	{ id: 2, title: 'Статья 2', description: 'Описание статьи 2' },
	{ id: 3, title: 'Статья 3', description: 'Описание статьи 3' },
]

const DetailPage = () => {
	// Получаем ID элемента из параметров URL:
	const { id } = useParams()

	// Ищем статью в массиве items по ID, преобразуем строку в число:
	const item = items.find(i => i.id === parseInt(id))

	if (!item) {
		return <div>Статья не найдена</div>
	}

	return (
		<div>
			<h1>{item.title}</h1>
			<p>{item.description}</p>
		</div>
	)
}

export default DetailPage
