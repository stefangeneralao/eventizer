import React from 'react';
import './index.css';
// import DateCard from './Components/DateCard';
import Main from './main';
import store from './database-driver';

const getStore = () => {
	return store;
}

const BreadCrumb = () => {
	return (
		<div>breadcrumb</div>
	);
}

// Main component.
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			breadcrumb: "/",
			store: getStore()
		};
	}

  render() {
    return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Eventizer</h1>
				</header>
				<BreadCrumb />
				<Main store={this.state.store}/>
			</div>
		);
  }
}

export default App;
