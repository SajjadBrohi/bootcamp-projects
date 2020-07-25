const express = require('express');
const https = require('https');
const { request } = require('http');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  // We change the data to an Object to be changed to Stringified JSON because
  // that is the data that the Mailchimp API requires as seen from examples

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  var jsonData = JSON.stringify(data);

  const url = "https://us17.api.mailchimp.com/3.0/lists/63ea3abc6f"

  const option = {
    method: "POST",
    auth: "sajjad:665b783bf8ddfef38c1510b412f3b930-us17"
    //Mailchimp requires us to put ANY username prior to the auth key
  }

  const request = https.request(url, option, (response) => {

    response.on("data", (data) => {
      const errorCount = JSON.parse(data).error_count;

      if (response.statusCode === 200 && errorCount === 0) {
        res.sendFile(__dirname + '/success.html');
      } else {
        res.sendFile(__dirname + '/failure.html');

      }

      // We log here to get the data response back from the server of Mailchimp to 
      // see everything worked well
    })
  }) //After searching online, Angela found that assigning the request to a variable
  // and then writing to it, and then ending the data is the way to go

  request.write(jsonData);
  request.end();

  // Data to send to the user
});

app.post('/failure', (req, res) => {
  res.redirect('/');
})

app.listen(process.env.PORT || 3000, () => console.log('Server running at port 3000'));