const sequelizeConnection = require('../connection.js');
const Sequelize = require("sequelize");


const nutrientModel = sequelizeConnection.define('nutrient', {

    id: {
      type: Sequelize.INTEGER,
      field: 'id',
      primaryKey: true,
      get      : function()  {
          return this.getDataValue('id');
        },
    },
    
    nutrient_id: {
      type: Sequelize.INTEGER,
      field: 'nutrient_id' 
    },
    
    name: {
      type: Sequelize.STRING,
      field: 'name' 
    },
    
    grp: {
      type: Sequelize.STRING,
      field: 'grp' 
    },
    
      unit: {
      type: Sequelize.STRING,
      field: 'unit' 
    },
    
      value: {
      type: Sequelize.STRING,
      field: 'value' 
    },
    
      ndbno: {
      type: Sequelize.INTEGER,
      field: 'ndbno' 
    },
    
  }, // end user fields

  {

    freezeTableName: true, // Model tableName will be the same as the model name
    tableName: 'nutrient',
    timestamps: false

  } // end options

);



module.exports = nutrientModel;