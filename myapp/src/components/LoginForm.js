import React, { useState } from 'react';
import { Link, Route, Switch, BrowserRouter, Redirect as Router } from 'react-router-dom';
const axios = require('axios');
//import '/workspace/test/myapp/src/styles/LoginForm.css';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userList, setuserList] = useState([]);

	const getusers = () => {
		axios.get('https://kangnam-site.herokuapp.com/seeusers').then((response) => {
			response.data.filter((users) => {
				if (users.email.includes(email)) {
					if (users.pass === password) {
						let myObj = {
							firstname: users.fisrtname,
							lastname: users.lastname,
							email: users.email,
						};
						localStorage.setItem('savesesion', JSON.stringify(myObj));
					}
				}
			});
		});

		console.log(email);
		console.log(password);
	};

	return (
		<div className="login-form">
			<h3>Sign In</h3>

			<div className="form-group">
				<label>Email address</label>
				<input
					className="form-control"
					value={email}
					onChange={({ target: { value } }) => setEmail(value)}
					type="text"
					placeholder="email"
				/>
			</div>

			<div className="form-group">
				<label>Password</label>
				<input
					className="form-control"
					value={password}
					onChange={({ target: { value } }) => setPassword(value)}
					type="password"
					placeholder="password"
				/>
			</div>

			<div className="form-group">
				<div className="custom-control custom-checkbox">
					<input type="checkbox" className="custom-control-input" id="customCheck1" />
					<label className="custom-control-label" htmlFor="customCheck1">
						Remember me
					</label>
				</div>
			</div>

			<p className="forgot-password text-right">
				Forgot <a href="#">password?</a>
			</p>
			<button onClick={getusers} className="btn btn-primary btn-block">
				Sign In
			</button>

			<div>
				You dont have a account? Click the <Link to="/Signup">sign up</Link>
			</div>
		</div>
	);
};

export default LoginForm;