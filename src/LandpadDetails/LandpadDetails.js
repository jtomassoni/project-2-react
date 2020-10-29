import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const LandpadDetails = ({ match }) => {
	const [landpad, setLandpad] = useState('');
	let landpadId = match.params.id;
	let url = `https://api.spacexdata.com/v4/landpads/${landpadId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setLandpad(res);
			})
			.catch((error) => alert('API Fetch Error'));
		//eslint-disable-next-line
	}, []);
	if (!landpad) {
		return null;
	}

	return (
		<div className='detailsContainer'>
			<div className='detailsCard'>
				<h2>Landpad Name: {landpad.name}</h2>
				<h3>
					<em>Full Name: {landpad.full_name}</em>
				</h3>
				<h3>
					Location: {landpad.latitude},{landpad.longitude}
				</h3>
				<p>{landpad.details}</p>
				<h3>
					Status:{' '}
					{landpad.status.charAt(0).toUpperCase() + landpad.status.slice(1)}
				</h3>
				<Accordion>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								Launches
							</Accordion.Toggle>
						</Card.Header>
						{landpad.launches.map((launch) => {
							return (
								<Accordion.Collapse eventKey='0'>
									<Card.Body>
										<ul>
											<Link to={`/launches/${launch}`}>
												<li>{launch}</li>
											</Link>
										</ul>
									</Card.Body>
								</Accordion.Collapse>
							);
						})}
					</Card>
				</Accordion>
			</div>
		</div>
	);
};

export default LandpadDetails;
