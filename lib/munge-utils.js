function locationMunger(locationResponse) {

  const requestedLocation = locationResponse[0];

  return {
    formatted_query: requestedLocation.display_name,
    latitude: requestedLocation.lat,
    longitude: requestedLocation.lon

  };
}


function weatherMunger(weatherResponse) {
  const forecasts = weatherResponse.data;

  const mappedWeather = forecasts.map(forecast => {
    return {
      forecast: forecast.weather.description,
      time: new Date(forecast.ts * 1000)
        .toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
    };
  });
  return mappedWeather;
}

function reviewMunger(reviewResponse) {
  const reviews = reviewResponse.businesses;

  const mappedReviews = reviews.map(review => {
    return {
      name: review.name,
      image_url: review.image_url,
      rating: review.rating,
      url: review.url
    };
  });
  return mappedReviews;
}

module.exports = {
  locationMunger,
  weatherMunger,
  reviewMunger
};