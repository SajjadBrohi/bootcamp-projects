const express = require('express');
const app = express();
// const bmiElement = document.querySelector(".bmi");


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => res.sendFile(__dirname + "/bmiCalculator.html"));

app.post("/", (req, res) => {
  res.sendFile(__dirname + '/programming.jpg')
});

app.listen(4200, () => console.log("Server started at port 4200."));