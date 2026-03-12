import express from "express";
import { createAdmin, adminLogin } from "../controllers/adminlogincontrollers.js";

const router = express.Router();

router.post("/create-admin", createAdmin);
router.post("/login", adminLogin);

export default router;