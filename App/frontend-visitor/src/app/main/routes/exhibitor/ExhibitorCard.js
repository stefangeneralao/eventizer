import React from 'react';
import axios from 'axios';

// Component that renders a ExhibitorCard
class Exhibitor extends React.Component {
	render() {
		return (
			<div className="ExhibitorCard">
        <div className="ExhibitorCard__img">
          <p>
						<img
  						className="ExhibitorMiniatureImage"
  						src={'http://35.176.156.147:3001/get_image?imageurl=' + this.props.image}
  						alt={this.props.label}
						/>
					</p>
        </div>
        <div className="ExhibitorCard__label">
          {this.props.label}
        </div>
        <div className="ExhibitorCard__date">
          {this.props.date}
        </div>
        <div className="ExhibitorCard__time">
          Kl: {this.props.time}
        </div>
        <div className="ExhibitorCard__description">
          {this.props.description}
        </div>
      </div>
		);
	}
}

export default Exhibitor;
