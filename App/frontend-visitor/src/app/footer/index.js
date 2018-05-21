import React from 'react';

// Footer with information and function that keeps the copyright year updated.
class Footer extends React.Component {
	getYear() {
		return new Date().getFullYear();
	}

	render() {
		return (
			<div className="Footer">
				<footer className="App-footer">
					<div>
						<p>Copyright © {this.getYear()} Eventizer</p>
						<p>All rights reserved</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
