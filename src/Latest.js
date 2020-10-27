import React, { useState, useEffect } from 'react';

const LatestLaunch = () => {
	const [launch, setLaunch] = useState();
	useEffect(() => {
		let latestUrl = 'https://api.spacexdata.com/v4/launches/latest';
		fetch(latestUrl)
			.then((res) => res.json())
			.then((res) => {
				setLaunch(res);
			})
			.catch(console.error);
	}, []);
	if (!launch) {
		return null;
	}
	return (
		<div className='container'>
			<div className='card'>
				<div className='card-image'>
					<img src={launch.links.patch.small} />
				</div>
				<h3>{launch.name}</h3>
				<h4>{launch.links.youtube_id}</h4>
				<p>{launch.details}</p>
			</div>
		</div>
	);
};

export default LatestLaunch;
