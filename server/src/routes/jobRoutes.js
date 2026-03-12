import express from "express";
import { createJob, updateJobStep2 } from "../controllers/jobController.js";

const router = express.Router();

router.post("/create", createJob);

router.put("/update-step2/:id", updateJobStep2);

export default router;