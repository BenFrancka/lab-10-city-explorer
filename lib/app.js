const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { locationMunger, weatherMunger, reviewMunger } = require('./munge-utils.js');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging



app.get('/location', async(req, res) => {
  try {
    const city = req.query.search;

    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${city}&format=json`);

    const mungedLocation = locationMunger(data.body);
    
    res.json(mungedLocation);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try {
    const { latitude, longitude } = req.query;
    
    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${process.env.WEATHER_KEY}`);

    const mungedWeather = weatherMunger(response.body);
    
    res.json(mungedWeather);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.get('/reviews', async(req, res) => {
  try {
    const { latitude, longitude } = req.query;

    const response = await request
      .get(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`)
      .set('Authorization', `Bearer ${process.env.YELP_KEY}`);

    const mungedReviews = reviewMunger(response.body);
    
    res.json(mungedReviews);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});



module.exports = app;
