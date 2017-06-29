//need express-the hub that allows us to route things to different places
var express = require('express');
//a constructor method>> //creating a router for us we can use
var router = express.Router();

var products = [];
//receive the new usesr-inputted kayak
//Express removed the '/product', now just '/' when inside the router file
router.post('/', function(req, res) {
  var product = req.body; //data sent from client in ajax request
  products.push(product); //push that data objec into product array
  res.send({message: 'Successfully added our product!'});//send response back to client
});//end post

router.get('/', function(req, res) {
  res.send(products);
});//end get

//can only have one 'app', use routers to delegate work to other files to perform tasks

//creating a router that delegates traffic between the GET and POST requests
module.exports = router;
