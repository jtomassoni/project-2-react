import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const Header = () => {
	const [showStarman, setShowStarman] = useState(false);
	const handleCloseStarman = () => {
		setShowStarman(false);
	};
	const handleShowStarman = () => {
		handleCloseYoutube();
		setShowStarman(true);
	};

	const [showYoutube, setShowYoutube] = useState(false);
	const handleCloseYoutube = () => setShowYoutube(false);
	const handleShowYoutube = () => setShowYoutube(true);

	const [roadster, setRoadster] = useState('');
	useEffect(() => {
		let roadsterUrl = 'https://api.spacexdata.com/v4/roadster';
		fetch(roadsterUrl)
			.then((res) => res.json())
			.then((res) => {
				setRoadster(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);
	if (roadster.length === 0) {
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
		<Container fluid>
			<Row
				style={{ backgroundColor: '#5C86A0' }}
				className='align-items-center'>
				<Col>
					<Link to='/'>
						<img
							className='headerPhoto'
							src='https://i.imgur.com/NxwMIf2.png'
							alt='rocket icon'
							height='75px'
						/>
					</Link>
				</Col>
				<Col>
					<Button as={Link} to='/latest' variant='outline-light'>
						Latest
					</Button>
				</Col>
				<Col>
					<Button as={Link} to='/launches' variant='outline-light'>
						Launches
					</Button>
				</Col>
				<Col>
					<Button as={Link} to='/ships' variant='outline-light'>
						Ships
					</Button>
				</Col>
				<Col>
					<Link to='/rockets'>
						<Button variant='outline-light'>Rockets</Button>
					</Link>
				</Col>
				<Col>
					<Link to='/launchpads'>
						<Button variant='outline-light'>Launchpads</Button>
					</Link>
				</Col>
				<Col>
					<Link to='/landpads'>
						<Button variant='outline-light'>Landpads</Button>
					</Link>
				</Col>
				<Col>
					<Link to='/crew'>
						<Button variant='outline-light'>Crew</Button>
					</Link>
				</Col>
				<Col>
					<Link>
						<Button variant='outline-light' onClick={handleShowStarman}>
							Roadster
						</Button>
						<Modal
							show={showStarman}
							onHide={handleCloseStarman}
							centered
							size='lg'>
							<Modal.Header>
								<Modal.Title>
									I'm Starman, currently flying {roadster.speed_mph.toFixed(2)}
									mph
									<small>
										({roadster.speed_kph.toFixed(2)}kph...if you're wrong)
									</small>{' '}
									around the sun.
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								{' '}
								<Carousel>
									{roadster.flickr_images.map((pic) => {
										return (
											<Carousel.Item key={pic}>
												<img src={pic} className='img-fluid' alt='launch' />
											</Carousel.Item>
										);
									})}
								</Carousel>
							</Modal.Body>
							<Modal.Body>{roadster.details}</Modal.Body>
							<Modal.Footer>
								<Button variant='secondary' onClick={handleCloseStarman}>
									Close
								</Button>
								<Button variant='primary' onClick={handleShowYoutube}>
									Click for Launch Video
								</Button>
								<Link
									to={'/launches/5eb87d13ffd86e000604b360'}
									onClick={() => {
										handleCloseYoutube();
										handleCloseStarman();
									}}>
									<Button variant='secondary'>Click for Launch Details</Button>
								</Link>
								<Modal
									show={showYoutube}
									onHide={handleCloseYoutube}
									centered
									size='lg'>
									<Modal.Header closeButton>
										<Modal.Title>Launch Video</Modal.Title>
									</Modal.Header>
									<Modal.Body className='starmanVideoPlayer'>
										<ReactPlayer
											url={`https://youtu.be/wbSwFU6tY1c`}
											controls={true}
										/>
									</Modal.Body>
									<Modal.Footer>
										<Button variant='secondary' onClick={handleCloseYoutube}>
											Close Video Player
										</Button>

										<Link
											to={'launches/5eb87d13ffd86e000604b360'}
											onClick={() => {
												handleCloseYoutube();
												handleCloseStarman();
											}}>
											<Button variant='secondary'>
												Click for Launch Details
											</Button>
										</Link>
									</Modal.Footer>
								</Modal>
							</Modal.Footer>
						</Modal>{' '}
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
