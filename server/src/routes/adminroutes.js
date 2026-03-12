import express from "express";
import { saveAdminProfile } from "../controllers/adminController.js";

const router = express.Router();

router.post("/save-profile", saveAdminProfile);

export default router;