const config = require('./config.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.mysql.db, config.mysql.user, config.mysql.pass, {
  host: config.mysql.host,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    idle: 30000
  }
});

module.exports = {
  MYSQL_CLIENT: sequelize,
  STRING: Sequelize.STRING,
  INTEGER: Sequelize.INTEGER,
  SELECT: Sequelize.QueryTypes.SELECT
};