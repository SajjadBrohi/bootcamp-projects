const express = require('express');
const https = require('https');

const app = express();

app.get('/', (req, res) => {
  const url = "https://samples.openweathermap.org/data/2.5/weather?q=khuzdar&appid=439d4b804bc8187953eb36d2a8c26a02";
  https.get(url, () => console.log(url));
  res.sendFile(__dirname + '/index.html')
});

app.listen(3000, () => console.log('Server is running on port 3000.'));