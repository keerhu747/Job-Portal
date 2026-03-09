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
import sequelize from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";

import "./src/models/userModel.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

sequelize.sync()
.then(() => {
  console.log("Database connected & tables created");
})
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});