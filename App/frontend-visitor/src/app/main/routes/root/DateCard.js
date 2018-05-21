import React from 'react';
import EventContainer from './EventContainer';
import ImageComponent from './ImageComponent';

// Component that renders DateCard with image carousel, date and event information
class DateCard extends React.Component {
	getEventImages() {
		const imageIds = this.props.events.map((event) => {
			return {
				imageID: event.imgID,
				eventLabel: event.label
			};
		});
		return imageIds;
	}

	getDate() {
		const date = this.props.date;
		return (
			<div className="DateCard__date">
				{date}
			</div>
		);
	}

	getEventData() {
		const EventData = this.props.events;
		return EventData;
	}

	render() {
		return (
			<div className="DateCard">
				{this.getDate()}
				<ImageComponent imageID={this.getEventImages()} />
				<EventContainer events={this.getEventData()} />
			</div>
		);
	}
}

export default DateCard;
