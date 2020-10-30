import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const LandpadDetails = ({ match }) => {
	const [landpad, setLandpad] = useState('');
	let landpadId = match.params.id;
	let url = `https://api.spacexdata.com/v4/landpads/${landpadId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setLandpad(res);
			})
			.catch((error) => alert('API Fetch Error'));
		//eslint-disable-next-line
	}, []);
	if (landpad.length === 0) {
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
			as='section'
			style={{
				padding: '1rem',
				minHeight: '90vh',
				height: '100%',
			}}>
			<h2>Landpad Name: {landpad.name}</h2>
			<h3>
				<em>Full Name: {landpad.full_name}</em>
			</h3>
			<h3>
				Location: {landpad.latitude},{landpad.longitude}
			</h3>
			<p>{landpad.details}</p>
			<h3>
				Status:{' '}
				{landpad.status.charAt(0).toUpperCase() + landpad.status.slice(1)}
			</h3>
			<Accordion>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant='link' eventKey='0'>
							Launches
						</Accordion.Toggle>
					</Card.Header>
					{landpad.launches.map((launch) => {
						return (
							<Accordion.Collapse eventKey='0'>
								<Card.Body>
									<ul>
										<Link to={`/launches/${launch}`}>
											<li>{launch}</li>
										</Link>
									</ul>
								</Card.Body>
							</Accordion.Collapse>
						);
					})}
				</Card>
			</Accordion>
		</Container>
	);
};

export default LandpadDetails;
