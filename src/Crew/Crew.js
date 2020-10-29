import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

	return (
		<div className='container'>
			{crew.map((crewMember) => {
				return (
					<Card style={{ width: '18rem' }} key={crewMember.id}>
						<Card.Img variant='top' src={crewMember.image} />
						<Card.Body>
							<Card.Title>{crewMember.name}</Card.Title>
							<Card.Text>Launches: {crewMember.launches.length}</Card.Text>
							<Button href={crewMember.wikipedia} variant='primary'>
								Learn More
							</Button>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};

export default Crew;
