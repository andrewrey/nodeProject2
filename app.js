const chalk = require("chalk");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geoCode(process.argv[2], (error, data) => {
  if (process.argv[2]) {
    if (error) {
      return console.log(chalk.red.inverse(`Error: ${error}`));
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log("Error: ", error);
      }
      console.log(data.location);
      console.log(forecastData.forecast);
      console.log(forecastData.location);
    });
  } else {
    console.log("Please provide a location");
  }
});
