import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
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
		<Container fluid>
			<CardDeck>
				{landpads.map((landpad) => {
					return (
						<Link to={`/landpads/${landpad.id}`}>
							<Card style={{ width: '18rem', textAlign: 'center'}} key={landpad.id}>
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
