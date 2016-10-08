// require library
var Sequelize = require("sequelize");
// save connection
var sequelizeConnection = new Sequelize('c9','markche','', {
    
    host: 'localhost',
    dialect: 'mysql',
    
    
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});



// export connection
module.exports = sequelizeConnection;
