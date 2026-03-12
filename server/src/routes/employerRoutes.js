import express from "express";
import { createEmployer, saveEmpSettings } from "../controllers/employController.js";

const router = express.Router();

router.post("/create-employer", createEmployer);

router.post("/save-settings", saveEmpSettings);

export default router;