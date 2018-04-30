import React from 'react';
import ExhibitorMiniature from './ExhibitorMiniature';

class ExhibitorContainer extends React.Component {
	printExhibitors() {
    return this.props.eventExhibitors.map((eventExhibitor, i) => {
        return <ExhibitorMiniature
								image={eventExhibitor.img}
								label={eventExhibitor.label}
								description={eventExhibitor.description}
								key={i} />;
    });
  };
	render() {
		return (
			<div className="ExhibitorContainer">
				{this.props.category !== 'no-category' && <h4>{this.props.category}</h4>}
        {this.printExhibitors()}
      </div>
		);
	}
}

export default ExhibitorContainer;
