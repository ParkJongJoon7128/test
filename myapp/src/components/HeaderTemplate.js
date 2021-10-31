import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTemplate = () => {
	const Header = {
		backgroundColor: '#0bb286',
		color: '#fff',
		fontSize: '32px',
		padding: '20px',
		width: '100%',
		height: '5vh',
	};

	const Signin = {
		backgroundColor: '#0bb286',
		color: '#fff',
		fontSize: '20px',
		width: '100px',
		height: '5vh',
		float: 'right',
		border: 'none',
		borderRadius: '10px',
		outline: 'none',
		cursor: 'pointer',
	};

	return (
		<div className="Header" style={Header}>
			인턴공고 및 학교공지 플랫폼 사이트
			<button className="Signin" style={Signin} onClick="">
				Sign-in
			</button>
		</div>
	);
};

export default HeaderTemplate;