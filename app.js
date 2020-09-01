const chalk = require("chalk");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geoCode("Victoria BC", (error, data) => {
  console.log(chalk.red.inverse(`Error: ${error}`));
  console.log(chalk.inverse(`${data.location}:`));
  console.log(
    chalk.inverse.green(`Longitude: ${data.longitude}
Latitude: ${data.latitude}`)
  );
});

forecast(44.1545, -75.7088, (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data);
});
