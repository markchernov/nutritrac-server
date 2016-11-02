const usersSequelizeDao = require('../daos/usersSequelizeDao.js');
const express = require('express');
const router = express.Router();

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


/************************************************
         GETS
**************************************************/
router.get('/promise', function(req, res) {


    console.log('inside GET /users/promise');
    
    
    usersSequelizeDao.findAllUsersReturnPromise().then(function(sequelizeArray) {

            console.log("GET - All Users Promise: ");
            console.log("sequelizeArray:"); //  call return a special Array with dataValues as a payload
            console.log(sequelizeArray); 
            
            res.send( sequelizeArray );
            
        }).catch(function(error) {

            console.log("In catch with Error: " + error);
            
            res.send( error );
        });
});

router.get('/users', function(req, res) {



    console.log('inside GET /users');


    usersSequelizeDao.findAllUsers(function(sequelizeResponse) {

        if (sequelizeResponse instanceof Error) {

            console.log('Controller - findAllUsers Error: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);

        }
        else {

            console.log('Controller - All Users: ');
            console.log(sequelizeResponse[0].dataValues); //  data from sequilize object
            console.log(sequelizeResponse[1].dataValues); //  data from sequilize object
            res.send(sequelizeResponse);
        }

    });

});

router.get('/:email', function(req, res) {

    console.log('inside GET /users/email');
    console.log('req.params.email:  ');
    console.log(req.params.email);
    var userEmail = req.params.email;

    usersSequelizeDao.findUserByEmail(userEmail, function(sequelizeResponse, error) {

        if (sequelizeResponse instanceof Error) {


            console.log('Controller - findUserByEmail Error: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);


        }
        else {

            console.log('Controller - User: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);
        }
    });

});


/************************************************
         POSTS
**************************************************/



router.post('/new', function(req, res) {

    console.log('inside POST /users/new');

    var userObject = req.body;

    console.log('userObject: ');
    console.log(userObject);

    usersSequelizeDao.createUser(userObject, function(sequelizeResponse) {

        if (sequelizeResponse instanceof Error) {

            console.log('Controller - Create new User Error: ');
            res.send(sequelizeResponse);

        }

        else {

            console.log('Controller - Create new User Sucess: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);
        }

    });

});

router.post('/login', function(req, res) {

    console.log('inside POST /users/login');

    var userObject = req.body;

    console.log('userObject: ');
    console.log(userObject);

    usersSequelizeDao.login(userObject, function(sequelizeResponse) {

        if (sequelizeResponse instanceof Error) {

            console.log('Controller - Login Error: ');
            res.send(sequelizeResponse);

        }

        else {

            console.log('Controller - Login Sucess: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);
        }

    });

});

/************************************************
         PUTS
**************************************************/

router.put('/:email', function(req, res) {

    console.log('inside PUT /users/:email');
    var userParam = req.params.email;
    console.log('userParam: ');
    console.log(userParam);


    var userObject = req.body;
    console.log('userObject: ');
    console.log(userObject);

    usersSequelizeDao.updateUser(userParam, userObject, function(sequelizeResponse) {

        if (sequelizeResponse instanceof Error) {

            console.log('Controller - Update User Error: ');
            res.send(sequelizeResponse);

        }

        else {

            console.log('Controller - Update User Sucess: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);
        }

    });

});


/************************************************
         DELETES
**************************************************/

router.delete('/:email', function(req, res) {

    console.log('inside DELETE /users/:email');
    var userParam = req.params.email;
    console.log('userParam: ');
    console.log(userParam);


    usersSequelizeDao.deleteUser(userParam, function(sequelizeResponse) {

        if (sequelizeResponse instanceof Error) {

            console.log('Controller - Delete User Error: ');
            res.send(sequelizeResponse);

        }

        else {

            console.log('Controller - Delete User Sucess: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);
        }

    });

});


module.exports = router;