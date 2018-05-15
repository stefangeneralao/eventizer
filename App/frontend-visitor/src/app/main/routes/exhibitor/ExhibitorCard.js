import React from 'react';

//Component that renders a ExhibitorCard
class Exhibitor extends React.Component {
	render() {
		const imgURL = "/static/media/" + this.props.image;
		
		return (
			<div className="ExhibitorCard">
        <div className="ExhibitorCard__img">
          <p><img className="ExhibitorMiniatureImage" src={imgURL} alt="Exhibitor Image"/></p>
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
