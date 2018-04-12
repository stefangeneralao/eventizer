import React from 'react';

//Component for EventCard.
class EventCard extends Component {
	render() {
		return (
			<div className="EventCard">
				<div className="EventCard__header">
					<div className="EventCard__name">
						{this.props.name}
					</div>
					<div className="EventCard__position">
						{this.props.position}
					</div>
				</div>
				<div className="EventCard__description">
					{this.props.description}
				</div>
			</div>
		);
	}
}

export default EventCard;
