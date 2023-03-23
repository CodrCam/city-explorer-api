'use strict';

//IMPORTS
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();

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
    let latitude = request.query.latitude;
    let longitude = request.query.longitude;
    let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&days=5&units=I`;

    let weatherResponse = await axios.get(url);

    // Create an array of Forecast objects, one for each day in the city's weather data
    const forecasts = weatherResponse.data.data.map(day => {
      return new Forecast(day.valid_date, day.weather.description);
    });

    // Return the forecasts array to the client as a JSON object
    response.status(200).send(forecasts);
  } catch (error) {
    console.log(error.message);
    next(error.message);
  }
});

app.get('/movies', async (request, response, next) => {
  try {
    let city = request.query.city;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&query=${city}`;


    let movieResponse = await axios.get(url);

    // Return the movie data to the client as a JSON object
    response.status(200).send(movieResponse.data);
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
