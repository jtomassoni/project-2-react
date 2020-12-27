import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';
import './LaunchesStyle.css';

let launchesUrl = 'https://api.spacexdata.com/v4/launches';

const Launches = () => {
	const [launches, setLaunches] = useState([]);
	useEffect(() => {
		fetch(launchesUrl)
			.then((res) => res.json())
			.then((res) => {
				setLaunches(res.reverse());
			})
			.catch(console.error());
	}, []);

	if (launches.length === 0) {
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
		<>
			<Container fluid>
				<Button
					block
					variant='dark'
					onClick={() => {
						const tempArry = [...launches].reverse();
						setLaunches(tempArry);
					}}>
					Click to Sort by Oldest/Newest
				</Button>
				<CardDeck className='justify-content-center'>
					{launches.map((launch) => {
						return (
							<Link
								to={`/launches/${launch.id}`}
								key={launch.id}
								className='LinkStyle'>
								<Card>
									{!launch.links.patch.small ? (
										<Card.Img
											variant='top'
											src={process.env.PUBLIC_URL + '/no_image_found.png'}
											alt='not found'
										/>
									) : (
										<Card.Img
											variant='top'
											src={launch.links.patch.small}
											alt={`small ${launch.name} patch`}
										/>
									)}
									<Card.Body>
										<Card.Title className='text-center'>
											{launch.name}
										</Card.Title>
										<Card.Subtitle className='mb-2 text-muted text-center'>
											<Moment parse='YYYY-MM-DD'> {launch.date_utc}</Moment>
										</Card.Subtitle>
									</Card.Body>
								</Card>
							</Link>
						);
					})}
				</CardDeck>
			</Container>
		</>
	);
};

export default Launches;
