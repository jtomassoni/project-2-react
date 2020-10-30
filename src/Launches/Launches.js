import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let launchesUrl = 'https://api.spacexdata.com/v4/launches';

const Launches = () => {
	const [launches, setLaunches] = useState([]);
	const [reverseArr, setReverseArr] = useState(false);
	// if reverseArr is false, display oldest to newest.
	// if reverseArr is true, display oldest to newest.
	useEffect(() => {
		fetch(launchesUrl)
			.then((res) => res.json())
			.then((res) => {
				setLaunches(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);

	if (launches.length === 0) {
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
		<>
			<Container fluid>
				<Row className='justify-content-md-center'>
					<Col md='auto'>
						<Button
							variant='dark'
							onClick={() => {
								const tempArry = [...launches].reverse();
								setLaunches(tempArry);
							}}>
							Click to Sort by Oldest/Newest
						</Button>
					</Col>
				</Row>
			</Container>
			<CardDeck>
				{launches.map((launch) => {
					return (
						<Link
							to={`/launches/${launch.id}`}
							key={launch.id}
							style={{
								margin: '2rem',
								display: 'flex',
								justifyContent: 'space-evenly',
							}}>
							<Card
								style={{ width: '18rem', height: '23rem', margin: '.5rem' }}>
								{!launch.links.patch.small ? (
									<Card.Img
										variant='top'
										src={process.env.PUBLIC_URL + '/no_image_found.png'}
										alt='not found'
									/>
								) : (
									<img
										src={launch.links.patch.small}
										alt={`small ${launch.name} patch`}
									/>
								)}
								<Card.Body>
									<Card.Title className='text-center'>{launch.name}</Card.Title>
								</Card.Body>
							</Card>
						</Link>
					);
				})}
			</CardDeck>
		</>
	);
};

export default Launches;
