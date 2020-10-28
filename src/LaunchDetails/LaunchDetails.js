import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Carousel from 'react-bootstrap/Carousel';
import Moment from 'react-moment';

const LaunchDetails = ({ match }) => {
	const [launch, setLaunch] = useState('');
	let launchId = match.params.id;
	let url = `https://api.spacexdata.com/v4/launches/${launchId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setLaunch(res);
			});
	}, []);
	if (!launch) {
		return null;
	}

	return (
		<div className='launchDetailsContainer'>
			<div className='launchDetailsCard'>
				<div className='launchDetailsCard-image'>
					<img
						src={launch.links.patch.small}
						alt={`small ${launch.name} patch`}
						lt
					/>
				</div>
				<h3>Mission Name: {launch.name}</h3>
				<h3>
					Mission Date:{' '}
					<Moment parse='YYYY-MM-DD HH:mm'> {launch.date_utc}</Moment>
				</h3>
				<div className='launchDetailsCard-details'>
					<h4>Mission Details:</h4>
					<p>{launch.details}</p>
				</div>
				<div className='launchDetailsYT-player'>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
						controls={true}
					/>
				</div>
				{launch.links.flickr.original.length > 0 ? (
					<Carousel>
						{launch.links.flickr.original.map((pic) => {
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

export default LaunchDetails;
