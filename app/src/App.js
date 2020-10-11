import React from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
	const history = createBrowserHistory();

  	return (
		<Router history={history}>
			<div>
				<Route
					path="/dashboard"
					exact
					component={Dashboard}
				/>
				<Route
					path="/"
					exact
					component={Login}
				/>
			</div>
		</Router>
	);
}

export default App;
