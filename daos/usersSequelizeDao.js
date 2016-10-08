var userModel = require('../models/User.js');



var usersSequelizeDao = {
    
    findAllUsers: function(callback) {


        userModel.findAll({
            attributes: ['firstName', 'lastName', 'email', 'password', 'birthdate','sex','height', 'weight','active'],
            

        }).then(function(sequelizeArray) {
        
            console.log("DAO - All Users: ");
            console.log(sequelizeArray[0].dataValues);  //  call return a special Array with dataValues as a payload
            console.log(sequelizeArray[1].dataValues);  //  call return a special Array with dataValues as a payload
            callback(sequelizeArray);
        });


        console.log('Inside usersSequelizeDao.findAllUsers');



    },


    findUserByEmail: function(userEmail,callback) {


        userModel.findOne({
            attributes: ['firstName', 'lastName', 'email', 'password', 'birthdate','sex','height', 'weight','active'],
            where: {
                email: userEmail

            }

        }).then(function(sequelizeObject) {
            
            console.log("DAO - User: ");
            console.log(sequelizeObject.dataValues);
            callback(sequelizeObject);
        });


        console.log('Inside usersSequelizeDao.findUserByEmail');



    }
};

module.exports = usersSequelizeDao;