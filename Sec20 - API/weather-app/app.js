const express = require('express');
const https = require('https');

const app = express();

app.get('/', (req, res) => {
  const url = "https://samples.openweathermap.org/data/2.5/weather?q=khuzdar&appid=439d4b804bc8187953eb36d2a8c26a02";
  https.get(url, (response) => {
    console.log(response.statusCode)
    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const tempDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      console.log(tempDescription);
      res.write("<h1>The weather in Khuzdar is " + temp + "</h1>\
      <h1>The weather in Khuzdar is like " + tempDescription + "</h1> ");
      res.write("<img src=http://openweathermap.org/img/wn/" + icon + "@2x.png>");
      res.send();
    })
  });
});

app.post('/', (req, res) => {

})

app.listen(3000, () => console.log('Server is running on port 3000.'));