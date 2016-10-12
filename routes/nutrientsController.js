const nutrientsSequelizeDao = require('../daos/nutrientsSequelizeDao.js');
const express = require('express');
const router = express.Router();

/************************************************
         Nutrients in nutrient table in c9 MySQL database
**************************************************/

// // middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('In Nutrients Route,  Time: ', new Date());
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


router.get('/:ndbno/', function(req, res) {

    console.log('inside GET /measures/ndbno');
    console.log('req.params.ndbno:  ');
    console.log(req.params.ndbno);
    
    
    var foodNdbno = req.params.ndbno;
   
    

    nutrientsSequelizeDao.findNutrientByFoodNdbno(foodNdbno,  function(sequelizeResponse, error) {

        if (sequelizeResponse instanceof Error) {


            console.log('Controller - findNutrientByNdbno Error: ');
            console.log(sequelizeResponse);
            res.send(sequelizeResponse);


        }
        else {

            console.log('Controller - Nutrients ');
            console.log(sequelizeResponse);
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