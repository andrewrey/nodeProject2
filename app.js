const chalk = require("chalk");
const request = require("request");
const apiInfo = require("./keys");
const weatherURL = `http://api.weatherstack.com/current?access_key=${apiInfo.weather}&query=Vancouver`;
const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${apiInfo.geo}`;

request({ url: weatherURL, json: true }, (error, response, body) => {
  console.log(
    chalk.inverse(`Today's Forcast for ${body.location.name}: ${body.location.localtime}
  - ${body.current.weather_descriptions[0]}   
  - It's currently ${body.current.temperature}°C out. There is ${body.current.precip} of percipitation.`)
  );
});

request({ url: geoCodeURL, json: true }, (error, response, body) => {
  console.log(
    chalk.green.inverse(`${body.features[0].place_name}:
  Longitude: ${body.features[0].center[0]}
  Latitude: ${body.features[0].center[1]}`)
  );
});
