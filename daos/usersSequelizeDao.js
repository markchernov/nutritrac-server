var userModel = require('../models/User.js');



var usersSequelizeDao = {


    findUserByEmail: function(callback) {


        userModel.findAll({
            attributes: ['firstName', 'lastName', 'email'],
            where: {
                email: "mark.chernov@gmail.com"

            }

        }).then(function(user) {
            //console.log(user.get('email'));
            console.log(user);
            console.log(user[0].dataValues.email);
            callback(user[0].dataValues.email);
        });


        console.log('Inside usersSequelizeDao');



    }
};

module.exports = usersSequelizeDao;