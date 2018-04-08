import React, {Component} from 'react';

class DateCard extends Component {
	getDate() {
		const date = this.props.date;

		return (
			<div className="DateCard__date">
				{date}
			</div>
		);
	}

	getEvents() {
		const events = this.props.events.map((event, i) => {
			return (
				<div key={i} className="DateCard__event">
					<div className="DateCard__event-position">
						{event.position}
					</div>

					<div className="DateCard__event-label">
						{event.label}
					</div>
				</div>
			)
		});

		return (
			<div className="DateCard__event-wrapper">
				{events}
			</div>
		);
	}

	render() {
		return (
			<div className="DateCard">
				{this.getDate()}
				{this.getEvents()}
			</div>
		);
	}
}

export default DateCard;
