import React from 'react';
import { Link } from 'react-router-dom';

//Component that display exhibitor miniatures.
class ExhibitorMiniature extends React.Component {

	render() {
		const onClickLink = "/exhibitor/" + this.props.label;

		return (
			<div>
				<p><Link to={onClickLink}>{this.props.label}</Link></p>
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default ExhibitorMiniature;
