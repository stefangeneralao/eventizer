import React from 'react';
import ExhibitorContainer from './ExhibitorContainer';

// Component that displays the event information
class EventCard extends React.Component {
	getEventTitle() {
		return this.props.title;
	}

	getEventDescription() {
		return this.props.description;
	}

	getEventTime() {
		return this.props.time;
	}

	getEventDate() {
		return this.props.date;
	}

	// Function that returns a list of exhhibitor containers by looping the keys
	getEventExhibitors() {
		return Object.keys(this.props.exhibitorContainers).map((key, i) => {
				const exhibitors = this.props.exhibitorContainers[key];
        return (
					<ExhibitorContainer
						eventExhibitors={exhibitors}
						category={key}
						key={i}
					/>
				);
    });
	}

	render() {
		const eventTitle = this.getEventTitle();
		const eventDescription = this.getEventDescription();
		const eventTime = this.getEventTime();
		const eventDate = this.getEventDate();
		const eventExhibitors = this.getEventExhibitors();

		return (
			<div className="EventCard">
				<div className="EventCard__title">
					{eventTitle}
				</div>

				<div className="EventCard__date">
					{eventDate}
					</div>

				<div className="EventCard__description">
					{eventDescription}
				</div>

				<div className="EventCard__time">
					Kl:{eventTime}
				</div>

				<div>
					{eventExhibitors}
				</div>
			</div>
		);
	}
}

export default EventCard;
