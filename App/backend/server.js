const express = require('express');
const port = 3001;
const databaseURL = './database-driver.json';
const cors = require('cors');
const app = express();

app.use(cors());

const writeToFile = (jsonObj, fileName=databaseURL) => {
	const fs = require('fs');
	const jsonStr = JSON.stringify(jsonObj);
	fs.writeFile(fileName, jsonStr, 'utf8', () => {
		console.log("Writing to", fileName);
	});
}

app.get('/exhibitor_form_request', (req, res) => {
	console.log(req.query);

	// Fetch data.
	const qExhibitorLabel = req.query.title;
	const qDescription = req.query.description;
	const qDate = req.query.date;
	const qEvent = req.query.event;

	// Create a new exhibitor object.
	const newExhibitorObject = {
		exhibitionID: "" + Math.random(),
		label: qExhibitorLabel,
		description: qDescription
	}

	// Fetch current database.
	const newDatabase = require(databaseURL);

	// Find the right date and event in database and add new exhibitor.
	newDatabase.dates.forEach(date => {
		if(qDate === date.date) {
			date.events.forEach(event => {
				if(qEvent === event.label) {
					event.exhibitors.push(newExhibitorObject);
				}
			});
		}
	});

	// Write newDatabase to database.
	writeToFile(newDatabase, databaseURL);

	// Response.
	res.send('Tack för att du använder Eventizer! Du är nu registrerad.');
});

app.get('/get_store', (req, res) => {
	const store = require(databaseURL);
	console.log(store);
	res.send(store);
});

app.listen(port, () => console.log('Listening on port ' + port));
