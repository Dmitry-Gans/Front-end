import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../redux/productsSlice';
import EditProduct from './EditProduct';
import { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
	const products = useSelector(state => state.products); // Получаем продукты из состояния
	const dispatch = useDispatch(); // Инициализируем dispatch
	const [editingProduct, setEditingProduct] = useState(null); // Состояние для редактируемого продукта

	return (
		<div>
			<ul>
				{products.map(product => (
					<li key={product.id}>
						<h3>{product.name}</h3>
						<p>{product.description}</p>
						<p>Цена: ${product.price}</p>
						<p>Статус: {product.available ? 'в наличии' : 'нет в наличии'}</p>
						<div className='list_buttons'>
							<button onClick={() => dispatch(removeProduct(product.id))}>
								Удалить
							</button>
							<button onClick={() => setEditingProduct(product)}>
								Редактировать
							</button>
						</div>
					</li>
				))}
			</ul>
			{editingProduct && ( // Если редактируемый продукт существует, отображаем форму редактирования
				<div>
					<h2>Введите изменения:</h2>
					<EditProduct
						product={editingProduct}
						onCancel={() => setEditingProduct(null)}
					/>
				</div>
			)}
		</div>
	);
};

export default ProductList;
