import React, {useState} from 'react';

const LoginForm = () => {
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
		<button>Sign-in</button>
			</>);
};

export default LoginForm;