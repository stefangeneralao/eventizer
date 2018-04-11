import React from 'react';
import './App.css';
import DateCard from './DateCard';

// TEMPORARY!
// Database-driver. This function will be replaced by database.
const getDateCards = () => {
	// The key-attribute will be replaced by the primary key from the database.
	const dateCards = [
		<DateCard
			key="2018-04-03"
			date="2018-04-03"
			events={[
				{position: "NI:3", label: "IA-dagen"},
				{position: "NI:4", label: "Kåren rådgivning"},
				{position: "G8:4", label: "Mäklarmässa"}
			]}
		/>,

		<DateCard
			key="2018-04-15"
			date="2018-04-15"
			events={[
				{position: "Kårhuset", label: "Gratis kaffe"}
			]}
		/>,

		<DateCard
			key="2018-06-03"
			date="2018-06-03"
			events={[
				{position: "Orkanen", label: "Dyrt kaffe"}
			]}
		/>
	];

	return dateCards;
}

// Main component.
class App extends React.Component {
  render() {
    return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Eventizer</h1>
				</header>

				<main>
					{getDateCards()}
				</main>
			</div>
		);
  }
}

export default App;
