// server/models/Analysis.js

import mongoose from "mongoose";

// ===============================
// Nested Schemas
// ===============================

const DetectedVariantSchema = new mongoose.Schema(
  {
    rsid: String,
  },
  { _id: false }
);

const RiskAssessmentSchema = new mongoose.Schema(
  {
    risk_label: { type: String, required: true },
    confidence_score: { type: Number, required: true },
    severity: { type: String, required: true },
  },
  { _id: false }
);

const PharmacogenomicProfileSchema = new mongoose.Schema(
  {
    primary_gene: { type: String, required: true },
    diplotype: { type: String },
    phenotype: { type: String },
    detected_variants: [DetectedVariantSchema],
  },
  { _id: false }
);

const LLMExplanationSchema = new mongoose.Schema(
  {
    summary: { type: String },
  },
  { _id: false }
);

const QualityMetricsSchema = new mongoose.Schema(
  {
    vcf_parsing_success: { type: Boolean, required: true },
  },
  { _id: false }
);

const ResultSchema = new mongoose.Schema(
  {
    patient_id: { type: String, required: true },
    drug: { type: String, required: true },
    timestamp: { type: String, required: true },

    risk_assessment: { type: RiskAssessmentSchema, required: true },

    pharmacogenomic_profile: {
      type: PharmacogenomicProfileSchema,
      required: true,
    },

    clinical_recommendation: {
      type: Object,
      default: {},
    },

    llm_generated_explanation: {
      type: LLMExplanationSchema,
      required: true,
    },

    quality_metrics: {
      type: QualityMetricsSchema,
      required: true,
    },
  },
  { _id: false }
);

// ===============================
// Main Analysis Schema
// ===============================

const AnalysisSchema = new mongoose.Schema({
  patient_id: {
    type: String,
    required: true,
  },

  upload_date: {
    type: Date,
    default: Date.now,
  },

  results: [ResultSchema],
});

const Analysis = mongoose.model("Analysis", AnalysisSchema);

export default Analysis;