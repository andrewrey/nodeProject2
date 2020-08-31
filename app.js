const chalk = require("chalk");
const request = require("request");
const apiInfo = require("./keys");
const weatherURL = `http://api.weatherstack.com/current?access_key=${apiInfo.weather}&query=Vancouver`;

request({ url: weatherURL, json: true }, (error, response, body) => {
  console.log(
    chalk.inverse(`Today's Forcast for ${body.location.name}: ${body.location.localtime}
  - ${body.current.weather_descriptions[0]}   
  - It's currently ${body.current.temperature}°C out. There is ${body.current.precip} of percipitation.`)
  );
});
