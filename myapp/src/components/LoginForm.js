import React, { useState } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
 import "/workspace/test/myapp/src/styles/LoginForm.css";

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const showdata = () => {
		console.log(email);
		console.log(password);
	};

	return (
		<form>
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

			<div>
				You dont have a account? Click the <Link to="/Signup">sign up</Link>
			</div>
			<button onClick={showdata} className="btn btn-primary btn-block">Sign In</button>
			<p className="forgot-password text-right">
				Forgot <a href="#">password?</a>
			</p>
		</form>
	);
};

export default LoginForm;