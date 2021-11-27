import React, { useState } from 'react';
import HeaderTemplate from './components/HeaderTemplate';
import MainTemplate from './components/MainTemplate';
import FooterTemplate from './components/FooterTemplate';

const App = () => {
	const initialsesionsave = JSON.parse(localStorage.getItem('savesesion')) || [''];
	const [user, setuser] = useState(initialsesionsave.firstname || '');

	return (
		<div>
			<HeaderTemplate myuser={user} />
			<MainTemplate />
			<FooterTemplate />
		</div>
	);
};

export default App;