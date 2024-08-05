import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function FormCart() {
	const products = useSelector(state => state.cart);
	const totalPrice =
		Math.round(
			products.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100
		) / 100;

	const [formData, setFormData] = useState({
		country: '',
		state: '',
		postcode: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value, // [name] - это значение, полученное из e.target.name,
			// которое соответствует атрибуту name инпута
			// (например, "country", "state", или "postcode").
			// Таким образом, обновляется именно то свойство,
			// которое соответствует имени изменённого инпута,
			// а не новое свойство.
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		// Обнуляем инпуты
		setFormData({
			country: '',
			state: '',
			postcode: '',
		});
	};

	return (
		<div className='cart-content__address-and-price'>
			<div className='address'>
				<p className='address__title'>SHIPPING ADDRESS</p>
				<form action='#' className='address__form' onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Country'
						className='address__input'
						name='country'
						value={formData.country}
						onChange={handleChange}
						required
					/>
					<input
						type='text'
						placeholder='State'
						className='address__input'
						name='state'
						value={formData.state}
						onChange={handleChange}
						required
					/>
					<input
						type='number'
						min='1'
						placeholder='Postcode / Zip'
						className='address__input'
						name='postcode'
						value={formData.postcode}
						onChange={handleChange}
						required
					/>
					<button type='submit' className='address__button'>
						GET A QUOTE
					</button>
				</form>
			</div>
			<div className='price'>
				<p className='price__title'>
					SUB TOTAL <span className='price__title-indent'>${totalPrice}</span>
				</p>
				<p className='price__subtitle'>
					GRAND TOTAL
					<span className='price__subtitle-color'>${totalPrice}</span>
				</p>
				<hr className='price__line' />
				<button className='price__button'>PROCEED TO CHECKOUT</button>
			</div>
		</div>
	);
}

export default FormCart;
