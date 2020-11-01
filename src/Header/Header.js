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
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
		<>
			<Navbar as='header' sticky='top' variant='light' bg='light' expand='md'>
				<Navbar.Brand href='/home'>
					<img
						src='https://i.imgur.com/NxwMIf2.png'
						alt='jtxIcon'
						height='25px'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/latest'>Latest</Nav.Link>
						<Nav.Link href='/launches'>Launches</Nav.Link>
						<Nav.Link href='/crew'>Crew</Nav.Link>
						<NavDropdown title='Vehicles' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/ships'>Ships</NavDropdown.Item>
							<NavDropdown.Item href='/launchpads'>Launchpads</NavDropdown.Item>
							<NavDropdown.Item href='/landpads'>Landpads</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="JT's Favorites" id='basic-nav-dropdown'>
							<NavDropdown.Item href='/launches/5eb87d39ffd86e000604b37d'>
								First Starlink
							</NavDropdown.Item>
							<NavDropdown.Item href='/launches/5eb87d46ffd86e000604b388'>
								Crew Dragon ft Bob and Doug
							</NavDropdown.Item>
							<NavDropdown.Item href='/launches/5eb87cf3ffd86e000604b345'>
								First DroneShip Landing
							</NavDropdown.Item>
							<NavDropdown.Item href='launches/5eb87d13ffd86e000604b360'>
								Falcon Heavy Launch
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link onClick={handleShowStarman}>Starman</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Modal show={showStarman} onHide={handleCloseStarman} centered size='lg'>
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
								<Button variant='secondary'>Click for Launch Details</Button>
							</Link>
						</Modal.Footer>
					</Modal>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Header;
