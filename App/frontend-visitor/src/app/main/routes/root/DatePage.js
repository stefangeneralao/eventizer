import React from 'react';
import EventCard from './EventCard';

// TEMPORARY!
// Database-driver. This function will be replaced by database.
const getEventCards = () => {
	// The key-attribute will be replaced by the primary key from the database.
	const eventCards = [
		<EventCard
			key="IA-dagen"
			name="IA-dagen"
			position="NIAGARA"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra vitae congue eu consequat. Pellentesque adipiscing commodo elit at."
		/>,

		<EventCard
			key="Kåren rådgivning"
			name="Kåren rådgivning"
			position="NIAGARA"
			description="Tempor orci eu lobortis elementum. Erat pellentesque adipiscing commodo elit at imperdiet. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Non enim praesent elementum facilisis leo vel. Ultrices tincidunt arcu non sodales neque. Gravida cum sociis natoque penatibus et."
		/>,

		<EventCard
			key="Mäklarmässan"
			name="Mäklarmässan"
			position="Orkanen"
			description="Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. In nibh mauris cursus mattis molestie. Quis enim lobortis scelerisque fermentum. Tempor orci eu lobortis elementum. Erat pellentesque adipiscing commodo elit at imperdiet. "
		/>
	];

	return eventCards;
}

const getDate = () => {
	//Temporary!
	//Get date either from url or database if url contains id
	return "2018-04-03"
}

// Main component.
class DatePage extends React.Component {
  render() {
    return (
			<div className="DatePage">
				<header className="DatePage-header">
					<h1 className="DatePage-title">Eventizer</h1>
					<small>{getDate()}</small>
				</header>

				<main>

					{getEventCards()}
				</main>
			</div>
		);
  }
}

export default DatePage;
