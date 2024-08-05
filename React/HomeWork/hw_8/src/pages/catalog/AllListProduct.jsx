import ItemProduct from '../../components/ItemProduct';


function AllListProduct({products}) {

	return (
		<article className='products-content center'>
			{products.map(product => (
				<ItemProduct key={product.id} data={product} />
			))}
		</article>
	);
}

export default AllListProduct;
