import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './ShipsStyles.css';

let shipsUrl = 'https://api.spacexdata.com/v4/ships';
const TotalShips = () => {
	const [ships, setShips] = useState([]);
	useEffect(() => {
		fetch(shipsUrl)
			.then((res) => res.json())
			.then((res) => {
				setShips(res);
			})
			.catch(console.error());
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
		<Container>
			<CardDeck>
				{ships.map((ship) => {
					return (
						<Link to={`/ships/${ship.id}`} key={ship.id}>
							<Card className='CardStyle'>
								{!ship.image ? (
									<Card.Img
										variant='top'
										src={process.env.PUBLIC_URL + '/no_image_found.png'}
										alt='not found'
										className='jeff'
									/>
								) : (
									<Card.Img
										variant='top'
										src={ship.image}
										alt={ship.name}
										className='jeff'
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
		</Container>
	);
};

export default TotalShips;
