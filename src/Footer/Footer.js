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
		<footer
			style={{
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				color: 'white',
				padding: '6px',
				textAlign: 'center',
				alignItems: 'center',
			}}>
			<p>
				Built with❤ and React by <a href='https://github.com/jtomassoni'>JT</a>
			</p>
		</footer>
	);
};

export default Header;
