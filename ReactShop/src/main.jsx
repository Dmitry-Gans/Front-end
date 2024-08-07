import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollTop from './components/ScrollTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<ScrollTop />
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
);
