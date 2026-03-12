import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Admin = sequelize.define("Admin", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  timezone: DataTypes.STRING
});

export default Admin;