const sequelizeConnection = require('../connection.js');
const Sequelize = require("sequelize");


const measureModel = sequelizeConnection.define('measure', {

    id: {
      type: Sequelize.INTEGER,
      field: 'id',
      primaryKey: true,
      get      : function()  {
          return this.getDataValue('id');
        },
    },
    label: {
      type: Sequelize.STRING,
      field: 'label' 
    },
    
    eqv: {
      type: Sequelize.FLOAT,
      field: 'eqv' 
    },
    
      qty: {
      type: Sequelize.FLOAT,
      field: 'qty' 
    },
    
      value: {
      type: Sequelize.STRING,
      field: 'value' 
    },
    
      ndbno_id: {
      type: Sequelize.INTEGER,
      field: 'ndbno_id' 
    },
    
    nutrient_id: {
      type: Sequelize.INTEGER,
      field: 'nutrient_id' 
    },
   
  }, // end user fields

  {

    freezeTableName: true, // Model tableName will be the same as the model name
    tableName: 'measure',
    timestamps: false

  } // end options

);



module.exports = measureModel;