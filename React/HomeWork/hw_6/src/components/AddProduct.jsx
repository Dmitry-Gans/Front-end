import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productsSlice';
import './AddProduct.css';

const AddProduct = () => {
	const dispatch = useDispatch(); // Инициализируем dispatch
	const [name, setName] = useState(''); // Состояние для имени продукта
	const [description, setDescription] = useState(''); // Состояние для описания продукта
	const [price, setPrice] = useState(''); // Состояние для цены продукта
	const [available, setAvailable] = useState(true); // Состояние для доступности продукта

	// Функция для обработки отправки формы
	const handleSubmit = e => {
		e.preventDefault(); // Предотвращаем перезагрузку страницы
		const newProduct = {
			// Создаем новый продукт
			id: Date.now(), // Уникальный ID
			name,
			description,
			price: parseFloat(price), // Приводим цену к числу
			available,
		};
		dispatch(addProduct(newProduct)); // Вызываем действие для добавления продукта в хранилище
		// Очищаем все поля
		setName('');
		setDescription('');
		setPrice('');
		setAvailable(true);
	};

	return (
		<form className='form_add' onSubmit={handleSubmit}>
			<input
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Название'
				required
			/>
			<input
				type='text'
				value={description}
				onChange={e => setDescription(e.target.value)}
				placeholder='Описание'
				required
			/>
			<input
				type='number'
				value={price}
				onChange={e => setPrice(e.target.value)}
				placeholder='Цена'
				required
			/>
			<label>
				В наличии:
				<input
					type='checkbox'
					checked={available}
					onChange={e => setAvailable(e.target.checked)}
				/>
			</label>
			<button type='submit'>Добавить продукт</button>
		</form>
	);
};

export default AddProduct;
