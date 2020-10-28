import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
		// eslint-disable-next-line;
	}, []);
	if (!launchpad) {
		return null;
	}

	return (
		<div className='detailsContainer'>
			<div className='detailsCard'>
				<h2>Launchpad Name: {launchpad.name}</h2>
				<h3>
					<em>Full Name: {launchpad.full_name}</em>
				</h3>
				<h3>
					Location: {launchpad.latitude},{launchpad.longitude}
				</h3>
				<p>{launchpad.details}</p>
				<h3>
					Status:{' '}
					{launchpad.status.charAt(0).toUpperCase() + launchpad.status.slice(1)}
				</h3>
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

export default LaunchPadDetails;
