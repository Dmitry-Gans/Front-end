import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/productsSlice';
import './EditProduct.css';

// Получаем продукт и функцию закрытия модального окна
const EditProduct = ({ product, onCancel }) => {
	const dispatch = useDispatch(); // Инициализируем dispatch
	const [name, setName] = useState(product.name); // Состояние для имени продукта
	const [description, setDescription] = useState(product.description); // Состояние для описания
	const [price, setPrice] = useState(product.price); // Состояние для цены
	const [available, setAvailable] = useState(product.available); // Состояние для доступности

	// Эффект для инициализации полей при выборе продукта
	useEffect(() => {
		setName(product.name);
		setDescription(product.description);
		setPrice(product.price);
		setAvailable(product.available);
	}, [product]);

	// Функция для обработки отправки формы
	const handleSubmit = e => {
		e.preventDefault(); // Предотвращаем перезагрузку страницы
		const updatedProduct = {
			// Создаем обновленный продукт
			...product, // Сохраняем текущие данные
			name,
			description,
			price: parseFloat(price), // Приводим цену к числу
			available,
		};
		dispatch(updateProduct(updatedProduct)); // Вызываем действие для обновления продукта
		onCancel(); // Закрываем модальное окно
	};

	return (
		<form className='form_edit' onSubmit={handleSubmit}>
			<input
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
				required
				placeholder='Название'
			/>
			<input
				type='text'
				value={description}
				onChange={e => setDescription(e.target.value)}
				required
				placeholder='Описание'
			/>
			<input
				type='number'
				value={price}
				onChange={e => setPrice(e.target.value)}
				required
				placeholder='Цена'
			/>
			<label>
				В наличии:
				<input
					type='checkbox'
					checked={available}
					onChange={e => setAvailable(e.target.checked)}
				/>
			</label>
			<div className='edit_buttons'>
				<button type='submit'>Редактировать продукт</button>
				<button type='button' onClick={onCancel}>
					Закрыть
				</button>
			</div>
		</form>
	);
};

export default EditProduct;
