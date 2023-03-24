//imports
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// middleware
app.use(cors());

// routes
const weatherRouter = require('./weather');
const moviesRouter = require('./movies');

app.use('/weather', weatherRouter);
app.use('/movies', moviesRouter);

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// server listener
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
