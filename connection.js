var Sequelize = require("sequelize");

module.exports = function() {
  this.connection = null;

  var getConnection = function() {
    if (!this.connection) {
      this.connection = new Sequelize('test', 'root', '', {
          host: "localhost",
          port: 3306,
          dialect: 'mysql'
      });
    }
    return this.connection;
  };

  return {
    getConnection : getConnection
  };

};