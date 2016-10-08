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
    test: 'My Node.js Test API. Hit /users, /groups or /devices route'
  });

});


app.get('/ping', function(req, res) {
    
  res.json({
    test: 'Pong'
  });

});



app.use('/users',require('./routes/usersController.js'));


app.use(function(req, res, next) {

  res.status(404).send('Sorry can not find it');

});



/************************************************
 
MySQL Connection

**************************************************/


 /*  
# start MySQL. Will create an empty database on first start
$ mysql-ctl start

# stop MySQL
$ mysql-ctl stop

# run the MySQL interactive shell
$ mysql-ctl cli

Hostname - $IP (The same local IP as the application you run on Cloud9)
Port - 3306 (The default MySQL port number)
User - $C9_USER (Your Cloud9 user name)
Password - "" (No password since you can only access the DB from within the workspace)
Database - c9 (The database username)

select @@hostname;
*/


// route middleware that will happen on every request
// router.use(function(req, res, next) {

//     // log each request to the console
//     console.log(req.method, req.url);

//     // continue doing what we were doing and go to the route
//     next(); 
// });





// // apply the routes to our application
// app.use('/', router);

// // home page route (http://localhost:8080)
// router.get('/home', function(req, res) {
//     res.send('im the home page!');  
// });

// // about page route (http://localhost:8080/about)
// router.get('/about', function(req, res) {
//     res.send('im the about page!'); 
// });









module.exports = app;