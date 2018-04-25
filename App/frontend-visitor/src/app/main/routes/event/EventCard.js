import React from 'react';

//Component for EventCard.
class EventCard extends React.Component {
	getEventTitle() {
		return this.props.title;
	}

	getEventDescription() {
		return this.props.title;
	}

	getEventTime() {
		return this.props.time;
	}

	getEventDate() {
		return this.props.date;
	}

	getEventExhibitors() {
		// Hej Ellen. Denna ska returnera en lista med massa små eventExhibitors.
		// Kör en sån map-funktion-grej som du gjorde någonstans.
		return "";
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
