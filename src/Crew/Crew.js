import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';
import './CrewStyles.css';

let crewUrl = 'https://api.spacexdata.com/v4/crew';
const Crew = () => {
	const [crew, setCrew] = useState([]);
	useEffect(() => {
		fetch(crewUrl)
			.then((res) => res.json())
			.then((res) => {
				setCrew(res);
			})
			.catch(console.error());
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
		<Container>
			<CardDeck className='justify-content-center'>
				{crew.map((crewMember) => {
					return (
						<Card
							className='bg-dark text-white'
							style={{ minWidth: '300px', margin: '1rem' }}
							key={crewMember.id}>
							<Card.Img src={crewMember.image} />
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
									<Button variant='dark' href={crewMember.wikipedia}>
										Click to learn More
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
