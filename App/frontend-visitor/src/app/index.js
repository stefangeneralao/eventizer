import React from 'react';
import './index.css';
// import DateCard from './Components/DateCard';
import Main from './main';
import store from './database-driver';

const BreadCrumb = () => {
	return (
		<div>breadcrumb</div>
	);
}

// Application root component.
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			breadcrumb: "/"
		};
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Eventizer</h1>
				</header>
				<BreadCrumb />
				<Main store={store} />
			</div>
		);
	}
}

export default App;
