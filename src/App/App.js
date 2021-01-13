import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Latest from '../Latest/Latest';
import Launches from '../Launches/Launches';
import LaunchDetails from '../LaunchDetails/LaunchDetails';
import Launchpads from '../Launchpads/Launchpads';
import LaunchpadDetails from '../LaunchpadDetails/LaunchpadDetails';
import Ships from '../Ships/Ships';
import ShipDetails from '../ShipDetails/ShipDetails';
import Crew from '../Crew/Crew';
import Rockets from '../Rockets/Rockets';
import Landpads from '../Landpads/Landpads';
import LandpadDetails from '../LandpadDetails/LandpadDetails';
import Roadster from '../Roadster/Roadster';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

function App() {
	return (
		<>
			<Header />
			<Container
				fluid
				style={{
					color: 'white',
					backgroundImage: `url("https://i.imgur.com/wZoyIyI.png")`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
					height: '90%',
				}}>
				<Route path='/latest' exact component={Latest} />
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
				<Route path='/roadster' exact component={Roadster} />
				<Route path='/crew' exact component={Crew} />
				<Route path='/rockets' exact component={Rockets} />
				<Route path='/home' exact component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
			</Container>
			<Footer />
		</>
	);
}

export default App;
