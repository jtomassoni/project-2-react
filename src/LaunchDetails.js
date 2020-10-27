import React, { useState, useEffect } from 'react';

const LaunchDetails = ({ match }) => {
	const [launch, setLaunch] = useState('');
	let launchId = match.params.id;
	let url = `https://api.spacexdata.com/v4/launches/${launchId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setLaunch(res);
				console.log(launch);
			});
	}, []);
	if (!launch) {
		return null;
	}

	return (
		<div className='container'>
			<div className='card'>
				<div className='card-image'>
					<img src={launch.links.patch.small} alt={launch.name} />
				</div>
				<h3>{launch.name}</h3>
				<h4>{launch.links.youtube_id}</h4>
				<p>{launch.details}</p>
			</div>
		</div>
	);
};

export default LaunchDetails;
