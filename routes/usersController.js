var sequelizeConnection = require('../connection.js');

var usersSequelizeDao = require('../daos/usersSequelizeDao.js');

var express = require('express');
var router = express.Router();

/************************************************
         Users in user table in c9 MySQL database
**************************************************/

// // middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('In Users Route,  Time: ', new Date());
    next();
});

//route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

router.get('/', function(req, res) {



    console.log('inside GET /users');


    usersSequelizeDao.findAllUsers(function(sequelizeArray) {

        console.log('Controller - All Users: ');
        console.log(sequelizeArray[0].dataValues);  //  data from sequilize object
        console.log(sequelizeArray[1].dataValues);  //  data from sequilize object
        res.send(sequelizeArray);

    });

});

router.get('/:email', function(req, res) {

    console.log('inside GET /users/email');
    console.log('req.params.email:  ');
    console.log(req.params.email);
    var userEmail = req.params.email;

    usersSequelizeDao.findUserByEmail(userEmail,function(sequelizeObject) {

        console.log('Controller - User: ');
        console.log(sequelizeObject.dataValues);
        res.send(sequelizeObject);
    });

});
   
   
   
   
   
   

//   usersMongooseDAO.findAllUsers(function(obj) {

//     console.log('returned object after usersMongoose.findAllUsers');
//     console.log(obj);
//     res.send(obj);












// router.get('/:CallSign', function(req, res) {

//   console.log('inside GET users/:CallSign');
//   console.log('req.params.CallSign:  ');
//   console.log(req.params.CallSign);
  
//   var userParam = req.params.CallSign;

//   usersMongooseDAO.findUserById(userParam, function(obj) {

//     console.log('returned object after usersMongoose.findUserById');
//     console.log(obj);
//     res.send(obj);
//   });
// });


// router.get('/', function(req, res) {

//   console.log('inside GET /users');


//   usersMongooseDAO.findAllUsers(function(obj) {

//     console.log('returned object after usersMongoose.findAllUsers');
//     console.log(obj);
//     res.send(obj);
//   });
// });




// router.post('/', function(req, res) {
//   console.log('inside POST /users');
//   console.log('req.body    ');
//   console.log(req.body);


//   var newUser = {
//     CallSign: req.body.CallSign,
//     Device: req.body.MAC,
//     Group: req.body.GR,
//     DATE: new Date()
//   };

//   usersMongooseDAO.saveUser(newUser, function(obj) {

//     console.log('returned object after quotesDAO.getAllUsers');
//     console.log(obj);
//     res.send(obj);

//   });
// });


// router.put('/:CallSign', function(req, res) {

//   console.log('inside PUT /users/:CallSign');
//   console.log('req.params.CallSign:  ');
//   console.log(req.params.CallSign);
  
//   console.log('req.body    ');
//   console.log(req.body);

//   var updateUser = {
//     CallSign: req.body.CallSign,
//     Device: req.body.Device,
//     Group: req.body.Group
//   };



//   var userParam = req.params.CallSign;

//   usersMongooseDAO.updateUserById(userParam, updateUser,  function(obj) {

//     console.log('returned object after usersMongoose.updateUserById');
//     console.log(obj);
//     res.send(obj);
//   });
// });


// router.delete('/:CallSign', function(req, res) {

//   console.log('inside DELETE /users/:CallSign');
//   console.log('req.params.id:  ');
//   console.log(req.params.CallSign);


//   var userParam = req.params.CallSign;

//   usersMongooseDAO.deleteUserById(userParam, function(obj) {

//     console.log('returned object after usersMongoose.deleteUserById');
//     console.log(obj);
//     res.send(obj);
//   });
// });

// home page route (http://localhost:8080)
router.get('/home', function(req, res) {
    res.send('im the home page!');  
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
    res.send('im the about page!'); 
});

module.exports = router;