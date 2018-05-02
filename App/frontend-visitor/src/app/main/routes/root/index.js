import React from 'react';
import DateContainer from './DateContainer';

//This component renders DateContainer
class Root extends React.Component {
	getCardsData() {
		let cardsData = JSON.parse(JSON.stringify(this.props.store.dates));
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
