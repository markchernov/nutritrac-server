"use strict";

const nutrientModel = require('../models/Nutrient.js');



const nutrientsSequelizeDao = {


    findNutrientByFoodNdbno: function(foodNdbno,  callback) {


        console.log('DAO findNutrientByFoodNdbno  foodNdbno: ');
        console.log(foodNdbno);

        nutrientModel.findAll({
            attributes: ['id','nutrient_id', 'name', 'grp', 'unit', 'value', 'ndbno'],
                             where: {
                    
                            ndbno: foodNdbno
                      
            }

        }).then(function(sequelizeObject) {

            console.log("DAO - Nutrients: ");

            if (sequelizeObject != null) {

                console.log(sequelizeObject[0].dataValues);
                callback(sequelizeObject);

            }
            else {

                callback([{
                    nutrient_id : 0,
                    name: "Nutrient does not exist"
                }]);
            }


        }).catch(function(error) {

            console.log("In catch with Error: ");
            console.log(error);
            callback(error);

        });


        console.log('Inside nutrientsSequelizeDao. findNutrientByNdbno');



    },



};

module.exports = nutrientsSequelizeDao;