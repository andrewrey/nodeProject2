const chalk = require("chalk");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geoCode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
  if (process.argv[2]) {
    if (error) {
      return console.log(chalk.red.inverse(`Error: ${error}`));
    }

    forecast(latitude, longitude, (error, { location: foreLoc, query, coord, descript, temperature, precip, forecast } = {}) => {
      if (error) {
        return console.log("Error: ", error);
      }
      console.log(
        chalk.yellow.inverse(
          `Data from Mapbox api: 
- Location: ${location}
- Coordinates: ${latitude}, ${longitude}`
        )
      );
      console.log(
        chalk.inverse(
          `Data from WeatherStack API:
-Forecast: ${forecast}
-Query: ${query}
-Location: ${foreLoc}
-Coordinates: ${coord}`
        )
      );
    });
  } else {
    console.log("Please provide a location");
  }
});
