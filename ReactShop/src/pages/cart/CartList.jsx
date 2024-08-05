import { Link } from 'react-router-dom';
import FormCart from './FormCart';
import { clearCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

function CartList({ children }) {
	const dispatch = useDispatch()
	const handleClick = () => {
    dispatch(clearCart());
  };
	return (
		<article className='cart-content center'>
			<div className='cart-content__box'>
				<div className='cart-content__selected'>{children}</div>
				<div className='cart-content__bottom-box'>
					<button
						className='cart-content__bottom-button cart-content__bottom-button1'
						onClick={handleClick}
					>
						CLEAR SHOPPING CART
					</button>
					<Link
						to='/catalog'
						className='cart-content__bottom-button cart-content__bottom-button2'
					>
						CONTINUE SHOPPING
					</Link>
				</div>
			</div>
			<FormCart />
		</article>
	);
}

export default CartList;
