import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';

let shipsUrl = 'https://api.spacexdata.com/v4/ships';
const TotalShips = () => {
	const [ships, setShips] = useState([]);
	useEffect(() => {
		fetch(shipsUrl)
			.then((res) => res.json())
			.then((res) => {
				setShips(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);
	if (ships.length === 0) {
		return (
			<Container
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					height: '50vh',
				}}>
				<div>
					Loading...
					<Spinner animation='grow' variant='success' size='sm' />
				</div>
			</Container>
		);
	}

	return (
		<div className='container'>
			<CardDeck>
				{ships.map((ship) => {
					return (
						<Link to={`/ships/${ship.id}`} key={ship.id}>
							<div className='card'>
								<h3>{ship.name}</h3>
								<div className='card-image'>
									{!ship.image ? (
										<img
											src={process.env.PUBLIC_URL + '/no_image_found.png'}
											alt='not found'
										/>
									) : (
										<img
											src={ship.image}
											className='img-thumbnail'
											alt={ship.name}
										/>
									)}
								</div>
							</div>
						</Link>
					);
				})}
			</CardDeck>
		</div>
	);
};

export default TotalShips;
