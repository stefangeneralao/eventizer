import React from 'react';

//Component for EventCard.
class EventCard extends React.Component {
	// render() {
	// 	return (
	// 		<div className="EventCard">
	// 			<div className="EventCard__header">
	// 				<div className="EventCard__name">
	// 					{this.props.name}
	// 				</div>
	// 				<div className="EventCard__position">
	// 					{this.props.position}
	// 				</div>
	// 			</div>
	// 			<div className="EventCard__description">
	// 				{this.props.description}
	// 			</div>
	// 		</div>
	// 	);
	// }

	render() {
		console.log('props in EventCard', this.props);

		return null;
	}
}

export default EventCard;
