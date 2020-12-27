import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import './LaunchpadsStyle.css';

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
		<Container className='containerStyle'>
			<CardDeck>
				{launchPads.map((launchpad) => {
					return (
						<Link to={`/launchpads/${launchpad.id}`} key={launchpad.id}>
							<Card className='cardStyle'>
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
		</Container>
	);
};

export default TotalLaunchPads;
