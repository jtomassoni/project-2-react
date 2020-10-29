import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Moment from 'react-moment';

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
		<div className='container'>
			{rockets.map((rocket) => {
				return (
					<Card style={{ width: '18rem' }} key={rocket.id}>
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
								<Button>Learn More</Button>
							</Card.Link>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};

export default Crew;
