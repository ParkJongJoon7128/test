import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import styles from '../styles/HeaderTemplate.css'

const HeaderTemplate = (props) => {
	
	const Hidden  = {
	display: 'none'
}
	
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
		<div className="Header" style={styles.Header}>
			Kolleget
			<Link to="/Login">
				<button className="Login" style={props.myuser ? Hidden : styles.Login}>
					Sign-in
				</button>
			</Link>
			<div className="logged_in" style={props.myuser ? styles.logged_in : Hidden}>
				<DropdownButton id="dropdown-basic-button" title={props.myuser} style={styles.DropdownButton}>
					<Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
					<Dropdown.Item href="#/action-2">My Page</Dropdown.Item>
				</DropdownButton>
			</div>
		</div>
	);
};

export default HeaderTemplate;