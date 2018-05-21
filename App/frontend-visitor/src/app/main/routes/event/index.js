import React from 'react';
import EventCard from './EventCard';

// This component renders the EventCards
class Event extends React.Component {
	// Fetches EventId from browser URL
	getEventIdFromURL() {
		let eventId = document.URL;
		eventId = eventId.split('/');
		eventId = eventId[eventId.length - 1];
		return eventId;
	}

	// Function that groups exhibitors by category
	// Uses the reduce method to loop the exhibitors and grouping them by category
	getGroupedExhibitors(exhibitors) {
    return exhibitors.reduce((obj, exhibitor) => {
			var key = exhibitor.category || 'no-category';
			obj[key] = obj[key] || [];
      obj[key].push(exhibitor);
      return obj;
		}, Object.create(null));
	}

	// Matches the URL with the right event and returns event data
	getEventData() {
		const eventId = this.getEventIdFromURL();
		const dates = this.props.store.dates;

		// Loops every date to get the events
		for(let i in dates) {
			const eventListItem = dates[i]['events'];

			// Loops every event until eventId in URL matches an event and returns the right event
			for(let j in eventListItem) {
				const eventLabel = eventListItem[j]['label'];
				const encodedEventLabel = encodeURIComponent(eventLabel.trim());
				if(eventId === encodedEventLabel) {
					const title = eventLabel;
					const description = eventListItem[j]['description'];
					const date = dates[i]['date'];
					const time = eventListItem[j]['time'];
					const exhibitors = eventListItem[j]['exhibitors'];
					const eventData = {
						'title': title,
						'description': description,
						'date': date,
						'time': time,
						'exhibitorContainers': this.getGroupedExhibitors(exhibitors)
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
				exhibitorContainers={eventData.exhibitorContainers}
			/>
		);
	}
}

export default Event;
