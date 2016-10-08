var sequelizeConnection = require('../connection.js');
var Sequelize = require("sequelize");


var userModel = sequelizeConnection.define('user', {
    
  email: {
    type: Sequelize.STRING,
    field: 'email',
  /* get      : function()  {
      var fname = this.getDataValue('firstName');
      // 'this' allows you to access attributes of the instance
      return this.getDataValue('email') + ' (' + fname + ')';
    }*/
  }, 
  firstName: {
    type: Sequelize.STRING,
    field: 'firstname' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'lastname'
  }, 
  password: {
    type: Sequelize.STRING,
    field: 'password' 
  }, 
  birthdate: {
    type: Sequelize.DATE,
    field: 'birthdate' 
  },
    height: {
    type: Sequelize.INTEGER,
    field: 'height' 
  },
    weight: {
    type: Sequelize.INTEGER,
    field: 'weight' 
  },
    active: {
    type: Sequelize.INTEGER,
    field: 'active' 
  }, 
  
},  // end user fields

 {

  freezeTableName: true, // Model tableName will be the same as the model name
  tableName: 'user'

  

//   getterMethods   : {
//     getFullName       : function()  { return this.firstName + ' ' + this.lastName }
//   },   // end getter
  
}  // end options


);



module.exports = userModel;