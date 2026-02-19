import express from "express";
import uploadController from "../controllers/uploadController.js";
import analysisController from "../controllers/analysisController.js";
import chatController from "../controllers/chatController.js";
import upload from "../middleware/upload.middleware.js";
const router = express.Router();

router.post("/upload", upload.single("vcfFile"), uploadController.handleUpload);
router.post("/analyze", analysisController.analyze);
router.get("/results/:id", analysisController.getResults);
router.post("/chat", chatController.handleChat);

export default router;
