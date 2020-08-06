const express = require('express');
const https = require('https');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
	const cityName = req.body.cityName;
	const apiKey = process.env.WEATHER_API_KEY;
	const url =
		'https://api.openweathermap.org/data/2.5/weather?q=' +
		cityName +
		'&appid=' +
		apiKey +
		'&units=metric';

	const options = {
		method: 'GET',
		auth: url,
	};

	const request = https.request(url, options, (response) => {
		console.log(response.statusCode);
		response.on('data', (data) => {
			const weatherData = JSON.parse(data);
			// console.log(weatherData);
			const temp = weatherData.main.temp;
			const tempDescription = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;

			res.write(
				'<h1>The weather in ' +
					cityName +
					' is ' +
					temp +
					'</h1>\
        <h1>The weather in ' +
					cityName +
					' is like ' +
					tempDescription +
					'</h1> ',
			);
			res.write(
				'<img src=http://openweathermap.org/img/wn/' + icon + '@2x.png>',
			);
			res.send();
		});
	});

	request.end();
});

app.listen(3000, () => console.log('Server is running on port 3000.'));
