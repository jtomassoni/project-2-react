import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

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
					<img src={launch.links.patch.small} />
				</div>
				<h3>Mission Name: {launch.name}</h3>
				<h3>Mission Date: {launch.date_utc}</h3>{' '}
				<div className='card-details'>
					<h4>Mission Details:</h4>
					<p>{launch.details}</p>
				</div>
				<div className='photoGallery'>
					<img src={launch.links.flickr.original[0]} />
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

export default LaunchDetails;
