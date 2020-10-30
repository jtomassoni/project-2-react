import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';
import Carousel from 'react-bootstrap/Carousel';

const LaunchDetails = ({ match }) => {
	const [launch, setLaunch] = useState('');
	let launchId = match.params.id;
	let url = `https://api.spacexdata.com/v4/launches/${launchId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setLaunch(res);
			})
			.catch((error) => alert('API Fetch Error'));
		//eslint-disable-next-line
	}, []);
	if (launch.length === 0) {
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
		<Container>
			<Row style={{ borderBottom: '10px double #097ABD' }}>
				<Col
					style={{
						alignItems: 'center',
						border: '4px solid gray',
						textAlign: 'center',
						margin: '4rem',
						lineHeight: '5rem',
					}}>
					<h3>Mission Name: </h3>
					<p>{launch.name}</p>
				</Col>
				<Col style={{ textAlign: 'center', margin: '1rem' }}>
					{launch.links.patch.small !== null ? (
						<img
							src={launch.links.patch.small}
							alt={`small ${launch.name} patch`}
						/>
					) : (
						<>
							<img
								src={process.env.PUBLIC_URL + '/no_image_found.png'}
								alt={launch.name}
							/>
							<p>There are no patches to display</p>
						</>
					)}
				</Col>
				<Col
					style={{
						alignItems: 'center',
						border: '4px solid gray',
						textAlign: 'center',
						margin: '4rem',
						lineHeight: '3rem',
					}}>
					<h3>Mission Date: </h3>{' '}
					<Moment parse='YYYY-MM-DD HH:mm'> {launch.date_utc}</Moment>
				</Col>
			</Row>
			<Row>
				<Col>
					{launch.links.flickr.original.length > 0 ? (
						<Carousel>
							{launch.links.flickr.original.map((pic) => {
								return (
									<Carousel.Item
										style={{
											marginTop: '2rem',
											maxHeight: '500px',
											border: '2px solid #097ABD',
										}}
										key={pic}>
										<img src={pic} className='img-fluid' alt='launch' />
									</Carousel.Item>
								);
							})}
						</Carousel>
					) : (
						<>
							<img
								src={process.env.PUBLIC_URL + '/no_image_found.png'}
								alt={launch.name}
							/>
							<p>There are no photos to display</p>
						</>
					)}
				</Col>

				<Col
					style={{
						marginTop: '2rem',
						border: '2px solid #097ABD',
						textAlign: 'center',
						lineHeight: '2rem',
					}}>
					<h4>Mission Details:</h4>
					{launch.details !== null ? (
						<p>{launch.details}</p>
					) : (
						<p>There are no launch details to display.</p>
					)}
				</Col>
			</Row>
			<Row className='justify-content-center'>
				<Col
					md='auto'
					style={{ margin: '5rem', boxShadow: '0 0 20px 50px', padding: 0 }}>
					{launch.links.youtube_id !== null ? (
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
							controls={true}
						/>
					) : (
						<>
							<img
								src={process.env.PUBLIC_URL + '/no_image_found.png'}
								alt={launch.name}
							/>
							<p>There are no videos to display</p>
						</>
					)}
				</Col>
			</Row>
			{/* <div className='detailsVehiclesUsed'>
				{launch.ships.map(())}
			</div> */}
		</Container>
	);
};

export default LaunchDetails;
