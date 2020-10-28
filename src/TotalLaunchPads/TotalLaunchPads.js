import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

let launchPadsUrl = 'https://api.spacexdata.com/v4/launchpads';
const TotalLaunchPads = () => {
	const [launchPads, setLaunchPads] = useState([]);
	useEffect(() => {
		fetch(launchPadsUrl)
			.then((res) => res.json())
			.then((res) => {
				setLaunchPads(res);
			})
			.catch(console.error);
	}, []);

	return (
		<div className='container'>
			{launchPads.map((launchpad) => {
				return (
					<Link to={`/launchpads/${launchpad.id}`} key={launchpad.id}>
						<div className='card'>
							<h3>{launchpad.name}</h3>
							<h5>Status: {launchpad.status}</h5>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default TotalLaunchPads;
