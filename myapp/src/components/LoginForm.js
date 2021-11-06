import React, {useState} from 'react';

const LoginForm = () => {
	
	const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const showdata = () => {
        console.log(email);
        console.log(password);
    }
	
	return (
		<>
		<h1>Sign-in</h1>
		<inout
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
		<button onClick = { showdata }>Sign-in</button>
			</>);
};

export default LoginForm;