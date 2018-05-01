import React from 'react';
import EventContainer from './EventContainer';
import ImageComponent from './ImageComponent';

//Component that renders DateCard with image carousel, date and event information
class DateCard extends React.Component {
	getImageComponent() {
		const imageIds = this.props.events.map((event, i) => {
			return event.imgID;
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
		let EventData = this.props.events;
		return EventData;
	}

	render() {
		return (
			<div className="DateCard">
				<ImageComponent imageID={this.getImageComponent()} />
				{this.getDate()}
				<EventContainer events={this.getEventData()} />
			</div>
		);
	}
}

export default DateCard;
