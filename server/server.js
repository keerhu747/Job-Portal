/*import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import db from "./src/config/db.js";

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ==============================
// 🔐 ADMIN REGISTER (Auto Hash)
// ==============================
app.post("/admin/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    // Check if admin already exists
    db.query("SELECT * FROM admin WHERE email = ?", [email], async (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length > 0) {
        return res.status(400).json({ message: "Admin already exists" });
      }

      // Hash password automatically
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert into DB
      db.query(
        "INSERT INTO admin (email, password) VALUES (?, ?)",
        [email, hashedPassword],
        (err, result) => {
          if (err) return res.status(500).json(err);

          res.json({ message: "Admin Registered Successfully" });
        }
      );
    });
  } catch (error) {
    res.status(500).json(error);
  }
});


// ==============================
// 🔐 ADMIN LOGIN
// ==============================
app.post("/admin/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  db.query("SELECT * FROM admin WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(401).json({ message: "Admin not found" });
    }

    const admin = result[0];

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  });
});
*/

// ==============================
// 🚀 START SERVER
// ==============================
import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import bcrypt from "bcrypt";
import authRoutes from "./src/routes/authRoutes.js";
import profileRoutes from "./src/routes/userprofileRoutes.js";
import adminRoutes from "./src/routes/adminroutes.js";



import "./src/models/userModel.js";
import "./src/models/userProfileModel.js";
import Admin from "./src/models/adminmodel.js";


const app = express();

// ✅ enable CORS
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/admin", adminRoutes);
// database
sequelize.sync()
.then(async () => {
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
