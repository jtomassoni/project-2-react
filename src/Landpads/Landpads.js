import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';
import './LandpadsStyle.css';

let landpadsUrl = 'https://api.spacexdata.com/v4/landpads';
const Crew = () => {
	const [landpads, setLandpads] = useState([]);
	useEffect(() => {
		fetch(landpadsUrl)
			.then((res) => res.json())
			.then((res) => {
				setLandpads(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);
	if (landpads.length === 0) {
		return (
			<Container
				fluid
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					height: '50vh',
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
		<Container className='containerStyle'>
			<CardDeck>
				{landpads.map((landpad) => {
					return (
						<Link to={`/landpads/${landpad.id}`}>
							<Card
								className='cardStyle'
								key={landpad.id}>
								<Card.Body>
									<Card.Title>{landpad.full_name}</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										Status:{' '}
										{landpad.status.charAt(0).toUpperCase() +
											landpad.status.slice(1)}
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

export default Crew;
