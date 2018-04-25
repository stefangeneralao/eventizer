import React from 'react';
import ExhibitorMiniature from './ExhibitorMiniature';

class ExhibitorContainer extends React.Component {
	printExhibitors() {
    return this.props.eventExhibitors.map((eventExhibitor, i) => {
        return <ExhibitorMiniature image={eventExhibitor.img} titel={eventExhibitor.titel} key={i} />;
    });
  };
	render() {
		return (
			<div className="ExhibitorContainer">
        {this.printExhibitors()}
      </div>
		);
	}
}

export default ExhibitorContainer;
