import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import '../styles/LoginForm.css';
const axios = require('axios');



const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userList, setuserList] = useState([]);

	const [isLoggedin, setisLoggedin] = useState(false);

	const getusers = () => {
		axios.get('https://kangnam-site.herokuapp.com/seeusers').then((response) => {
			response.data.filter((users) => {
				if (users.email.includes(email)) {
					if (users.pass === password) {
						console.log('Logged in');
						let myObj = {
							firstname: users.firstname,
							lastname: users.lastname,
							email: users.email,
						};
						localStorage.setItem('savesesion', JSON.stringify(myObj));
						setisLoggedin(true);
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
			{isLoggedin ? <Redirect to="/" /> : ''}
		</div>
	);
};

export default LoginForm;