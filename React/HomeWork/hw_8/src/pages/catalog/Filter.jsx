import { useSelector } from 'react-redux';
import AllListProduct from './AllListProduct';
import { useState } from 'react';

function Filter() {
	const products = useSelector(state => state.products);
	const [selectedSizes, setSelectedSizes] = useState([]); // Состояние для хранения выбранных размеров

	// Обработчик изменения состояния чекбокса
	const handleCheckboxChange = event => {
		const size = event.target.value; // Получаем размер из чекбокса
		if (event.target.checked) { // Если чекбокс выбран
			// Добавляем размер в массив выбранных размеров
			setSelectedSizes(prevSizes => [...prevSizes, size]);
		} else {
			// Удаляем размер из массива, если чекбокс не выбран
			setSelectedSizes(prevSizes => prevSizes.filter(item => item !== size));
		}
	};

	// Фильтруем товары по выбранным размерам
	const filteredProducts = selectedSizes.length > 0
		// Если есть выбранные размеры, фильтруем продукты по ним
		? products.filter(product => selectedSizes.includes(product.size))
		// Если нет, отображаем все продукты
		: products;
	return (
		<>
			<article className='filter center'>
				<div className='filter__size'>
					<div className='filter__box'>
						<details className='filter__details'>
							<summary className='filter__summary'>
								<span className='filter__heading'>FILTER</span>
								<svg
									width='15'
									height='10'
									viewBox='0 0 15 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z'
										fill='black'
									/>
								</svg>
							</summary>
							<div className='filter__content'>
								<details open className='filter__item'>
									<summary className='filter__item-heading'>CATEGORY</summary>
									<div className='filter__link-box'>
										<a href='' className='filter__link'>
											Accessories
										</a>
										<a href='#' className='filter__link'>
											Bags
										</a>
										<a href='#' className='filter__link'>
											Denim
										</a>
										<a href='#' className='filter__link'>
											Hoodies & Sweatshirts
										</a>
										<a href='#' className='filter__link'>
											Jackets & Coats
										</a>
										<a href='#' className='filter__link'>
											Polos
										</a>
										<a href='#' className='filter__link'>
											Shirts
										</a>
										<a href='#' className='filter__link'>
											Shoes
										</a>
										<a href='#' className='filter__link'>
											Sweaters & Knits
										</a>
										<a href='#' className='filter__link'>
											T-Shirts
										</a>
										<a href='#' className='filter__link'>
											Tanks
										</a>
									</div>
								</details>
								<details className='filter__item'>
									<summary className='filter__item-heading'>BRAND</summary>
									<div className='filter__link-box'>
										<a href='' className='filter__link'>
											Accessories
										</a>
										<a href='#' className='filter__link'>
											Bags
										</a>
										<a href='#' className='filter__link'>
											Denim
										</a>
										<a href='#' className='filter__link'>
											Hoodies & Sweatshirts
										</a>
										<a href='#' className='filter__link'>
											Jackets & Coats
										</a>
										<a href='#' className='filter__link'>
											Polos
										</a>
										<a href='#' className='filter__link'>
											Shirts
										</a>
										<a href='#' className='filter__link'>
											Shoes
										</a>
										<a href='#' className='filter__link'>
											Sweaters & Knits
										</a>
										<a href='#' className='filter__link'>
											T-Shirts
										</a>
										<a href='#' className='filter__link'>
											Tanks
										</a>
									</div>
								</details>
								<details className='filter__item'>
									<summary className='filter__item-heading'>DESIGNER</summary>
									<div className='filter__link-box'>
										<a href='' className='filter__link'>
											Accessories
										</a>
										<a href='#' className='filter__link'>
											Bags
										</a>
										<a href='#' className='filter__link'>
											Denim
										</a>
										<a href='#' className='filter__link'>
											Hoodies & Sweatshirts
										</a>
										<a href='#' className='filter__link'>
											Jackets & Coats
										</a>
										<a href='#' className='filter__link'>
											Polos
										</a>
										<a href='#' className='filter__link'>
											Shirts
										</a>
										<a href='#' className='filter__link'>
											Shoes
										</a>
										<a href='#' className='filter__link'>
											Sweaters & Knits
										</a>
										<a href='#' className='filter__link'>
											T-Shirts
										</a>
										<a href='#' className='filter__link'>
											Tanks
										</a>
									</div>
								</details>
							</div>
						</details>
					</div>
					<div className='filter__sorting'>
						<details className='filter__sorting-details'>
							<summary className='filter__sorting-summary'>
								TRENDING NOW
								<svg
									width='11'
									height='6'
									viewBox='0 0 11 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z'
										fill='#6F6E6E'
									/>
								</svg>
							</summary>
							<div className='filter__sorting-box filter__sorting-box1'>
								{['XS', 'S', 'M', 'L'].map(size => (
									<label className='filter__checkbox' key={size}>
										<input type='checkbox' value={size} />
										{size}
									</label>
								))}
							</div>
						</details>
						<details className='filter__sorting-details'>
							<summary className='filter__sorting-summary'>
								SIZE
								<svg
									width='11'
									height='6'
									viewBox='0 0 11 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z'
										fill='#6F6E6E'
									/>
								</svg>
							</summary>
							<div className='filter__sorting-box'>
								{['XS', 'S', 'M', 'L'].map(size => (
									<label className='filter__checkbox' key={size}>
										<input
											type='checkbox'
											value={size}
											onChange={handleCheckboxChange}
										/>
										{size}
									</label>
								))}
							</div>
						</details>
						<details className='filter__sorting-details'>
							<summary className='filter__sorting-summary'>
								PRICE
								<svg
									width='11'
									height='6'
									viewBox='0 0 11 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z'
										fill='#6F6E6E'
									/>
								</svg>
							</summary>
							<div className='filter__sorting-box'>
								<label className='filter__checkbox'>
									<input type='checkbox' />
									XS
								</label>
								<label className='filter__checkbox'>
									<input type='checkbox' />S
								</label>
								<label className='filter__checkbox'>
									<input type='checkbox' />M
								</label>
								<label className='filter__checkbox'>
									<input type='checkbox' />L
								</label>
							</div>
						</details>
					</div>
				</div>
			</article>
			<AllListProduct products={filteredProducts} />
		</>
	);
}

export default Filter;
