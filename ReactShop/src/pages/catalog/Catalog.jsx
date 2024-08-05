import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Privileges from '../../components/Privileges';
import Subscribe from '../../components/Subscribe';
import BreadCrumbCatalog from './BreadCrumbCatalog';
import Filter from './Filter';
import Pagination from './Pagination';
import '../../style/catalog.css'

function Catalog() {
	return (
		<>
			<Header />
			<BreadCrumbCatalog />
			<Filter />
			<Pagination />
			<Privileges />
			<Subscribe />
			<Footer />
		</>
	);
}

export default Catalog;
