const sequelizeConnection = require('../connection.js');
const Sequelize = require("sequelize");


const mealModel = sequelizeConnection.define('meal', {

    id: {
      type: Sequelize.INTEGER,
      field: 'id',
      primaryKey: true,
      get      : function()  {
          return this.getDataValue('id');
        },
    },
    name: {
      type: Sequelize.STRING,
      field: 'name' 
    },
   
  }, // end user fields

  {

    freezeTableName: true, // Model tableName will be the same as the model name
    tableName: 'meal',
    timestamps: false

  } // end options

);



module.exports = mealModel;