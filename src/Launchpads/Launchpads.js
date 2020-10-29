import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

let launchPadsUrl = 'https://api.spacexdata.com/v4/launchpads';
const TotalLaunchPads = () => {
	const [launchPads, setLaunchPads] = useState([]);
	useEffect(() => {
		fetch(launchPadsUrl)
			.then((res) => res.json())
			.then((res) => {
				setLaunchPads(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);

	return (
		<div className='container'>
			{launchPads.map((launchpad) => {
				return (
					<Link to={`/launchpads/${launchpad.id}`} key={launchpad.id}>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{launchpad.name}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									Status:{' '}
									{launchpad.status.charAt(0).toUpperCase() +
										launchpad.status.slice(1)}
								</Card.Subtitle>
							</Card.Body>
						</Card>
					</Link>
				);
			})}
		</div>
	);
};

export default TotalLaunchPads;
