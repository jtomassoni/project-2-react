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
			.catch(console.error);
	}, []);

	return (
		<div className='container'>
			{ships.map((ship) => {
				return (
					<Link to={`/ships/${ship.id}`} key={ship.id}>
						<div className='card'>
							<h3>{ship.name}</h3>
							<img src={ship.image} alt={ship.name} />
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default TotalShips;
