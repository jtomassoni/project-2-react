import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TotalLaunches.css';

let launchesUrl = 'https://api.spacexdata.com/v4/launches';
const TotalLaunches = () => {
	const [launches, setLaunches] = useState([]);
	useEffect(() => {
		fetch(launchesUrl)
			.then((res) => res.json())
			.then((res) => {
				setLaunches(res);
			})
			.catch(console.error);
	}, []);

	return (
		<div className='container'>
			{launches.map((launch) => {
				return (
					<Link to={`/launches/${launch.id}`} key={launch.id}>
						<div className='card'>
							<div className='card=image'>
								<img
									src={launch.links.patch.small}
									alt={`small ${launch.name} patch`}
								/>
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
