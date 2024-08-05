import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';
import Cart from './pages/cart/Cart';
import Catalog from './pages/catalog/Catalog';
import Product from './pages/product/Product';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/catalog' element={<Catalog />} />
			<Route path='/product/:id' element={<Product />} />
		</Routes>
	);
}

export default App;
