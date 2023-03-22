'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
let data = require('./data/weather.json');

//middlewware
app.use(cors());

const PORT = process.env.PORT || 3002;

app.on('listening', () => {
  console.log(`We are running on port ${PORT}`);
});

app.listen(PORT);

//end points

app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server!');
});

// CATCH ALL -- This should be added after all other routes
app.get('*', (request, response) => {
  response.status(404).send('Sorry, this route does not exist.');
});

// **** ERROR HANDLING - PLUG AND PLAY CODE FROM EXPRESS DOCS ****
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});
