import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const HeaderTemplate = (props) => {
	const Header = {
		backgroundColor: '#0bb286',
		color: '#fff',
		fontSize: '32px',
		padding: '20px',
		width: '100%',
		height: '10vh',
	};

	const Login = {
		backgroundColor: '#0bb286',
		color: '#fff',
		fontSize: '20px',
		width: '100px',
		height: '10vh',
		float: 'right',
		border: 'none',
		borderRadius: '10px',
		outline: 'none',
		cursor: 'pointer',
	};

	const logged_in = {
		color: '#fff',
		fontSize: '20px',
		width: '100px',
		height: '10vh',
		float: 'right',
		outline: 'none',
		cursor: 'pointer',
	};

	const Hidden = {
		display: 'none',
	};

	const logout = () => {
		let myObj = {
			firstname: '',
			lastname: '',
			email: '',
		};
		localStorage.setItem('savesesion', JSON.stringify(myObj));
		window.location.reload();
	};

	return (
		<div className="Header" style={Header}>
			인턴공고 및 학교공지 플랫폼 사이트
			<Link to="/Login">
				<button className="Login" style={props.myuser ? Hidden : Login}>
					Sign-in
				</button>
			</Link>
			<div className="logged_in" style={props.myuser ? logged_in : Hidden}>
				<DropdownButton id="dropdown-basic-button" title={props.myuser}>
					<Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
					<Dropdown.Item href="#/action-2">My Page</Dropdown.Item>
				</DropdownButton>
			</div>
		</div>
	);
};

export default HeaderTemplate;