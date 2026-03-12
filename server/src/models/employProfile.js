import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Employer = sequelize.define("Employer", {
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  companySize: {
    type: DataTypes.STRING
  },
  companyName: {
    type: DataTypes.STRING
  },
  aboutCompany: {
    type: DataTypes.TEXT
  },
  role: {
    type: DataTypes.STRING
  }
});

export default Employer;