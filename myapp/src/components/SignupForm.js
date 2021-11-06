import React, {useState} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const SignupForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");

    const showdata = () => {
        console.log(email);
        console.log(password);
    }
	
	return (
		<>
		<h1>Sign Up</h1>
		<h6>Please fill in this form to create an account!</h6>
		<input
			value={first_name}
			onChange={({ target: { value } }) => setEmail(value)}
			type="text"
			placeholder="First Name"
			/>
		<input
			value={last_name}
			onChange={({ target: { value } }) => setEmail(value)}
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
			value={confirm_password}
			onChange={({ target: { value } }) => setPassword(value)}
			type="password"
			placeholder="Confirm Password"
			/>
		
		<button onClick = { showdata }>Sign Up</button>
			</>);
};

export default SignupForm;