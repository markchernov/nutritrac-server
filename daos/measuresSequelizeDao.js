"use strict";

const measureModel = require('../models/Measure.js');



const measuresSequelizeDao = {


    findMeasureByFoodNdbno: function(foodNdbno, callback) {


        measureModel.findAll({
            attributes: ['id', 'label', 'eqv', 'value', 'ndbno_id', 'nutrient_id'],
            where: {
                ndbno_id: foodNdbno

            }

        }).then(function(sequelizeObject) {

            console.log("DAO - Measure: ");

            if (sequelizeObject != null) {

                console.log(sequelizeObject.dataValues);
                callback(sequelizeObject);

            }
            else {

                callback({
                    message: "Measure does not exist"
                });
            }


        }).catch(function(error) {

            console.log("In catch with Error: ");
            console.log(error);
            callback(error);

        });


        console.log('Inside usersSequelizeDao.findMeasureByFoodNdbno');



    },


    findMeasuresLabelsByFoodNdbno: function(foodNdbno, callback) {


        measureModel.findAll({
            attributes: ['label'],
            where: {
                ndbno_id: foodNdbno

            },
            group: ['label']

        }).then(function(sequelizeObject) {

            console.log("DAO - Measure: ");

            if (sequelizeObject != null) {

                console.log(sequelizeObject.dataValues);
                callback(sequelizeObject);

            }
            else {

                callback({
                    message: "Measure does not exist"
                });
            }


        }).catch(function(error) {

            console.log("In catch with Error: ");
            console.log(error);
            callback(error);

        });


        console.log('Inside usersSequelizeDao.findMeasuresLabelsByFoodNdbno');



    },



};

module.exports = measuresSequelizeDao;