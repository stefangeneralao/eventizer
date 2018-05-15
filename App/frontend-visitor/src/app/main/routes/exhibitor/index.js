import React from 'react';
import ExhibitorCard from './ExhibitorCard';

// This component renders the ExhibitorCard
class Exhibitor extends React.Component {

	// Get ExhibitorId from browser URL
	getExhibitorIdFromURL() {
		let url = document.URL;
		let parts = url.split('/')
		return parts[parts.length - 1];
	}

	// Matches the URL with the right exhibitor and returns data
	getExhibitorData() {
		const exhibitorId = this.getExhibitorIdFromURL();
		const dates = this.props.store.dates;

		//Loops every date to get the events
		for(let i in dates) {
			const eventListItem = dates[i]['events'];

			//Loops every event to get the exhibitors
			for(let j in eventListItem) {
				const exhibitors = eventListItem[j]['exhibitors'];

				//Loops every exhibitor until exhibitorId in URL matches an exhibitor and returns the right exhibitor
				for (let z in exhibitors) {
					var exhibitor = exhibitors[z];
					const encodedExhibitorId = encodeURIComponent(exhibitorId.trim())
					if(exhibitor.exhibitionID === encodedExhibitorId){
						const date = dates[i]['date'];
						const time = eventListItem[j]['time'];
						const exhibitorData = {
							'id': exhibitor.exhibitionID,
							'label': exhibitor.label,
							'description': exhibitor.description,
							'img': exhibitor.img,
							'date': date,
							'time': time
						};
						return exhibitorData;
					}
				}
			}
		}
		return dates;
	}

	render() {
		let exhibitorData = this.getExhibitorData();
		return (<ExhibitorCard
						id={exhibitorData.id}
						label={exhibitorData.label}
						description={exhibitorData.description}
						img={exhibitorData.img}
						date={exhibitorData.date}
						time={exhibitorData.time} />);
	}
}

export default Exhibitor;
