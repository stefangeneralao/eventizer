import React from 'react';
import EventCard from './EventCard';

// This component renders the EventCards
class Event extends React.Component {

	// Fetches EventId from browser URL
	getEventIdFromURL() {
		let eventId = document.URL;
		eventId = eventId.split('/')
		eventId = eventId[eventId.length - 1];
		return eventId;
	}

	// Matches the URL with the right event and returns event data
	getEventData() {
		const eventId = this.getEventIdFromURL();
		const dates = this.props.store.dates;

		for(let i in dates) {
			const eventListItem = dates[i]['events'];

			for(let j in eventListItem) {
				const eventLabel = eventListItem[j]['label'];
				const encodedEventLabel = encodeURIComponent(eventLabel.trim())
				if(eventId === encodedEventLabel) {
					const title = eventLabel;
					const description = eventListItem[j]['description'];
					const date = dates[i]['date'];
					const time = eventListItem[j]['time'];
					const eventData = {
						'title': title,
						'description': description,
						'date': date,
						'time': time
					}
					return eventData;
				}
			}
		}

		return dates;
	}

	render() {
		const eventData = this.getEventData();
		return (
			<EventCard
				title={eventData.title}
				description={eventData.description}
				date={eventData.date}
				time={eventData.time}
			/>
		);
	}
}

export default Event;
