import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'; //coderocketfuel, how to embed a YT video and githib.com/cookpete/react-player
import Carousel from 'react-bootstrap/Carousel';
import Moment from 'react-moment';

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
		<div className='latestContainer'>
			<div className='latestCard'>
				<h1>Most Recent Mission:</h1>
				<div className='latestCard-image'>
					<img
						src={launch.links.patch.small}
						alt={`small ${launch.name} patch`}
					/>
				</div>
				<h3>Mission Name: {launch.name}</h3>
				<h3>
					Mission Date:{' '}
					<Moment parse='YYYY-MM-DD HH:mm'> {launch.date_utc}</Moment>
				</h3>
				<div className='latestCard-details'>
					<h4>Mission Details:</h4>
					<p>{launch.details}</p>
				</div>
				<div className='LatestYT-player'>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
						controls={true}
					/>
				</div>
				{launch.links.flickr.small.length > 0 ? (
					<Carousel>
						{launch.links.flickr.small.map((pic) => {
							return (
								<Carousel.Item>
									<img src={pic} alt='launch' />
								</Carousel.Item>
							);
						})}
					</Carousel>
				) : (
					'There are no photos to display'
				)}
			</div>
		</div>
	);
};

export default LatestLaunch;
