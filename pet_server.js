
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));


var cats = require('./routes/pet.js')(app);

app.listen(3002,function(){
	console.log('Serving running on localhost');
});


