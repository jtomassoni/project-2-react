import React from 'react';
import './HomeStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
	return (
		<Container>
			<Row>
				<Col className='welcome'>
					<h1>
						Welcome to{' '}
						<img
							src='https://i.imgur.com/NxwMIf2.png'
							alt='jtxlogo'
							className='welcomeimg'
						/>
					</h1>
					<h5>
						We <em>try </em> to do cool spacey things.
					</h5>
				</Col>
			</Row>
			<Row style={{ textAlign: 'center' }}>
				<Col>
					<Carousel className='carousel'>
						<Carousel.Item key={'https://i.imgur.com/CbupccT.jpg'}>
							<img
								src={'https://i.imgur.com/CbupccT.jpg'}
								className='carouselimg'
								alt='launch'
							/>
						</Carousel.Item>
						<Carousel.Item key={'https://i.imgur.com/cocjO0P.jpg'}>
							<img
								src={'https://i.imgur.com/cocjO0P.jpg'}
								className='carouselimg'
								alt='launch'
							/>
						</Carousel.Item>
						<Carousel.Item key={'https://i.imgur.com/o1mIQr4.jpg'}>
							<img
								src={'https://i.imgur.com/o1mIQr4.jpg'}
								className='carouselimg'
								alt='launch'
							/>
						</Carousel.Item>
						<Carousel.Item key={'https://i.imgur.com/hH2LBp4.jpg'}>
							<img
								src={'https://i.imgur.com/hH2LBp4.jpg'}
								className='carouselimg'
								alt='launch'
							/>
						</Carousel.Item>
						<Carousel.Item key={'https://i.imgur.com/74b7vdE.jpg'}>
							<img
								src={'https://i.imgur.com/74b7vdE.jpg'}
								className='carouselimg'
								alt='launch'
							/>
						</Carousel.Item>
						<Carousel.Item key={'https://i.imgur.com/yV4x9Tc.jpg'}>
							<img
								src={'https://i.imgur.com/yV4x9Tc.jpg'}
								className='carouselimg'
								alt='launch'
							/>
						</Carousel.Item>
					</Carousel>
				<Col>
					<p>
						If you've made it this far, it means you're good at a lot of things,
						and deserve this beautiful website. From here, you'll be able to
						navigate through the entire history of SpaceX Launches.
					</p>
					<p>
						I've included functionality for sorting launches, viewing the
						corresponding photo and video galleries, as well as information
						about Vehichles, Rockets, Launch and Landing Locations, Crew, and a
						gift from Elon.
					</p>
					<p>
						If you have even a remote interest in space exploration, I hope that
						you find this content easy to navigate and relatively interesting.
						Thanks for stopping by!
					</p>
				</Col>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
