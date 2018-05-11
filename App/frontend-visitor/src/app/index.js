import React from 'react';
import './index.css';
// import DateCard from './Components/DateCard';
import Main from './main';
import Footer from './footer';
import Header from './header';
import Store from './database-driver';
import Axios from 'axios';
import BreadCrumb from './breadcrumb'

// Application root component.
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			breadcrumb: "/",
			store: store
		};
	}

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
				{/*}<BreadCrumb />*/}
				<Main store={this.state.store} />
        <Footer />
			</div>
		);
	}
}
export default App;
