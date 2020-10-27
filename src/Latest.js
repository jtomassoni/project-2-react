import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'; //coderocketfuel, how to embed a YT video and githib.com/cookpete/react-player
import './Latest.css';

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
				<h1>Most Recent Mission:</h1>
				<div className='card-image'>
					<img src={launch.links.patch.small} />
				</div>
				<h3>Mission Name: {launch.name}</h3>
				<h3>Mission Date: {launch.date_utc}</h3>
				<div className='card-details'>
					<h4>Mission Details:</h4>
					<p>{launch.details}</p>
				</div>
				<div className='yt-player'>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
						controls={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default LatestLaunch;
