// server/models/Analysis.js

import mongoose from "mongoose";

const VariantSchema = new mongoose.Schema(
  {
    rsid: String,
    alt: String,
  },
  { _id: false }
);

const ResultSchema = new mongoose.Schema(
  {
    drug: { type: String, required: true },
    gene: { type: String, required: true },

    risk_label: { type: String, required: true },
    severity: { type: String },
    confidence: { type: Number },

    diplotype: { type: String },
    phenotype: { type: String },

    variants: [VariantSchema],

    clinical_recommendation: { type: String },
    llm_explanation: { type: String },
  },
  { _id: false }
);

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
