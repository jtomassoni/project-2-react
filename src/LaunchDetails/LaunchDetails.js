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
			})
			.catch((error) => alert('API Fetch Error'));
		//eslint-disable-next-line
	}, []);
	if (!launch) {
		return null;
	}

	return (
		<div className='detailsContainer'>
			<div className='detailsPatchImage'>
				{launch.links.patch.small !== null ? (
					<img
						src={launch.links.patch.small}
						alt={`small ${launch.name} patch`}
					/>
				) : (
					<>
						<img
							src={process.env.PUBLIC_URL + '/no_image_found.png'}
							alt={launch.name}
						/>
						<p>There are no patches to display</p>
					</>
				)}
			</div>
			<div className='detailsMissionInfo'>
				<h3>Mission Name: {launch.name}</h3>
				<h3>
					Mission Date:{' '}
					<Moment parse='YYYY-MM-DD HH:mm'> {launch.date_utc}</Moment>
				</h3>
			</div>
			<div className='detailsCardDetails'>
				<h4>Mission Details:</h4>
				{launch.details !== null ? (
					<p>{launch.details}</p>
				) : (
					<p>There are no launch details to display.</p>
				)}
			</div>
			<div className='detailsYTPlayer'>
				{launch.links.youtube_id !== null ? (
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
						controls={true}
					/>
				) : (
					<>
						<img
							src={process.env.PUBLIC_URL + '/no_image_found.png'}
							alt={launch.name}
						/>
						<p>There are no videos to display</p>
					</>
				)}
			</div>
			<div className='detailsPhotoCarousel'>
				{launch.links.flickr.original.length > 0 ? (
					<Carousel>
						{launch.links.flickr.original.map((pic) => {
							return (
								<Carousel.Item key={pic}>
									<img src={pic} className='img-fluid' alt='launch' />
								</Carousel.Item>
							);
						})}
					</Carousel>
				) : (
					<>
						<img
							src={process.env.PUBLIC_URL + '/no_image_found.png'}
							alt={launch.name}
						/>
						<p>There are no photos to display</p>
					</>
				)}
			</div>
			{/* <div className='detailsVehiclesUsed'>
				{launch.ships.map(())}
			</div> */}
		</div>
	);
};

export default LaunchDetails;
