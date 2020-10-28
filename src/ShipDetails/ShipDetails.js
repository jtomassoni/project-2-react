import React, { useState, useEffect } from 'react';

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
	}, []);
	if (!ship) {
		return null;
	}

	return (
		<div className='DetailsContainer'>
			<div className='DetailsCard'>
				<h2>Ship Name: {ship.name}</h2>
				<h4>More Info: {ship.link}</h4>
				<img src={ship.image} alt={ship.name} />
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
								<li>{launch}</li>
							</ul>
						);
					})}
				</h3>
			</div>
		</div>
	);
};

export default ShipDetails;
