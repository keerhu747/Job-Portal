import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Job = sequelize.define("Job", {

  title: {
    type: DataTypes.STRING
  },

  category: {
    type: DataTypes.STRING
  },

  location: {
    type: DataTypes.STRING
  },

  email: {
    type: DataTypes.STRING
  },

  work_type: {
    type: DataTypes.STRING
  },

  description: {
    type: DataTypes.TEXT
  },

  skills: {
    type: DataTypes.TEXT
  },

  education: {
    type: DataTypes.STRING
  },

  shift: {
    type: DataTypes.STRING
  },

  closeDate: {
    type: DataTypes.DATE
  },

  minSalary: {
    type: DataTypes.STRING
  },

  maxSalary: {
    type: DataTypes.STRING
  },

  negotiable: {
    type: DataTypes.BOOLEAN
  }

});

export default Job;