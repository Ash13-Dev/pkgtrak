// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/home', function(request, response) {
  response.sendFile(__dirname + '/public/pages/index.html');
});

app.get('/track', function(request, response) {
  response.sendFile(__dirname + '/public/pages/track.html');
});

app.get('/', function(request, response) {
  response.redirect("/home");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
