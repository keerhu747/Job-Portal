
import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import bcrypt from "bcrypt";
import authRoutes from "./src/routes/authRoutes.js";
<<<<<<< HEAD
import jobRoutes from "./src/routes/jobRoutes.js";
import employerRoutes from "./src/routes/employerRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
=======
import profileRoutes from "./src/routes/userprofileRoutes.js";
import adminRoutes from "./src/routes/adminroutes.js";
>>>>>>> f80e8b0364ca4c3f9d5ed16ccb22f2d467091418



import "./src/models/userModel.js";
<<<<<<< HEAD
import "./src/models/jobModel.js";
import "./src/models/employProfile.js";
import "./src/models/employSettings.js";
import "./src/models/adminModel.js";
=======
import "./src/models/userProfileModel.js";
import Admin from "./src/models/adminmodel.js";
>>>>>>> f80e8b0364ca4c3f9d5ed16ccb22f2d467091418


const app = express();

<<<<<<< HEAD
// middleware
app.use(cors()); 
=======
// ✅ enable CORS
app.use(cors({
  origin: "http://localhost:5173"
}));

>>>>>>> f80e8b0364ca4c3f9d5ed16ccb22f2d467091418
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
<<<<<<< HEAD
app.use("/api/jobs", jobRoutes);
app.use("/api/employer", employerRoutes);
app.use("/api/admin",adminRoutes);


// database connection
sequelize.sync({ alter : true})
.then(() => {
=======
app.use("/api/profile", profileRoutes);
app.use("/api/admin", adminRoutes);
// database
sequelize.sync()
.then(async () => {
>>>>>>> f80e8b0364ca4c3f9d5ed16ccb22f2d467091418
  console.log("Database connected & tables created");

  const existingAdmin = await Admin.findOne({
    where: { email: "admin@gmail.com" }
  });

 if (!existingAdmin) {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@gmail.com",
    password: hashedPassword
  });

  console.log("Admin created");
}   else {

    console.log("Admin already exists");

  }
})

.catch(err => console.log(err));

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
