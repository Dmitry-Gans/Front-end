import ItemProduct from './ItemProduct';
import { useSelector } from 'react-redux';

function ListProducts({quantity}) {
	const products = useSelector(state => state.products);
	const numericQuantity = Number(quantity) || 12; // Преобразуем в число или дефолтное значение 12

	return (
		<article className='products-content__recommendation center'>
			{products.slice(0, numericQuantity).map(
				(
					product // С помощью slice ограничиваем до 6 продуктов
				) => (
					<ItemProduct key={product.id} data={product} />
				)
			)}
		</article>
	);
}

export default ListProducts;
