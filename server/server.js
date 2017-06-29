var express = require('express'); //require the node express module
var app = express(); //call express function to create an instance of the obj
var port = 5002; //establish a port
var path = require('path');

app.listen(port, function() {
  console.log('server running on port: ', port);
}); //end listen

//want to listen for EVERYTHING- all traffic
app.get('/*', function(req, res) {
  //name of file we are trying to load on page load
  var file = req.params[0] || 'views/index.html'; //will load html file if no other file is specified
  //establish root directory- full url path to get to 'public' (starting from 'User/T-Squish/antares/public')
  res.sendFile(path.join(__dirname, 'public', file));
}); //end get
