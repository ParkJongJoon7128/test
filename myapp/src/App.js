import React from 'react';
import HeaderTemplate from './components/HeaderTemplate';
import MainTemplate from './components/MainTemplate';
import FooterTemplate from './components/FooterTemplate';

const App = () => {
	return (
		<div>
			<HeaderTemplate />
			<MainTemplate />
			<FooterTemplate />
		</div>
	);
};

export default App;