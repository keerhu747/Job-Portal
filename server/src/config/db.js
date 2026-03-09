const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("talentpoint", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;