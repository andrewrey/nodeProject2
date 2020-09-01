const request = require("request");
const apiInfo = require("../keys");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${apiInfo.weather}&query=${latitude},${longitude}`;
  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback(`Unable to connect to weather services! Please try again later`, undefined);
    } else if (body.error) {
      callback(`Location Error: Please check coordinates`, undefined);
    } else {
      callback(undefined, {
        forecast: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        precip: body.current.precip,
      });
    }
  });
};

module.exports = forecast;