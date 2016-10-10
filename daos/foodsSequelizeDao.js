const foodModel = require('../models/Food.js');



const foodsSequelizeDao = {
    

    findAllFoods: function(callback) {


        foodModel.findAll({
            attributes: ['ndbno', 'name'],


        }).then(function(sequelizeArray) {

            console.log("DAO - All Foods: ");
            console.log(sequelizeArray[0].dataValues); //  call return a special Array with dataValues as a payload
            console.log(sequelizeArray[1].dataValues); 
            callback(sequelizeArray);
            
        }).catch(function(error) {

            console.log("In catch with Error: " + error);
            callback(error);

        });


        console.log('Inside usersSequelizeDao.findAllFoods');



    },


    findFoodByNdbno: function(foodNdbno, callback) {


        foodModel.findOne({
            attributes: ['ndbno', 'name'],
            where: {
                ndbno: foodNdbno

            }

        }).then(function(sequelizeObject) {

            console.log("DAO - Food: ");

            if (sequelizeObject != null) {

                console.log(sequelizeObject.dataValues);
                var fullNdbno = sequelizeObject.get('ndbno');
                console.log("DAO - Food Ndbno: " + fullNdbno);
                callback(sequelizeObject);

            }
            else {

                callback({
                    message: "Food does not exist"
                });
            }


        }).catch(function(error) {

            console.log("In catch with Error: ");
            console.log(error);
            callback(error);

        });


        console.log('Inside usersSequelizeDao.findFoodByNdbno');



    },

   
};

module.exports = foodsSequelizeDao;