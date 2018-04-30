import React from 'react';
import { Link } from 'react-router-dom';

//Component that display exhibitor miniatures.
class ExhibitorMiniature extends React.Component {

	render() {
		const onClickLink = "/exhibitor/" + this.props.label;

		return (
			<div className="ExhibitorMiniature">
				<p>{this.props.img}</p>
				<p><Link to={onClickLink}>{this.props.label}</Link></p>
			</div>
		);
	}
}

export default ExhibitorMiniature;
