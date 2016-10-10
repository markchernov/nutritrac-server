const sequelizeConnection = require('../connection.js');
const Sequelize = require("sequelize");


const foodModel = sequelizeConnection.define('food', {

    ndbno: {
      type: Sequelize.INTEGER,
      field: 'ndbno',
      primaryKey: true,
      get      : function()  {
          return this.getDataValue('name');
        },
    },
    name: {
      type: Sequelize.STRING,
      field: 'name' 
    },
   
  }, // end user fields

  {

    freezeTableName: true, // Model tableName will be the same as the model name
    tableName: 'food',
    timestamps: false

  } // end options

);



module.exports = foodModel;