import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

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
				fluid
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					height: '100vh',
				}}>
				<Row>
					<Col md='auto'>
						Loading...
						<Spinner animation='grow' variant='info' />
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<CardDeck style={{textAlign:'center',}}>
			{ships.map((ship) => {
				return (
					<Link
						to={`/ships/${ship.id}`}
						key={ship.id}
						style={{
							margin: '2rem',
							display: 'flex',
							justifyContent: 'space-evenly',
						}}>
						<Card style={{ width: '18rem', height: '23rem', padding: '2rem' }}>
							{!ship.image ? (
								<Card.Img
									variant='top'
									src={process.env.PUBLIC_URL + '/no_image_found.png'}
									alt='not found'
								/>
							) : (
								<Card.Img
									variant='top'
									src={ship.image}
									className='img-thumbnail'
									alt={ship.name}
								/>
							)}
							<Card.Body>
								<Card.Title className='text-center'>{ship.name}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted text-center'>
									Status: <em>{ship.active ? 'Active' : 'Retired'}</em>
								</Card.Subtitle>
							</Card.Body>
						</Card>
					</Link>
				);
			})}
		</CardDeck>
	);
};

export default TotalShips;
