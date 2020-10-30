import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Moment from 'react-moment';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

let rocketsUrl = 'https://api.spacexdata.com/v4/rockets';
const Crew = () => {
	const [rockets, setRockets] = useState([]);
	useEffect(() => {
		fetch(rocketsUrl)
			.then((res) => res.json())
			.then((res) => {
				setRockets(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);

	return (
		<Container>
			<CardDeck style={{ padding: '3rem', color: 'black'}}>
				{rockets.map((rocket) => {
					return (
						<Card>
							<Card.Img variant='top' src={rocket.flickr_images[0]} />
							<Card.Body>
								<Card.Title>{rocket.name}</Card.Title>
								<Card.Text>{rocket.description}</Card.Text>
							</Card.Body>
							<ListGroup className='list-group-flush'>
								<ListGroupItem>Height(m): {rocket.height.meters}</ListGroupItem>
								<ListGroupItem>Height(ft): {rocket.height.feet}</ListGroupItem>
								<ListGroupItem>
									First Flight:{' '}
									<Moment format='YYYY-MM-DD'>{rocket.first_flight}</Moment>
								</ListGroupItem>
							</ListGroup>
							<Card.Body>
								<Card.Link href={rocket.wikipedia}>
									<Button style={{backgroundColor: '#097ABD'}}>Learn More</Button>
								</Card.Link>
							</Card.Body>
						</Card>
					);
				})}
			</CardDeck>
		</Container>
	);
};

export default Crew;
