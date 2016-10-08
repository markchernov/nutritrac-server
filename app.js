/************************************************
 
APP CONFIG

**************************************************/

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//var router = express.Router();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());


// allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************************************************
 
START APP 

**************************************************/


app.listen(process.env.PORT);
console.log('Example app listening on port: ' + process.env.PORT);
console.log('Example app IP: ' + process.env.IP);
console.log("My path: ");
console.log(path.resolve());

/************************************************
 
ROUTES

**************************************************/



// Order of routes is important for ome reason
app.get('/', function(req, res) {

  res.json({
    test: 'My Node.js NutriTrac API. Please send GET to /users '
  });

});


app.get('/ping', function(req, res) {
    
  res.json({
    Ping: 'Pong'
  });

});


app.use('/users',require('./routes/usersController.js'));


app.use(function(req, res, next) {

  res.status(404).send('Sorry can not find it');

});


module.exports = app;