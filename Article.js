var Sequelize = require('Sequelize');
var connection = require('./connection')().getConnection();

var Article = connection.define('article', {
  title: Sequelize.STRING
});

module.exports = Article;