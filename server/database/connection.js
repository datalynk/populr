
var Sequelize = require('sequelize');

var uri = process.env.HEROKU_POSTGRESQL_AMBER_URL || 'postgres://localhost:5432/yourname';
var sql = new Sequelize(uri, {
  logging: false
});

module.exports = sql;
