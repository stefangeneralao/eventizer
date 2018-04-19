import React from 'react';
import DateCard from './DateCard';

const getDateCards = (store) => {
	const dateCards = store.dates.map((cardData) => {
		const date = cardData.date;
		const events = cardData.events;
		return (
			<DateCard
				key={date}
				date={date}
				events={events}
			/>
		);
	});

	return dateCards;
}

class Root extends React.Component {
	render() {
		return (
			<div>
				{getDateCards(this.props.store)}
			</div>
		);
	}
}

export default Root;
