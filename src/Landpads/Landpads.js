import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

let landpadsUrl = 'https://api.spacexdata.com/v4/landpads';
const Crew = () => {
	const [landpads, setLandpads] = useState([]);
	useEffect(() => {
		fetch(landpadsUrl)
			.then((res) => res.json())
			.then((res) => {
				setLandpads(res);
			})
			.catch((error) => alert('API Fetch Error'));
	}, []);

	return (
		<div className='container'>
			{landpads.map((landpad) => {
				return (
					<Link to={`/landpads/${landpad.id}`}>
						<Card style={{ width: '18rem' }} key={landpad.id}>
							<Card.Body>
								<Card.Title>{landpad.full_name}</Card.Title>
							</Card.Body>
						</Card>
					</Link>
				);
			})}
		</div>
	);
};

export default Crew;
