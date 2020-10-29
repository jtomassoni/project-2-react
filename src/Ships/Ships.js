import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let shipsUrl = 'https://api.spacexdata.com/v4/ships';
const TotalShips = () => {
	const [ships, setShips] = useState([]);
	useEffect(() => {
		fetch(shipsUrl)
			.then((res) => res.json())
			.then((res) => {
				setShips(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);

	return (
		<div className='container'>
			{ships.map((ship) => {
				return (
					<Link to={`/ships/${ship.id}`} key={ship.id}>
						<div className='card'>
							<h3>{ship.name}</h3>
							<div className='card-image'>
								{!ship.image ? (
									<img
										src={process.env.PUBLIC_URL + '/no_image_found.png'}
										alt='not found'
									/>
								) : (
									<img
										src={ship.image}
										className='img-thumbnail'
										alt={ship.name}
									/>
								)}
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default TotalShips;
