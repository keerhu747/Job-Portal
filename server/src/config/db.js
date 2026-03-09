import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
  "job-portal",
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql"
  }
);

export default sequelize;