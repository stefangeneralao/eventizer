import React from 'react';
import { Link } from 'react-router-dom';

// Component that display exhibitor miniatures
class ExhibitorMiniature extends React.Component {
  render() {
    const onClickLink = '/exhibitor/' + this.props.id;

		return (
			<div className="ExhibitorMiniature">
				<p>
					<Link to={onClickLink}>
						<img
							className="ExhibitorMiniatureImage"
							src={'http://localhost:3001/get_image?imageurl=' + this.props.image}
							alt={this.props.label}
						/>
					</Link>
				</p>
				<p>
					<Link to={onClickLink}>{this.props.label}</Link>
				</p>
			</div>
		);
	}
}

export default ExhibitorMiniature;
