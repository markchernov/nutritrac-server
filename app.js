/************************************************
 
APP CONFIG

**************************************************/

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());


// allow CORS
const corsOptions = {  origin:'http://localhost:3000', credentials: true };  // allow origin from my Angular2 and allow Access-Control-Allow-Credentials
app.use(cors(corsOptions));
app.options('*', cors());



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


app.get('/ping/ping', function(req, res) {
  
  console.log("Pinged");
    
  res.json({
    Ping: 'Pong'
  });

});

// home page route (http://localhost:8080)
app.get('/home', function(req, res) {
    res.send('im the home page!');
});


// about page route (http://localhost:8080/about)
app.get('/about', function(req, res) {
    res.send('im the about page!');
});


app.use('/users', require('./routes/usersController.js'));
app.use('/foods', require('./routes/foodsController.js'));
app.use('/measures', require('./routes/measuresController.js'));
app.use('/nutrients', require('./routes/nutrientsController.js'));




app.use(function(req, res, next) {

  res.status(404).send('Sorry can not find it');

});


module.exports = app;