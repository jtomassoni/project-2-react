import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
		<Container
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				height: '50vh',
				color: 'black',
			}}>
			<div className='crewCards'>
				<CardDeck>
					{crew.map((crewMember) => {
						return (
							<Card
								style={{ width: '10rem', backgroundOpacity: '0' }}
								key={crewMember.id}>
								<Card.Img variant='top' src={crewMember.image} />
								<Card.Body>
									<Card.Title>{crewMember.name}</Card.Title>
									<Card.Text>Launches: {crewMember.launches.length}</Card.Text>
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
			</div>
		</Container>
	);
};

export default Crew;
