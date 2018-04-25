import React from 'react';
import ExhibitorContainer from './ExhibitorContainer';

//Component that displays the event information.
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

	getEventExhibitors() {
		return this.props.exhibitorContainers.map((exhibitorContainer, i) => {
        return <ExhibitorContainer eventExhibitors={exhibitorContainer.eventExhibitors} key={i} />;
    });
	}

	render() {
		const eventTitle = this.getEventTitle();
		const eventDescription = this.getEventDescription();
		const eventTime = this.getEventTime();
		const eventDate = this.getEventDate();
		const eventExhibitors = this.getEventExhibitors();

		return (
			<div>
				<div>
					{eventTitle}
				</div>

				<div>
					{eventDescription}
				</div>

				<div>
					{eventTime}
				</div>

				<div>
					{eventDate}
				</div>

				<div>
					{eventExhibitors}
				</div>
			</div>
		);
	}
}

export default EventCard;
