import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/LoginForm.js';
import SignupForm from './components/SignupForm.js';
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route path="/" exact>
				<App />
			</Route>
			<Route path="/Login" exact>
				<LoginForm />
			</Route>
			<Route path="/Signup" exact>
				<SignupForm />
			</Route>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();