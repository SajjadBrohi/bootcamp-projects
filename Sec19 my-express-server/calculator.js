const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/about", (req, res) => res.send("please stop"));


//Process data from calculator form
app.post("/", (req, res) => {

  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  res.send("Your results are " + (num1 + num2));
})

app.listen(3000, () => console.log("Server started at port 3000."));