import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

let launchesUrl = 'https://api.spacexdata.com/v4/launches';

const Launches = () => {
	const [launches, setLaunches] = useState([]);
	useEffect(() => {
		fetch(launchesUrl)
			.then((res) => res.json())
			.then((res) => {
				setLaunches(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);

	return (
		<>
			<div className='sortButtons'>
				<Button variant='dark'>Most Recent First</Button>
				<Button variant='dark'>Oldest First</Button>
			</div>
			<div className='container'>
				{launches.map((launch) => {
					return (
						<Link to={`/launches/${launch.id}`} key={launch.id}>
							<Card style={{ width: '18rem' }}>
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
									<Card.Title>{launch.name}</Card.Title>
								</Card.Body>
							</Card>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Launches;
