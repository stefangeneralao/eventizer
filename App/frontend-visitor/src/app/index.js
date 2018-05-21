import React from 'react';
import './index.css';
import Main from './main';
import Footer from './footer';
import Header from './header';
import store from './database-driver';
import axios from 'axios';

// Application root component.
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			breadcrumb: "/",
			store: store
		};
	}

	// Component that fetch data from database and update state.
	componentDidMount() {
		axios.get('http://localhost:3001/get_store')
			.then(res => {
				return res.data
			})
			.then(data => {
				this.setState({store: data})
			});
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<Header />
				<Main store={this.state.store} />
				<Footer />
			</div>
		);
	}
}
export default App;
