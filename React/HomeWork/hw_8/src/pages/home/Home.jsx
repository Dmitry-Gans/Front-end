import Banner from './Banner';
import Header from '../../components/Header';
import ListProducts from '../../components/ListProducts';
import Privileges from '../../components/Privileges';
import Subscribe from '../../components/Subscribe';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import '../../style/index.css';

function Home() {
	return (
		<>
			<Header />
			<Banner />
			<Categories />
			<article className='info-products center'>
				<h2 className='info-products__title'>Featured Items</h2>
				<p className='info-products__text'>
					Shop for items based on what we featured in this week
				</p>
			</article>
			<ListProducts quantity={6} />
			<div className='all-products center'>
				<Link className='all-products__button' to='/catalog'>
					Browse All Product
				</Link>
			</div>
			<Privileges />
			<Subscribe />
			<Footer />
		</>
	);
}

export default Home;
