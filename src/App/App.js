import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Latest from '../Latest/Latest';
import Launches from '../Launches/Launches';
import LaunchDetails from '../LaunchDetails/LaunchDetails';
import Launchpads from '../Launchpads/Launchpads';
import LaunchpadDetails from '../LaunchPPPadDetails/LaunchPPPadDetails';
import Ships from '../Ships/Ships';
import ShipDetails from '../ShipDetails/ShipDetails';
import Crew from '../Crew/Crew';
import Rockets from '../Rockets/Rockets';
import Landpads from '../Landpads/Landpads';
import LandpadDetails from '../LandpadDetails/LandpadDetails';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />

			<Route path='/launches' exact component={Launches} />
			<Route
				path='/launches/:id'
				render={(routerProps) => {
					return <LaunchDetails match={routerProps.match} />;
				}}
			/>
			<Route path='/launchpads' exact component={Launchpads} />
			<Route
				path='/launchpads/:id'
				render={(routerProps) => {
					return <LaunchpadDetails match={routerProps.match} />;
				}}
			/>
			<Route path='/ships' exact component={Ships} />
			<Route
				path='/ships/:id'
				render={(routerProps) => {
					return <ShipDetails match={routerProps.match} />;
				}}
			/>
			<Route path='/landpads' exact component={Landpads} />
			<Route
				path='/landpads/:id'
				render={(routerProps) => {
					return <LandpadDetails match={routerProps.match} />;
				}}
			/>
			<Route path='/crew' exact component={Crew} />
			<Route path='/rockets' exact component={Rockets} />
			<Route path='/latest' component={Latest} />
			<Route path='/' exact render={() => <Redirect to='/latest' />} />
			{/* hello */}
		</div>
	);
}

export default App;
