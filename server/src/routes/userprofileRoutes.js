import express from "express";
import { createUserProfile, updateUserProfile, getUserProfile } from "../controllers/userprofileControllres.js";

const router = express.Router();

router.post("/create", createUserProfile);
router.put("/update/:userId", updateUserProfile);
router.get("/:userId", getUserProfile);

export default router;