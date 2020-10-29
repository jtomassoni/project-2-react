import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';

let launchPadsUrl = 'https://api.spacexdata.com/v4/launchpads';
const TotalLaunchPads = () => {
	const [launchPads, setLaunchPads] = useState([]);
	useEffect(() => {
		fetch(launchPadsUrl)
			.then((res) => res.json())
			.then((res) => {
				setLaunchPads(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);
	if (launchPads.length === 0) {
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
		<div className='container'>
			<CardDeck>
				{launchPads.map((launchpad) => {
					return (
						<Link to={`/launchpads/${launchpad.id}`} key={launchpad.id}>
							<Card style={{ width: '18rem' }}>
								<Card.Body>
									<Card.Title>{launchpad.name}</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										Status:{' '}
										{launchpad.status.charAt(0).toUpperCase() +
											launchpad.status.slice(1)}
									</Card.Subtitle>
								</Card.Body>
							</Card>
						</Link>
					);
				})}
			</CardDeck>
		</div>
	);
};

export default TotalLaunchPads;
