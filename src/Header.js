import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import TotalLaunches from './TotalLaunches.js'

const Header = () => {
	return (
		<div className='header'>
			<img className="headerPhoto" src='https://cdn.pixabay.com/photo/2017/01/31/20/36/rocket-2027086_1280.png' />
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/all-launches'>All Launches</Link>
			</nav>
			<main>
			</main>
		</div>
	);
};

export default Header;
