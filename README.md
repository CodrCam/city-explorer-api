# City-Explorer-api

**Author**: Cameron Griffin
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

This app is powered by an API server that allows a user to enter a city name into a form, and then displays information about the city, including its latitude, longitude, and current weather data, along with a static map of the area. The API server uses the LocationIQ API to retrieve the latitude and longitude information and the OpenWeather API to retrieve the weather data. The latitude and longitude are then used to generate the map. The app is built using React and the React Bootstrap library for styling.

## Getting Started

Enter a city name in the search field and click the "Explore!" button.
The app will display the city name, latitude, longitude, and current weather data, along with a map of the city.
API Server:

This app is powered by an API server built with Node.js and Express.js. The server is responsible for handling HTTP requests and responses between the client-side application and the LocationIQ and OpenWeather APIs. It also serves as a bridge for data transfer between the APIs and the client-side application.

## The API server has three main endpoints

"/location": This endpoint receives the city name entered by the user and uses the LocationIQ API to retrieve the latitude and longitude information for that city. The endpoint then sends that information back to the client-side application.
"/weather": This endpoint receives the latitude and longitude information for a given city and uses the OpenWeather API to retrieve the current weather data for that location. The endpoint then sends that data back to the client-side application.
"/": This endpoint serves the client-side application to the user's browser.
The API server uses several libraries and technologies, including Node.js and Express.js for handling HTTP requests and responses, Axios for making HTTP requests to the LocationIQ and OpenWeather APIs, and CORS to allow cross-origin requests.

## Change Log

03-21-2023 7:07pm - added server

## Credit and Collaborations

## Lab 7

Name of feature: Created data and app JS to pull from an API and print a map and cordinates.

Estimate of time needed to complete: 2 hours

Start time: 1:30

Finish time: 7

Actual time needed to complete: 5.5hrs

## Lab 9

Name of feature: seperated out the weather and movie components

Estimate of time needed to complete: 3 hours

Start time: 5:30

Finish time: 6:45

Actual time needed to complete: 1.25hrs

![diagram](/Screenshot%202023-03-23%20at%207.09.28%20PM.png)
