
import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import jobRoutes from "./src/routes/jobRoutes.js";
import employerRoutes from "./src/routes/employerRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";



import "./src/models/userModel.js";
import "./src/models/jobModel.js";
import "./src/models/employProfile.js";
import "./src/models/employSettings.js";
import "./src/models/adminModel.js";


const app = express();

// middleware
app.use(cors()); 
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/employer", employerRoutes);
app.use("/api/admin",adminRoutes);


// database connection
sequelize.sync({ alter : true})
.then(() => {
  console.log("Database connected & tables created");
})
.catch(err => console.log(err));

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});