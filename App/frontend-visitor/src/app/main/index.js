import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './routes/root';
import Event from './routes/event';
import Exhibitor from './routes/exhibitor';
import RegisterForm from './routes/registerform';

const notFoundComponent = () => {
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

	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={this.getRoot} />
					<Route path="/event" component={Event} />
					<Route path="/exhibitor" component={Exhibitor} />
					<Route path="/registerform" component={RegisterForm} />
					<Route component={notFoundComponent} />
				</Switch>
			</main>
		);
	}
}

export default Main;
