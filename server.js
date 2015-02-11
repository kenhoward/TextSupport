var express = require('express');
var bodyParser = require('body-parser');

var Firebase = require('firebase'); // step2 --> require 'firebase' (priming it for the real injection of my firebase proj's url) 

var firebase = new Firebase('https://textsupport11.firebaseio.com/numbers'); // step2 --> 'Create a new firebase reference' and '/numbers' is given

var app = express();
var port = 11011;

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());



app.listen(port, function() {
	console.log('Now listening to port: ' + port);
})