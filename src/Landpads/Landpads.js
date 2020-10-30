import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';

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
					height: '100vh',
				}}>
				<Row>
					<Col md='auto'>
						Loading...
						<Spinner animation='grow' variant='success' />
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<Container fluid style={{ height: '90vh' }}>
			<CardDeck>
				{landpads.map((landpad) => {
					return (
						<Link to={`/landpads/${landpad.id}`}>
							<Card
								style={{
									width: '18rem',
									textAlign: 'center',
									backgroundColor: 'rgba(255,255,255, 0)',
									border: '2px white solid'
								}}
								key={landpad.id}>
								<Card.Body>
									<Card.Title>{landpad.full_name}</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										{landpad.name}
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
