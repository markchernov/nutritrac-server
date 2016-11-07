const mealsSequelizeDao = require('../daos/mealsSequelizeDao.js');
const express = require('express');
const router = express.Router();

/************************************************
         Meals in meal table in c9 MySQL database
**************************************************/

// // middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('In Meals Route,  Time: ', new Date());
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



    console.log('inside GET /meals');


    mealsSequelizeDao.findAllMeals(function(sequelizeResponse) {

        if (sequelizeResponse instanceof Error) {

            console.log('Controller - findAllMeals Error: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);

        }
        else {

            console.log('Controller - All Meals: ');
            console.log(sequelizeResponse[0].dataValues); //  data from sequilize object
            console.log(sequelizeResponse[1].dataValues); //  data from sequilize object
            res.send(sequelizeResponse);
        }

    });

});



router.get('/search/:name', function(req, res) {

    console.log('inside GET /meals/search/:name');
    console.log('req.params.name:  ');
    console.log(req.params.name);
    var mealName = req.params.name;

    mealsSequelizeDao.findMealByChar(mealName, function(sequelizeResponse, error) {

        
        if(error)   {     res.send(error);              }
        
        
        
        
        if (sequelizeResponse instanceof Error) {


            console.log('Controller - findMealByChar Error: ');
            console.log(sequelizeResponse);
            //res.send(sequelizeResponse);
            res.send(new Error("Test err"));
            
        }
        else {

            console.log('Controller - Char Meals ');
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