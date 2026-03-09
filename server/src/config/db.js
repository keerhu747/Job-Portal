const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "jobportal",     // database name
  "root",          // mysql username
  "password",      // mysql password
  {
    host: "localhost",
    dialect: "mysql"
  }
);

module.exports = sequelize;