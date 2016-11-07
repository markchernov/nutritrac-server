"use strict";

const mealModel = require('../models/Meal.js');



const mealsSequelizeDao = {
    

    findAllMeals: function(callback) {


        mealModel.findAll({
            attributes: ['id', 'name'],


        }).then(function(sequelizeArray) {

            console.log("DAO - All Meals: ");
            console.log(sequelizeArray[0].dataValues); //  call return a special Array with dataValues as a payload
            console.log(sequelizeArray[1].dataValues); 
            callback(sequelizeArray);
            
        }).catch(function(error) {

            console.log("In catch with Error: " + error);
            callback(error);

        });


        console.log('Inside usersSequelizeDao.findAllFoods');



    },


   
    findMealByChar: function(mealChar, callback) {


        console.log("Inside DAO mealChar: ");
        console.log(mealChar);
        let char = mealChar;
        
        let tokens = char.split(" ");
        console.log("tokens: ");
        console.log(tokens);
        let tokensAfter = [];
        
        tokens.forEach(function(currentValue) {
            
            currentValue = '%' + currentValue + '%';
            tokensAfter.push(currentValue);
        
        }); 
        
        console.log("tokensAfter: ");
        console.log(tokensAfter);   
        

        mealModel.findAll({
                    attributes: ['id', 'name'],
                    //plain: true,
                    limit: 20 ,
        
                    where: {
        
                        $and: [{
                            name: {
                                $like: tokensAfter[0]
                            }
                        }, {
                            name: {
                                $like: tokensAfter[1] || "%%"
                            }    
                        },
                            
                            {
                            name: {
                                $like: tokensAfter[2] || "%%"
                            }
                         
                        }]
                
                
            },
            
                 order: [['name', 'ASC']]
            
            
            
            
            
            // where: {
                
                
       
            //     name:  {$like : `%${char}%` }
               
            // }

        }).then(function(sequelizeArray) {

            console.log("DAO - Char Meal: then");
            
            
            try {
                
                console.log("sequelizeArray");
                console.log(sequelizeArray[0].dataValues);
                //console.log(sequelizeArray[1].dataValues);
                callback(sequelizeArray);
                
            }
                
         
            catch(error) {
                
                console.log(error);
                
                callback([{
                    id: 0, 
                    name: "Meal does not exist"
                }]);
                
                
          }
            
            
        }).catch(function(error) {

            console.log("In catch with Error: ");
            console.log(error);
            callback(error);

        });


        console.log('Inside mealsSequelizeDao.findMealByChar');



    },

   
};

module.exports = mealsSequelizeDao;