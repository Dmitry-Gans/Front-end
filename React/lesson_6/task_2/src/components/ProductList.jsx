import { useDispatch } from 'react-redux';
import { addFavorite } from './favoritesSlice';

// Массив товаров для отображения
const products = [
	{
		id: Date.now() + Math.round(Math.random() * 1000),
		name: 'PlayStation 5',
		description: 'Игровая приставка',
		price: '50 000 руб',
	},
	{
		id: Date.now() + Math.round(Math.random() * 1000),
		name: 'Iphone 15',
		description: 'Сенсорный телефон',
		price: '120 000 руб',
	},
	{
		id: Date.now() + Math.round(Math.random() * 1000),
		name: 'Tefal',
		description: 'Умный чайник',
		price: '10 000 руб',
	},
	{
		id: Date.now() + Math.round(Math.random() * 1000),
		name: 'Redmi Book',
		description: 'Китайский ноутбук',
		price: '76 000 руб',
	},
	{
		id: Date.now() + Math.round(Math.random() * 1000),
		name: 'Samson',
		description: 'Студийный микрофон',
		price: '8 000 руб',
	},
];

// Компонент списка товаров
function ProductList() {
	const dispatch = useDispatch(); // Получаем функцию dispatch из Redux

	// Функция для обработки добавления товара в избранное
	const handleAddFavorite = product => {
		// Обрабатываем добавление товара в избранное
		dispatch(addFavorite(product)); // Диспатчим действие addFavorite
	};

	return (
		<div>
			<h1>Список товаров</h1>
			<ul>
				{products.map(product => (
					<li key={product.id}>
						<h2>
							{product.name} - {product.price}
						</h2>
						<p>{product.description}</p>
						<button onClick={() => handleAddFavorite(product)}>❤</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProductList;
