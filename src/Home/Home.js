import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
	return (
		<Container style={{ height: '90vh' }}>
			<Row>
				<Col
					style={{
						textAlign: 'center',
						borderBottom: '4px solid #5C86A0',
						marginTop: '8rem',
						marginBottom: '8rem',
					}}>
					<h1>Welcome to jtX</h1>
					<h5>
						We <em>try </em> to do cool spacey things.
					</h5>
				</Col>
			</Row>
			<Row style={{ textAlign: 'center' }}>
				<Col>
					<Carousel>
						<Carousel.Item
							style={{
								height: '400px',
							}}
							key={'https://i.imgur.com/CbupccT.jpg'}>
							<p>
								<img
									src={'https://i.imgur.com/CbupccT.jpg'}
									style={{
										height: '100%',
										width: '100%',
										objectFit: 'contain',
										objectPosition: 'center',
									}}
									className='img-fluid'
									alt='launch'
								/>
							</p>
						</Carousel.Item>
						<Carousel.Item
							style={{
								height: '400px',
							}}
							key={'https://i.imgur.com/cocjO0P.jpg'}>
							<p>
								<img
									src={'https://i.imgur.com/cocjO0P.jpg'}
									style={{
										height: '100%',
										width: '100%',
										objectFit: 'contain',
										objectPosition: 'center',
									}}
									className='img-fluid'
									alt='launch'
								/>
							</p>
						</Carousel.Item>
						<Carousel.Item
							style={{
								height: '400px',
							}}
							key={'https://i.imgur.com/o1mIQr4.jpg'}>
							<p>
								<img
									src={'https://i.imgur.com/o1mIQr4.jpg'}
									style={{
										height: '100%',
										width: '100%',
										objectFit: 'contain',
										objectPosition: 'center',
									}}
									className='img-fluid'
									alt='launch'
								/>
							</p>
						</Carousel.Item>
						<Carousel.Item
							style={{
								height: '400px',
							}}
							key={'https://i.imgur.com/hH2LBp4.jpg'}>
							<p>
								<img
									src={'https://i.imgur.com/hH2LBp4.jpg'}
									style={{
										height: '100%',
										width: '100%',
										objectFit: 'contain',
										objectPosition: 'center',
									}}
									className='img-fluid'
									alt='launch'
								/>
							</p>
						</Carousel.Item>
						<Carousel.Item
							style={{
								height: '400px',
							}}
							key={'https://i.imgur.com/74b7vdE.jpg'}>
							<p>
								<img
									src={'https://i.imgur.com/74b7vdE.jpg'}
									style={{
										height: '100%',
										width: '100%',
										objectFit: 'contain',
										objectPosition: 'center',
									}}
									className='img-fluid'
									alt='launch'
								/>
							</p>
						</Carousel.Item>
						<Carousel.Item
							style={{
								height: '400px',
							}}
							key={'https://i.imgur.com/yV4x9Tc.jpg'}>
							<p>
								<img
									src={'https://i.imgur.com/yV4x9Tc.jpg'}
									style={{
										height: '100%',
										width: '100%',
										objectFit: 'contain',
										objectPosition: 'center',
									}}
									className='img-fluid'
									alt='launch'
								/>
							</p>
						</Carousel.Item>
					</Carousel>
				</Col>
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
			</Row>
		</Container>
	);
};

export default Home;
