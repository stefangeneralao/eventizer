import React from 'react';

class ExhibitorMiniature extends React.Component {

	render() {
		return (
			<div>
				<p>{this.props.label}</p>
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default ExhibitorMiniature;
