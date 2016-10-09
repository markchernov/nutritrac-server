const userModel = require('../models/User.js');



const usersSequelizeDao = {

    findAllUsers: function(callback) {


        userModel.findAll({
            attributes: ['firstName', 'lastName', 'email', 'password', 'birthdate', 'sex', 'height', 'weight', 'active'],


        }).then(function(sequelizeArray) {

            console.log("DAO - All Users: ");
            console.log(sequelizeArray[0].dataValues); //  call return a special Array with dataValues as a payload
            console.log(sequelizeArray[1].dataValues); 
            callback(sequelizeArray);
            
        }).catch(function(error) {

            console.log("In catch with Error: " + error);
            callback(error);

        });


        console.log('Inside usersSequelizeDao.findAllUsers');



    },


    findUserByEmail: function(userEmail, callback) {


        userModel.findOne({
            attributes: ['firstName', 'lastName', 'email', 'password', 'birthdate', 'sex', 'height', 'weight', 'active'],
            where: {
                email: userEmail

            }

        }).then(function(sequelizeObject) {

            console.log("DAO - User: ");

            if (sequelizeObject != null) {

                console.log(sequelizeObject.dataValues);
                var fullEmail = sequelizeObject.get('email');
                console.log("DAO - User Email: " + fullEmail);
                callback(sequelizeObject);

            }
            else {

                callback({
                    message: "User does not exist"
                });
            }


        }).catch(function(error) {

            console.log("In catch with Error: ");
            console.log(error);
            callback(error);

        });


        console.log('Inside usersSequelizeDao.findUserByEmail');



    },

    createUser: function(userObject, callback) {


        userModel.create({
            attributes: ['firstName', 'lastName', 'email', 'password', 'birthdate', 'sex', 'height', 'weight', 'active'],
            email: userObject.email,
            firstName: userObject.firstName,
            lastName: userObject.lastName,
            password: userObject.password,
            birthdate: userObject.birthDate,
            height: userObject.height,
            weight: userObject.weight,
            active: userObject.active,


        }).then(function(sequelizeResponse) {

            console.log("DAO - Create User Success: ");
            console.log(sequelizeResponse.dataValues);
            callback(sequelizeResponse.dataValues);

        }).catch(function(error) {

            console.log("In catch with Error: " + error);
            callback(error);

        });

        console.log('Inside usersSequelizeDao.createUser');
    },
    
    updateUser: function(userParam, userObject, callback) {


         console.log("DAO updateUser() userParam: ");
         console.log(userParam);


        userModel.update({
            attributes: ['firstName', 'lastName',  'password', 'birthdate', 'sex', 'height', 'weight', 'active'],
            firstName: userObject.firstName,
            lastName: userObject.lastName,
            password: userObject.password,
            birthdate: userObject.birthdate,
            sex: userObject.sex,
            height: userObject.height,
            weight: userObject.weight,
            active: userObject.active, }, {
            
            where: {
                email: userParam
            }
            

        }).then(function(sequelizeResponse) {

            console.log("DAO - Update User Success: ");
            console.log(sequelizeResponse);
            
            callback({
                    message: "User updated"
                });

        }).catch(function(error) {

            console.log("In catch with Error: " + error);
            callback(error);

        });

        console.log('Inside usersSequelizeDao.updateUser');
    },
    
        deleteUser: function(userParam, callback) {


         console.log("DAO deleteUser() userParam: ");
         console.log(userParam);


        userModel.destroy({
      
            where: {
                email: userParam
            }
            

        }).then(function(sequelizeResponse) {

            console.log("DAO - Delete User Success: ");
            console.log(sequelizeResponse);
            
            callback({
                    message: "User deleted"
                });

        }).catch(function(error) {

            console.log("In catch with Error: " + error);
            callback(error);

        });

        console.log('Inside usersSequelizeDao.deleteUser');
    },
};

module.exports = usersSequelizeDao;