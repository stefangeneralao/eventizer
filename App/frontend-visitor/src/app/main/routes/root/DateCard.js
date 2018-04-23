import React from 'react';
import { Link } from 'react-router-dom';

class DateCard extends React.Component {
	getImageComponent() {
		return null;
	}

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
			const onClickLink = "event/" + event.label;

			return (
				<div key={i} className="DateCard__event">
					<div className="DateCard__event-location">
						{event.location}
					</div>

					<div className="DateCard__event-label">
						<Link to={onClickLink}>
							{event.label}
						</Link>
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
				{this.getImageComponent()}
				{this.getDate()}
				{this.getEvents()}
			</div>
		);
	}
}

export default DateCard;
