import React from 'react';
import home from './icons/home.svg';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Header component
class Header extends React.Component {
	// Handler function for home button
	onHomeBtnClick() {
		this.props.history.push('/');
	}

	// Creates home button
	getHomeBtn() {
		let className = 'HomeBtn';
		if(this.props.location.pathname === '/') {
			className = className + ' closed';
		} else {
			className = className + ' open';
		}

		return (
			<img
				src={home}
				alt="home"
				className={className}
				onClick={() => {this.onHomeBtnClick()}}
			/>
		);
	}

	render() {
		const onClickLink = "/";

		return (
			<header className="App-header">
				{this.getHomeBtn()}
				<h1 className="App-title">
					<Link to={onClickLink}>Eventizer</Link>
				</h1>
			</header>
    );
  }
}

export default withRouter(Header);
