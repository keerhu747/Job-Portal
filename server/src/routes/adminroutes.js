import express from "express";
import { adminLogin, createAdmin } from "../controllers/admincontroller.js";

const router = express.Router();

router.post("/create-admin", createAdmin);
router.post("/login", adminLogin);

export default router;