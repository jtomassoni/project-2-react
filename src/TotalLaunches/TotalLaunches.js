import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let launchesUrl = 'https://api.spacexdata.com/v4/launches';
const TotalLaunches = () => {
	const [launches, setLaunches] = useState([]);
	useEffect(() => {
		fetch(launchesUrl)
			.then((res) => res.json())
			.then((res) => {
				setLaunches(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);

	return (
		<div className='container'>
			{launches.map((launch) => {
				return (
					<Link to={`/launches/${launch.id}`} key={launch.id}>
						<div className='card'>
							<div className='card-image'>
								{!launch.links.patch.small ? (
									<img
										src={process.env.PUBLIC_URL + '/no_image_found.png'}
										alt='not found'
									/>
								) : (
									<img
										src={launch.links.patch.small}
										className='img-thumbnail'
										alt={`small ${launch.name} patch`}
									/>
								)}
							</div>
							<h3>{launch.name}</h3>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default TotalLaunches;
