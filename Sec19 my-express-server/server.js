const express = require('express');
const app = express();
const port = 4200;

app.get("/", function (req, res) {
  res.send("hello man");
})

app.get("/contact", (req, res) => {
  res.send("You can contact me whereever you want.");
})

app.get("/about", (req, res) => res.send("Elo, my name is Jay!"));


app.listen(port, () => console.log(`hello`));