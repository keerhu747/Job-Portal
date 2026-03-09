const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");
const User = require("./models/usermodel");

const app = express();

app.use(cors());
app.use(express.json());

sequelize.sync()
.then(()=>{
    console.log("Database Connected");
})
.catch(err=>{
    console.log(err);
});

app.post("/register", async (req,res)=>{

  const { firstName, lastName, email, password } = req.body;

  const user = await User.create({
    firstName,
    lastName,
    email,
    password
  });

  res.json(user);

});

module.exports = app;