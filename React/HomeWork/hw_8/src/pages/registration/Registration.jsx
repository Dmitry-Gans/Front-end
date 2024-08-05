import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import '../../style/registration.css';
import RegistrationForm from './RegistrationForm';
import LoyaltyPerks from './LoyaltyPerks';
import Subscribe from '../../components/Subscribe';
import Footer from '../../components/Footer';

function Registration() {
	return (
		<>
			<Header />
			<Breadcrumb title='REGISTRATION' />
			<article className='registration-content center'>
				<RegistrationForm />
				<LoyaltyPerks />
			</article>
			<Subscribe />
			<Footer />
		</>
	);
}

export default Registration;
