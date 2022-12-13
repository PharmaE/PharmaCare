import express from "express";
import { addMedicalInfo } from "../controllers/medicalInfo.js";
const router = express.Router();


router.post("/addMedicalInfo", addMedicalInfo);

export default router;