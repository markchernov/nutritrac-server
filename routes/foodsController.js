const foodsSequelizeDao = require('../daos/foodsSequelizeDao.js');
const express = require('express');
const router = express.Router();

/************************************************
         Foods in user table in c9 MySQL database
**************************************************/

// // middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('In Foods Route,  Time: ', new Date());
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


router.get('/', function(req, res) {



    console.log('inside GET /foods');


    foodsSequelizeDao.findAllFoods(function(sequelizeResponse) {

        if (sequelizeResponse instanceof Error) {

            console.log('Controller - findAllFoods Error: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);

        }
        else {

            console.log('Controller - All Foods: ');
            console.log(sequelizeResponse[0].dataValues); //  data from sequilize object
            console.log(sequelizeResponse[1].dataValues); //  data from sequilize object
            res.send(sequelizeResponse);
        }

    });

});

router.get('/:ndbno', function(req, res) {

    console.log('inside GET /foods/ndbno');
    console.log('req.params.ndbno:  ');
    console.log(req.params.ndbno);
    var foodNdbno = req.params.ndbno;

    foodsSequelizeDao.findFoodByNdbno(foodNdbno, function(sequelizeResponse, error) {

        if (sequelizeResponse instanceof Error) {


            console.log('Controller - findFoodByNdbno Error: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);


        }
        else {

            console.log('Controller - Foods ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);
        }
    });

});

router.get('/search/:name', function(req, res) {

    console.log('inside GET /foods/search/:name');
    console.log('req.params.name:  ');
    console.log(req.params.name);
    var foodName = req.params.name;

    foodsSequelizeDao.findFoodByChar(foodName, function(sequelizeResponse, error) {

        
        if(error)   {     res.send(error);              }
        
        
        
        
        if (sequelizeResponse instanceof Error) {


            console.log('Controller - findUserByChar Error: ');
            console.log(sequelizeResponse);
            //res.send(sequelizeResponse);
            res.send(new Error("Test err"));
            
        }
        else {

            console.log('Controller - Char Foods ');
            //console.log(sequelizeResponse);
            res.send(sequelizeResponse);
        }
    });

});


/************************************************
         POSTS
**************************************************/



/************************************************
         PUTS
**************************************************/

/************************************************
         DELETES
**************************************************/


module.exports = router;