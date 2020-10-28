import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShipDetails = ({ match }) => {
	const [ship, setShips] = useState('');
	let shipId = match.params.id;
	let url = `https://api.spacexdata.com/v4/ships/${shipId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setShips(res);
			});
		//eslint-disable-next-line
	}, []);
	if (!ship) {
		return null;
	}

	return (
		<div className='detailsContainer'>
			<div className='detailsCard'>
				<h2>Ship Name: {ship.name}</h2>
				<h4>Status: {ship.active ? 'Active' : 'Retired'}</h4>
				{ship.link ? (
					<h4>
						<a href={ship.link}>More Info on {ship.name}</a>
					</h4>
				) : null}
				{ship.image ? (
					<img src={ship.image} className='img-thumbnail' alt={ship.name} />
				) : (
					<>
						<img
							src={process.env.PUBLIC_URL + '/no_image_found.png'}
							alt='not found'
						/>
						<p>There are no images of this ship.</p>
					</>
				)}
				<h3>
					SpaceX Roles:{' '}
					{ship.roles.map((role) => {
						return (
							<ul>
								<li>{role}</li>
							</ul>
						);
					})}
				</h3>
				<h3>
					Launch Missions:
					{ship.launches.map((launch) => {
						return (
							<ul>
								<Link to={`/launches/${launch}`}>
									<li>{launch}</li>
								</Link>
							</ul>
						);
					})}
				</h3>
			</div>
		</div>
	);
};

export default ShipDetails;
