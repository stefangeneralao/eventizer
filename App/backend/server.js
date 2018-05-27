const express = require('express');
const uuidv1 = require('uuid/v1');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');

const port = 3001;
const databaseURL = './database-driver.json';
const app = express();

// Middleware configuration
const exhibitorImagesDestinationURL = './uploads';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, exhibitorImagesDestinationURL);
  },
  filename: (req, file, cb) => {
    const uniqueId = uuidv1();
    let fileName = req.body.title;
    fileName += '.';
    fileName += uniqueId;
    fileName += '.';
    fileName += file.originalname.split('.')[1];
    cb(null, fileName);
  },
});
const upload = multer({ storage });

// Accept CORS from any source.
app.use(cors('*'));

// Writes JSON-object to file.
const writeToFile = (jsonObj, fileName = databaseURL) => {
  const jsonStr = JSON.stringify(jsonObj);
  fs.writeFile(fileName, jsonStr, 'utf8', () => {});
};

// Route exhibitor_form_request and callback-function.
const exhibitorFormRequestCB = (req, res) => {
  // Fetch data from request.
  const exhibitorLabel = req.body.title;
  const exhibitorDescription = req.body.description;
  const exhibitorDate = req.body.date;
  const exhibitorEvent = req.body.event;
  const exhibitorImgURL = req.file.filename;

  // Create a new exhibitor object.
  const newExhibitorObject = {
    exhibitionID: uuidv1(),
    label: exhibitorLabel,
    description: exhibitorDescription,
    imgURL: exhibitorImgURL,
  };

  // Fetch current database.
  const newDatabase = require(databaseURL);

  // Find the right date and event in database and add new exhibitor.
  newDatabase.dates.forEach((date) => {
    if (exhibitorDate === date.date) {
      date.events.forEach((event) => {
        if (exhibitorEvent === event.label) {
          event.exhibitors.push(newExhibitorObject);
        }
      });
    }
  });

  // Write newDatabase to database.
  writeToFile(newDatabase, databaseURL);

  // Response.
  res.send('Tack för att du använder Eventizer! Du är nu registrerad.');
};
app.post(
  '/exhibitor_form_request',
  upload.single('selectedFile'),
  exhibitorFormRequestCB,
);

// Route get_store. Sends database to client as JSON.
app.get('/get_store', (req, res) => {
  const store = require(databaseURL);
  res.send(store);
});

// Route get_image. Accepts imageurl as query. Sends imageURL to client.
app.get('/get_image', (req, res) => {
  const fileName = req.query.imageurl;
  res.sendFile(fileName, { root: __dirname + '/uploads/' });
});

// Starting the server.
app.listen(port, () => console.log('Backend listening on port', port));
