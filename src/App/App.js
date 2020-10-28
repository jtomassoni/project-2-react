import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Latest from '../Latest/Latest';
import TotalLaunches from '../TotalLaunches/TotalLaunches';
import TotalLaunchPads from '../TotalLaunchPads/TotalLaunchPads';
import LaunchPadDetails from '../LaunchPadDetails/LaunchPadDetails';
import TotalShips from '../TotalShips/TotalShips';
import ShipDetails from '../ShipDetails/ShipDetails';
import LaunchDetails from '../LaunchDetails/LaunchDetails';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />

			<Route path='/launches' exact component={TotalLaunches} />
			<Route
				path='/launches/:id'
				render={(routerProps) => {
					return <LaunchDetails match={routerProps.match} />;
				}}
			/>
			<Route path='/launchpads' exact component={TotalLaunchPads} />
			<Route
				path='/launchpads/:id'
				render={(routerProps) => {
					return <LaunchPadDetails match={routerProps.match} />;
				}}
			/>
			<Route path='/ships' exact component={TotalShips} />
			<Route
				path='/ships/:id'
				render={(routerProps) => {
					return <ShipDetails match={routerProps.match} />;
				}}
			/>
			<Route path='/latest' component={Latest} />
			<Route path='/' exact render={() => <Redirect to='/latest' />} />
		</div>
	);
}

export default App;
