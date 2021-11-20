import React, { useState } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
const axios = require('axios');
// import "/workspace/test/myapp/src/App.css";

const SignupForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setconfirmPassword] = useState('');

	const sendusers = () => {
		axios
			.post('https://kangnam-site.herokuapp.com/newuser', {
				username: firstName + lastName,
				passname: confirmPassword,
			})
			.then((response1) => {
				if (response1.data == 'done') {
					axios
						.get('https://kangnam-site.herokuapp.com/newusersave')
						.then((response2) => {});
				}
			});
	};

	const showdata = () => {
		console.log(email);
		console.log(password);
	};

	return (
		<form>
			<h3>Sign Up</h3>
			<h6>Please fill in this form to create an account!</h6>

			<div className="form-group">
				<label>First name</label>
				<input
					value={firstName}
					className="form-control"
					onChange={({ target: { value } }) => setFirstName(value)}
					type="text"
					placeholder="First Name"
				/>
			</div>

			<div className="form-group">
				<label>Last name</label>
				<input
					value={lastName}
					className="form-control"
					onChange={({ target: { value } }) => setLastName(value)}
					type="text"
					placeholder="Last Name"
				/>
			</div>

			<div className="form-group">
				<label>Email address</label>
				<input
					value={email}
					className="form-control"
					onChange={({ target: { value } }) => setEmail(value)}
					type="text"
					placeholder="Email"
				/>
			</div>

			<div className="form-group">
				<label>Password</label>
				<input
					value={password}
					className="form-control"
					onChange={({ target: { value } }) => setPassword(value)}
					type="password"
					placeholder="password"
				/>
			</div>

			<div className="form-group">
				<label>Confirm password</label>
				<input
					value={confirmPassword}
					className="form-control"
					onChange={({ target: { value } }) => setconfirmPassword(value)}
					type="password"
					placeholder="Confirm Password"
				/>
			</div>
<Link to="/">
			<button onClick={sendusers} className="btn btn-primary btn-block">
				Sign Up
			</button>
	</Link>
			<p className="forgot-password text-right">
				Already registered <Link to="/Login">sign in?</Link>
			</p>
		</form>
	);
};

export default SignupForm;