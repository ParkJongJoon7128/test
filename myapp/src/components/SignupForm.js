import React, { useState } from 'react';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const SignupForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setconfirmPassword] = useState('');

	const showdata = () => {
		console.log(email);
		console.log(password);
	};

	return (
		<>
			<h1>Sign Up</h1>
			<h6>Please fill in this form to create an account!</h6>
			<input
				value={firstName}
				onChange={({ target: { value } }) => setFirstName(value)}
				type="text"
				placeholder="First Name"
			/>
			<input
				value={lastName}
				onChange={({ target: { value } }) => setLastName(value)}
				type="text"
				placeholder="Last Name"
			/>
			<input
				value={email}
				onChange={({ target: { value } }) => setEmail(value)}
				type="text"
				placeholder="Email"
			/>
			<input
				value={password}
				onChange={({ target: { value } }) => setPassword(value)}
				type="password"
				placeholder="password"
			/>
			<input
				value={confirmPassword}
				onChange={({ target: { value } }) => setconfirmPassword(value)}
				type="password"
				placeholder="Confirm Password"
			/>

			<button onClick={showdata}>Sign Up</button>
		</>
	);
};

export default SignupForm;