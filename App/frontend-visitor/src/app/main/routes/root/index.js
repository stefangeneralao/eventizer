import React from 'react';
import DateContainer from './DateContainer';

//This component renders DateContainer
class Root extends React.Component {
	getCardsData() {
		let cardsData = JSON.parse(JSON.stringify(this.props.store.dates));

		for(let i in cardsData) {
			let eventsList = cardsData[i]['events'];

			for(let j in eventsList) {
				let eventItem = eventsList[j];
				delete eventItem["exhibitors"];
			}
		}
		return cardsData;
	}

	render() {
		return (
			<div>
				<DateContainer cardsData={this.getCardsData()} />
			</div>
		);
	}
}

export default Root;
