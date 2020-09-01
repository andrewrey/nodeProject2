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
      console.log(
        chalk.yellow.inverse(
          `Data from Mapbox api: 
- Location: ${data.location}
- Coordinates: ${data.latitude}, ${data.longitude}`
        )
      );
      console.log(
        chalk.inverse(
          `Data from WeatherStack API:
-Forecast: ${forecastData.forecast}
-Query: ${forecastData.query}
-Location: ${forecastData.location}
-Coordinates: ${forecastData.coord}`
        )
      );
    });
  } else {
    console.log("Please provide a location");
  }
});
