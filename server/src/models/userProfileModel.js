import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const UserProfile = sequelize.define("UserProfile", {
userId: {
  type: DataTypes.INTEGER,
  allowNull: false
},
  // Profile.jsx (Page 1)
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  lastName: {
    type: DataTypes.STRING
  },

  profileemail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
    isEmail: true
    }
  },

  phoneNumber: {
    type: DataTypes.STRING
  },

  location: {
    type: DataTypes.STRING
  },

  password: {
    type: DataTypes.STRING
  },

  resume: {
    type: DataTypes.STRING
  },

  // Profile2.jsx (Page 2)
  year: {
    type: DataTypes.STRING
  },

  passoutYear: {
    type: DataTypes.INTEGER
  },

  course: {
    type: DataTypes.STRING
  },

  skills: {
    type: DataTypes.TEXT
  },

  jobPreference: {
    type: DataTypes.STRING
  },

  jobLocation: {
    type: DataTypes.STRING
  },

  // Profile3.jsx (Page 3)
  totalWorkExperience: {
    type: DataTypes.STRING
  },

  startDate: {
    type: DataTypes.DATE
  },

  shift: {
    type: DataTypes.STRING
  },

  noticePeriod: {
    type: DataTypes.STRING
  },

  expectedSalaryMin: {
    type: DataTypes.INTEGER
  },

  expectedSalaryMax: {
    type: DataTypes.INTEGER
  },

  currentlyEmployed: {
    type: DataTypes.BOOLEAN
  }

},
 {
  tableName: "user_profiles"
});

export default UserProfile;