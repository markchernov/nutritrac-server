 /*  
# start MySQL. Will create an empty database on first start
$ mysql-ctl start

# stop MySQL
$ mysql-ctl stop

# run the MySQL interactive shell
$ mysql-ctl cli

Hostname - $IP (The same local IP as the application you run on Cloud9)
Port - 3306 (The default MySQL port number)
User - $C9_USER (Your Cloud9 user name)
Password - "" (No password since you can only access the DB from within the workspace)
Database - c9 (The database username)

select @@hostname;
*/
var Sequelize = require("sequelize");
var sequelize = new Sequelize('c9','markche','', {
    
    host: 'localhost',
    dialect: 'mysql',
    
    
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    
    
    
    
});

var User = sequelize.define('user', {
    
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
  
}, // end fields 

{

  freezeTableName: true, // Model tableName will be the same as the model name
  tableName: 'user'

,
  

  getterMethods   : {
    getFullName       : function()  { return this.firstName + ' ' + this.lastName }
  },   // end getter
  
});



User.findAll({
    attributes: ['firstName','lastName', 'email'],
    where: {
        email: "mark.chernov@gmail.com"

    }

}).then(function(user) {
    //console.log(user.get('email'));
    console.log(user);
    console.log(user[0].dataValues.email);
});