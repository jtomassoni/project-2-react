import React, { useState, useEffect } from 'react';

const LaunchPadDetails = ({ match }) => {
	const [launchpad, setLaunchpad] = useState('');
	let launchPadId = match.params.id;
	let url = `https://api.spacexdata.com/v4/launchpads/${launchPadId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setLaunchpad(res);
			});
	}, []);
	if (!launchpad) {
		return null;
	}

	return (
		<div className='DetailsContainer'>
			<div className='DetailsCard'>
				<h2>Launchpad Name: {launchpad.name}</h2>
				<h3>
					<em>Full Name: {launchpad.full_name}</em>
				</h3>
				<h3>
					Location: {launchpad.latitude},{launchpad.longitude}
				</h3>
				<h3>Status:{launchpad.status}</h3>
				<h3>Number of Attempts: {launchpad.launch_attempts}</h3>
				<h3>
					Rockets:{' '}
					{launchpad.rockets.map((rocket) => {
						return (
							<ul>
								<li>{rocket}</li>
							</ul>
						);
					})}
				</h3>
				<h3>
					Launches:{' '}
					{launchpad.launches.map((launch) => {
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

export default LaunchPadDetails;
