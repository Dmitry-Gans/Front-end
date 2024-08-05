import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Subscribe from '../../components/Subscribe';
import BreadCrumbCatalog from '../catalog/BreadCrumbCatalog';
import '../../style/product.css';
import ProductDetails from './ProductDetails';
import ListProducts from '../../components/ListProducts';

function Product() {
	return (
		<>
			<Header />
			<BreadCrumbCatalog />
			<ProductDetails />
			<ListProducts quantity={3} />
			<div className='product-bottom'></div>
			<Subscribe />
			<Footer />
		</>
	);
}

export default Product;
