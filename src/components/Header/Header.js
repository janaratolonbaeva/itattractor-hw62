import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
	return (
		<header className="Header">
			<NavLink to="/" className="Logo">Jan<span>ara</span></NavLink>
			<nav className="Nav">
				<NavLink to="/" exact>Home</NavLink>
				<NavLink to="/about" exact>About us</NavLink>
				<NavLink to="/contacts" exact>Contacts</NavLink>
			</nav>
		</header>
	);
};

export default Header;