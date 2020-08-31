const chalk = require("chalk");
const request = require("request");
const weatherURL = "http://api.weatherstack.com/current?access_key=335ba8dae0451c7062b9638a7c34dfa0&query=Vancouver";

request({ url: weatherURL, json: true }, (error, response, body) => {
  console.log(
    chalk.inverse(`Today's Forcast for ${body.location.name}: ${body.location.localtime}
  - ${body.current.weather_descriptions[0]}   
  - It's currently ${body.current.temperature}°C out. There is ${body.current.precip} of percipitation.`)
  );
});
