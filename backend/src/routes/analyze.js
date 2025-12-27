import express from "express";
import { analyzeContent } from "../controllers/analyze.js";

const router = express.Router();

router.post("/", analyzeContent);

export default router;


