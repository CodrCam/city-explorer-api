const express = require('express');
const axios = require('axios');
const Forecast = require('./forecast');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Welcome to the weather API!');
});

router.get('/forecast', async (req, res) => {
  try {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${latitude}&lon=${longitude}&days=5&units=I`;

    const response = await axios.get(url);

    // Create an array of Forecast objects, one for each day in the city's weather data
    const forecasts = response.data.data.map(day => new Forecast(day.valid_date, day.weather.description));

    res.status(200).json(forecasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

module.exports = router;
