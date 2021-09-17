import React from 'react';
// import styled from 'styled-components';
import NoticesList from './NoticesList';

const MainTemplate = () => {
	const Main = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		padding: '60px',
	};

	const Section01 = {
		margin: '25px',
		width: '55%',
		height: '80vh',
		backgroundColor: '#eeeeee',
		fontSize: '45px',
		textAlign: 'center',
	};

	const Section02 = {
		margin: '25px',
		width: '45%',
		height: '80vh',
		backgroundColor: '#ff0000',
		fontSize: '45px',
		textAlign: 'center',
	};

	return (
		<div className="Main" style={Main}>
			<div className="Section01" style={Section01}>
				비교과
				<NoticesList />
			</div>

			<div className="Section02" style={Section02}>
				튜터링 및 학공
			</div>
		</div>
	);
};

export default MainTemplate;