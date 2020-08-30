const request = require("request");
const weatherURL = "http://api.weatherstack.com/current?access_key=335ba8dae0451c7062b9638a7c34dfa0&query=Vancouver";

request({ url: weatherURL }, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data.current);
});
