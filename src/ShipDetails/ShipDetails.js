import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';

const ShipDetails = ({ match }) => {
	const [ship, setShips] = useState('');
	let shipId = match.params.id;
	let url = `https://api.spacexdata.com/v4/ships/${shipId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setShips(res);
			})
			.catch((error) => alert('API Fetch Error'));
		//eslint-disable-next-line
	}, []);
	if (ship.length === 0) {
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
			<Row style={{ borderBottom: '2px solid #097ABD', textAlign: 'center' }}>
				<Col>
					<h1>Ship Name: {ship.name}</h1>
					{ship.image ? (
						<img src={ship.image} className='img-thumbnail' alt={ship.name} />
					) : (
						<>
							<img
								src={process.env.PUBLIC_URL + '/no_image_found.png'}
								alt='not found'
							/>
							<p>There are no images of this ship.</p>
						</>
					)}
					<p>
					Status: <em>{ship.active ? 'Active' : 'Retired'}</em>
					</p>
				</Col>
			</Row>
			<Row>
				<Col style={{ margin: '2rem', textAlign: 'center' }}>
					<ListGroup style={{ color: 'black', backgroundColor: '#097ABD' }}>
						SpaceX Roles
						{ship.roles.map((role) => {
							return <ListGroup.Item>{role}</ListGroup.Item>;
						})}
					</ListGroup>

					<Dropdown style={{ margin: '1rem' }}>
						<Dropdown.Toggle
							style={{ backgroundColor: '#097ABD' }}
							id='dropdown-basic'>
							Launches with {ship.name} in operation
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{ship.launches.map((launch) => {
								return (
									<Dropdown.Item
										style={{
											padding: '5px',
										}}
										href={`/launches/${launch}`}>
										Launch ID: {launch}
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
					<a href={ship.link}>
						<Button style={{ backgroundColor: '#097ABD' }}>
							More More Info from MarineTraffic.com
						</Button>
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default ShipDetails;
