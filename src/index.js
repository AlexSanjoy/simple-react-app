import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('app')
);