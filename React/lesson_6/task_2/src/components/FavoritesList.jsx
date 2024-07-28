import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from './favoritesSlice';

function FavoritesList() {
	// Получаем массив избранных товаров из состояния
	const favorites = useSelector(state => state.favorites.favoriteItems); // первый favorites - reduce из store, а второй favoriteItems - это массив который положили в initialState в slice
	const dispatch = useDispatch();

	const handleRemoveFavorite = id => {
		// Обрабатываем удаление товара из избранного
		dispatch(removeFavorite(id)); // Диспатчим действие removeFavorite
	};

	return (
		<div>
			<h1>Список избранных</h1>
			<ul>
				{favorites.map(product => (
					<li key={product.id}>
						<h2>
							{product.name} - {product.price}
						</h2>
						<p>{product.description}</p>
						<button
							onClick={() => {
								handleRemoveFavorite(product.id);
							}}
						>
							🗑️
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FavoritesList;
