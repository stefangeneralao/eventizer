import React from 'react';
import EventContainer from './EventContainer';
import ImageComponent from './ImageComponent';

//Component that renders DateCard with image carousel, date and event information
class DateCard extends React.Component {
	getImageComponent() {
		let eventImg = this.props.events;
	//	console.log(this.props.events)
		return eventImg;
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
