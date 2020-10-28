import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
	return (
		<div className='header'>
			<nav>
				<div className='logo'>
					<Link to='/'>
						<img
							className='headerPhoto'
							src='https://cdn.pixabay.com/photo/2017/01/31/20/36/rocket-2027086_1280.png'
							alt='rocket icon'
						/>
					</Link>
				</div>
				<div className='links'>
					<Link to='/'>
						<Button variant='outline-light'>Home</Button>
					</Link>
					<Link to='/launches'>
						<Button variant='outline-light'>All Launches</Button>
					</Link>
					<Link to='/ships'>
						<Button variant='outline-light'>All Ships</Button>
					</Link>
					<Link to='/launchpads'>
						<Button variant='outline-light'>All LaunchPads</Button>
					</Link>
				</div>
			</nav>
			<main></main>
		</div>
	);
};

export default Header;
