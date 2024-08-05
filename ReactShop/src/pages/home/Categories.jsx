function Categories() {
  return (
		<article className='categories-content center'>
			<button className='category category1'>
				<span className='category__shadow'>
					<h3 className='category__text'>30% OFF</h3>
					<h2 className='category__title'>FOR WOMEN</h2>
				</span>
			</button>
			<button className='category category2'>
				<span className='category__shadow'>
					<h3 className='category__text'>HOT DEAL</h3>
					<h2 className='category__title'>FOR MEN</h2>
				</span>
			</button>
			<button className='category category3'>
				<span className='category__shadow'>
					<h3 className='category__text'>NEW ARRIVALS</h3>
					<h2 className='category__title'>FOR KIDS</h2>
				</span>
			</button>
			<button className='category category4'>
				<span className='category__shadow'>
					<h3 className='category__text'>LUXIROUS & TRENDY</h3>
					<h2 className='category__title'>ACCESORIES</h2>
				</span>
			</button>
		</article>
	);
}

export default Categories;