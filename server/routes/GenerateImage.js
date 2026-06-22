import express from "express";
import { generateAIImage } from "../controllers/GenerateAIImage.js";

const router = express.Router();

router.get("/", generateAIImage);

export default router;