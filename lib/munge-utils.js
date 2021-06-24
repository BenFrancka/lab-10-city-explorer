function locationMunger(locationResponse) {

  const requestedLocation = locationResponse[0];

  return {
    formatted_query: requestedLocation.display_name,
    latitude: requestedLocation.lat,
    longitude: requestedLocation.lon

  };
}


module.exports = {
  locationMunger
};