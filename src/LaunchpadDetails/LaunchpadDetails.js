import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const LaunchpadDetails = ({ match }) => {
	const [launchpad, setLaunchpad] = useState('');
	let launchPadId = match.params.id;
	let url = `https://api.spacexdata.com/v4/launchpads/${launchPadId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setLaunchpad(res);
			})
			.catch((error) => alert('API Fetch Error'));
		//eslint-disable-next-line
	}, []);
	if (!launchpad) {
		return null;
	}

	return (
		<div className='detailsContainer'>
			<div className='detailsCard'>
				<h2>Launchpad Name: {launchpad.name}</h2>
				<h3>
					<em>Full Name: {launchpad.full_name}</em>
				</h3>
				<h3>
					Location: {launchpad.latitude},{launchpad.longitude}
				</h3>
				<p>{launchpad.details}</p>
				<h3>
					Status:{' '}
					{launchpad.status.charAt(0).toUpperCase() + launchpad.status.slice(1)}
				</h3>
				<h3>Number of Attempts: {launchpad.launch_attempts}</h3>
				<Accordion>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								Rockets
							</Accordion.Toggle>
						</Card.Header>
						{launchpad.rockets.map((rocket) => {
							return (
								<Accordion.Collapse eventKey='0'>
									<Card.Body>
										<ul>
											<Link to={`/launches/${rocket}`}>
												<li>{rocket}</li>
											</Link>
										</ul>
									</Card.Body>
								</Accordion.Collapse>
							);
						})}
					</Card>
				</Accordion>
				<Accordion>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								Launches
							</Accordion.Toggle>
						</Card.Header>
						{launchpad.launches.map((launch) => {
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

export default LaunchpadDetails;
