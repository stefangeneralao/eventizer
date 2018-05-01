import React from 'react';

class Exhibitor extends React.Component {
	render() {
		return (
			<div className="ExhibitorCard">
        <div className="ExhibitorCard__img">
          <p><img src="https://picsum.photos/700/300/?random" alt="test"/></p>
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
