// server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import apiRoutes from "./routes/api.js";
import mongoose from "mongoose";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.DB_URI);
// Connect MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  });

/* =============================
   MIDDLEWARE
============================= */

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);


/* =============================
   FILE UPLOAD CONFIG (VCF)
============================= */

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (!file.originalname.endsWith(".vcf")) {
      return cb(new Error("Only .vcf files are allowed"));
    }
    cb(null, true);
  },
});

/* =============================
   HEALTH CHECK ROUTE
============================= */

app.get("/health", (req, res) => {
  res.json({
    status: "PharmaGuard API is running",
    timestamp: new Date().toISOString(),
  });
});

/* =============================
   ANALYSIS ROUTE (Placeholder)
============================= */

app.post("/api/analyze", upload.single("vcfFile"), async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("VCF file is required");
    }

    const { drugs } = req.body;

    if (!drugs) {
      throw new Error("Drug name(s) required");
    }

    const patientId = `PATIENT_${uuidv4().slice(0, 8)}`;

    // Placeholder Response
    res.status(200).json({
      patient_id: patientId,
      drug: drugs,
      timestamp: new Date().toISOString(),
      risk_assessment: {
        risk_label: "Unknown",
        confidence_score: 0.5,
        severity: "moderate",
      },
      pharmacogenomic_profile: {
        primary_gene: "Unknown",
        diplotype: "Unknown",
        phenotype: "Unknown",
        detected_variants: [],
      },
      clinical_recommendation: {
        recommendation: "Pharmacogenomic analysis engine not implemented yet.",
      },
      llm_generated_explanation: {
        summary:
          "This is a placeholder explanation. VCF parsing and phenotype logic will be implemented next.",
      },
      quality_metrics: {
        vcf_parsing_success: false,
      },
    });
  } catch (error) {
    next(error);
  }
});

/* =============================
   GLOBAL ERROR HANDLER
============================= */

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(400).json({
    error: true,
    message: err.message || "Internal Server Error",
  });
});

/* =============================
   START SERVER
============================= */

app.listen(PORT, () => {
  console.log(`🚀 PharmaGuard Server running on port ${PORT}`);
});
