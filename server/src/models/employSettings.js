import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const EmpSettings = sequelize.define("EmpSettings", {
  companyName: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  },
  companyType: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  }
});

export default EmpSettings;