import bcrypt from "bcrypt";
import Admin from "../models/adminmodel.js";

// Create admin (store credentials)
export const createAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      email,
      password: hashedPassword
    });

    res.json({
      message: "Admin created",
      admin
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

// Login admin
export const adminLogin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({
      where: { email }
    });

    if (!admin) {
      return res.status(401).json({
        message: "Admin not found"
      });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    res.json({
      message: "Login successful",
      admin: {
        id: admin.id,
        email: admin.email
      }
    });
    console.log("Entered password:", password);
    console.log("Stored password:", admin.password);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};