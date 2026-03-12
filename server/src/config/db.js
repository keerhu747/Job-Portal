import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
  "jobportal",
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql"
  }
);

export default sequelize;