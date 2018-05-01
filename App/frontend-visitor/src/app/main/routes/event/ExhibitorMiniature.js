import React from 'react';
import { Link } from 'react-router-dom';

//Component that display exhibitor miniatures.
class ExhibitorMiniature extends React.Component {

	render() {
		const onClickLink = "/exhibitor/" + this.props.id;

		return (
			<div className="ExhibitorMiniature">
				<p><img src="https://picsum.photos/200/200/?random" alt="test"/></p>
				<p><Link to={onClickLink}>{this.props.label}</Link></p>
			</div>
		);
	}
}

export default ExhibitorMiniature;
