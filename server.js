'use strict';
//IMPORTS
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
let data = require('./data/weather.json');

// Middleware
app.use(cors());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`We are running on port ${PORT}`));

// Endpoints

app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server!');
});

class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

app.get('/weather', async (request, response, next) => {
  try {
    let lat = request.query.lat;
    let lon = request.query.lon;
    let searchQuery = request.query.searchQuery;

    // Use the .find() method to determine which city the search query belongs to
    let city = data.find(city => {
      return city.lat === lat && city.lon === lon || city.city_name.toLowerCase() === searchQuery.toLowerCase();
    });

    if (!city) {
      throw new Error('City not found. Please search for Seattle, Paris, or Amman.');
    }

    // Create an array of Forecast objects, one for each day in the city's weather data
    const forecasts = city.data.map(day => {
      return new Forecast(day.datetime.slice(0, 10), day.weather.description);
    });

    // Return the forecasts array to the client as a JSON object
    response.status(200).json(forecasts);
  } catch (error) {
    console.log(error.message);
    next(error.message);
  }
});

// Catch-all -- This should be added after all other routes
app.get('*', (request, response) => {
  response.status(404).send('Sorry, this route does not exist.');
});

// Error handling middleware
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});
