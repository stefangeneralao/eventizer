import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './routes/root';
import Event from './routes/event';
import Exhibitor from './routes/exhibitor';
import RegisterForm from './routes/registerform';

const getNotFoundComponent = () => {
	return (
		<div>
			not found
		</div>
	);
}

class Main extends React.Component {
	constructor() {
		super();
		this.getRoot = this.getRoot.bind(this);
	}

	getRoot() {
		return (
			<Root store={this.props.store}/>
		);
	}

	getEvent() {
		return (
			<Event />
		);
	}

	getExhibitor() {
		return (
			<Exhibitor />
		);
	}

	getRegisterForm() {
		return (
			<RegisterForm />
		);
	}

	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={this.getRoot} />
					<Route path="/event" component={this.getEvent} />
					<Route path="/exhibitor" component={this.getExhibitor} />
					<Route path="/registerform" component={this.getRegisterForm} />
					<Route component={getNotFoundComponent} />
				</Switch>
			</main>
		);
	}
}

export default Main;
