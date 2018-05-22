const express = require('express');
const port = 3001;
const databaseURL = './database-driver.json';
const cors = require('cors');
const uuidv1 = require('uuid/v1');
const app = express();
// var bodyParser = require('body-parser');

const multer  = require('multer');
const exhibitorImagesDestinationURL = './uploads';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, exhibitorImagesDestinationURL)
  },
  filename: function (req, file, cb) {
    const uniqueId = uuidv1();
    let fileName = req.body.title;
    fileName += '.';
    fileName += uniqueId;
    fileName += '.';
    fileName += file.originalname.split('.')[1];
    console.log(fileName);
    cb(null, fileName);
  }
})
const upload = multer({ storage: storage })

app.use(cors('*'));

// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

const writeToFile = (jsonObj, fileName=databaseURL) => {
	const fs = require('fs');
	const jsonStr = JSON.stringify(jsonObj);
	fs.writeFile(fileName, jsonStr, 'utf8', () => {
		console.log("Writing to", fileName);
	});
}

app.post(
  '/exhibitor_form_request',
  upload.single('selectedFile'),
  (req, res) => {
  	console.log('request.file', req.file);
  	console.log('request.body:', req.body);

  	// Fetch data from request.
  	const exhibitorLabel = req.body.title;
  	const exhibitorDescription = req.body.description;
  	const exhibitorDate = req.body.date;
  	const exhibitorEvent = req.body.event;
    const exhibitorImgURL = req.file.filename;

  	// Create a new exhibitor object.
  	const newExhibitorObject = {
  		exhibitionID: "" + uuidv1(),
  		label: exhibitorLabel,
  		description: exhibitorDescription,
      imgURL: exhibitorImgURL
  	}
    console.log('newExhibitorObject', newExhibitorObject);

  	// Fetch current database.
  	const newDatabase = require(databaseURL);

  	// Find the right date and event in database and add new exhibitor.
  	newDatabase.dates.forEach(date => {
  		if(exhibitorDate === date.date) {
  			date.events.forEach(event => {
  				if(exhibitorEvent === event.label) {
  					event.exhibitors.push(newExhibitorObject);
  				}
  			});
  		}
  	});

  	// Write newDatabase to database.
  	writeToFile(newDatabase, databaseURL);

  	// Response.
  	res.send('Tack för att du använder Eventizer! Du är nu registrerad.');
  }
);

app.get('/get_store', (req, res) => {
	const store = require(databaseURL);
	console.log(store);
	res.send(store);
});

app.get('/get_image', (req, res) => {
  const fileName = req.query.imageurl;
  console.log(fileName);
  res.sendFile(fileName, { root: __dirname + '/uploads/' });
});

app.listen(port, () => console.log('Listening on port ' + port));
