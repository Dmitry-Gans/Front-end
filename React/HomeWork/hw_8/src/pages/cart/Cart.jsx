import Header from '../../components/Header';
import Subscribe from '../../components/Subscribe';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CartList from './CartList';
import { useSelector } from 'react-redux';
import CartProduct from '../../components/CartProduct';
import '../../style/cart.css';

function Cart() {
	const items = useSelector(state => state.cart);
	return (
		<>
			<Header />
			<Breadcrumb title='SHOPPING CART' />
			<CartList>
				{items.map(cart => (
					<CartProduct key={cart.id} dataStore={cart} />
				))}
				{items.length === 0 && (
					<h2 className='cart-content__empty'>THE CART IS EMPTY!</h2>
				)}
			</CartList>
			<Subscribe />
			<Footer />
		</>
	);
}

export default Cart;
