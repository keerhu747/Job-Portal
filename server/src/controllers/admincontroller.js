import Admin from "../models/adminModel.js";

export const saveAdminProfile = async (req, res) => {
  try {
    const { name, email, phone, timezone } = req.body;

    const admin = await Admin.create({
      name,
      email,
      phone,
      timezone
    });

    res.json({ message: "Admin profile saved", admin });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving profile" });
  }
};