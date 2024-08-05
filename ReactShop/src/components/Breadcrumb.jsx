function Breadcrumb({ title }) {
	return (
		<article className='breadcrumb center'>
			<div className='breadcrumb__content'>
				<h1 className='breadcrumb__heading'>{title}</h1>
			</div>
		</article>
	);
}

export default Breadcrumb;