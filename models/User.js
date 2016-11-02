const sequelizeConnection = require('../connection.js');
const Sequelize = require("sequelize");


const userModel = sequelizeConnection.define('user', {

    email: {
      type: Sequelize.STRING,
      field: 'email',
      primaryKey: true,
      // get      : function()  {
      //     var fname = this.getDataValue('firstName');
      //     var lname = this.getDataValue('lastName');
      //     // 'this' allows you to access attributes of the instance
      //     return this.getDataValue('email') + ' of (' + fname + ' ' + lname + ')';
      //   },
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
    
    sex: {
      type: Sequelize.STRING,
      field: 'sex'
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

  }, // end user fields

  // {  // open options

  // getterMethods   : {
  //   fullName       : function()  { return this.firstName + ' ' + this.lastName }
  // },


  {

    freezeTableName: true, // Model tableName will be the same as the model name
    tableName: 'user',
    timestamps: false

  } // end options

);



module.exports = userModel;