import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';

let crewUrl = 'https://api.spacexdata.com/v4/crew';
const Crew = () => {
	const [crew, setCrew] = useState([]);
	useEffect(() => {
		fetch(crewUrl)
			.then((res) => res.json())
			.then((res) => {
				setCrew(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);
	if (crew.length === 0) {
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
		<Container
			style={{
				color: 'black',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				textAlign: 'center',
			}}>
			<CardDeck>
				{crew.map((crewMember) => {
					return (
						<Card
							className='mt-5'
							style={{ flexBasis: '300px' }}
							key={crewMember.id}>
							<Card.Img variant='top' src={crewMember.image} />
							<Card.Body>
								<Card.Title>{crewMember.name}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									Agency: <em>{crewMember.agency}</em>
								</Card.Subtitle>

								<Card.Text>
									Completed SpaceX Launches:{' '}
									<em>{crewMember.launches.length}</em>
								</Card.Text>
								<Card.Footer>
									<Button href={crewMember.wikipedia} variant='primary'>
										Learn More
									</Button>
								</Card.Footer>
							</Card.Body>
						</Card>
					);
				})}
			</CardDeck>
		</Container>
	);
};

export default Crew;
