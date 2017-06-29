var express = require('express'); //require the node express module
var app = express(); //call express function to create an instance of the obj
var port = 5002; //establish a port
var path = require('path');
var bodyParser = require('body-parser');
//applies to ALL routes that use it, don't need to require it in each route file, just main app.js file
app.use(bodyParser.urlencoded({extended:true}));
//need to require each router (just like each module)
var productRouter = require('./routes/product.js');
app.use('/product', productRouter);
//want to listen for EVERYTHING- all traffic
app.get('/*', function(req, res) {
  //name of file we are trying to load on page load
  //req.params is attached to the request body - path to the file we want to open on page load (anything after /)
  //scripts/client.js === req.params[0];
  var file = req.params[0] || 'views/index.html'; //will load html file if no other file is specified
  //establish root directory- full url path to get to 'public' (starting from 'User/T-Squish/antares/public')
  res.sendFile(path.join(__dirname, 'public', file));
}); //end get

app.listen(port, function() {
  console.log('server running on port: ', port);
}); //end listen

//cant do multiple requests of the same type (GET, POST) to the same url path
//can check if GET route is working on server side by typing that route into the browser
