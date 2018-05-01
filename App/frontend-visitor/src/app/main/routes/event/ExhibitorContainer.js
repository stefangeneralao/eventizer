import React from 'react';
import ExhibitorMiniature from './ExhibitorMiniature';

//Component that prints Exhibitors.
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

	//Exhibitors that does not have category does not need a header.
	render() {
		return (
			<div className="ExhibitorContainer">
				{this.props.category !== 'no-category' && <h4>{this.props.category}</h4>}
				<div className="ExhibitorContainer__ExhibitorGrid">
        	{this.printExhibitors()}
				</div>
      </div>
		);
	}
}

export default ExhibitorContainer;
