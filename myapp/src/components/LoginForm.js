import React, {useState} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const LoginForm = () => {
	
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const showdata = () => {
        console.log(email);
        console.log(password);
    }
	
	return (
		<>
		<h1>Sign-in</h1>
		<input
			value={email}
			onChange={({ target: { value } }) => setEmail(value)}
			type="text"
			placeholder="email"
			/>
		<input
			value={password}
			onChange={({ target: { value } }) => setPassword(value)}
			type="password"
			placeholder="password"
			/>
		<>
		You dont have a account? <Link to="/Signup">Click the sign-up</Link>
		</>
		<button onClick = { showdata }>Sign-in</button>
			</>);
};

export default LoginForm;