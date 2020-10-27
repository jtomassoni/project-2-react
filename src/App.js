import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import LaunchDetails from './LaunchDetails';
import TotalLaunches from './TotalLaunches';
import Latest from './Latest';

function App() {
	return (
		<div className='App'>
			<Header />
			<Route path='/all-launches' component={TotalLaunches} />
			<Route path='/launch/:id' render={(routerProps)=>{
				return (
					<LaunchDetails match={routerProps.match} />
				)
			}} />
			<Route path='/latest' component={Latest} />
			<Route path='/' exact render={() => <Redirect to='/latest' />} />
		</div>
	);
}

export default App;
