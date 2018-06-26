import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import Contacts from './Contacts';

export default class Main extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/calendar' component={Calendar}/>
					<Route path='/contacts' component={Contacts}/>
				</Switch>
			</main>
		)
	}
}