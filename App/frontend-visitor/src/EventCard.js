import React from 'react';

<<<<<<< HEAD

class EventCard extends React.Component {



=======
//Component for EventCard.
class EventCard extends Component {
>>>>>>> a5394a9e683fbd83c86ef7a47028ff5cfb8b8951
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
