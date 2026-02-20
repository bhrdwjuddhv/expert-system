import vcfParser from "../engines/vcfParser.js";
import starAlleleResolver from "../engines/starAlleleResolver.js";
import phenotypeMapper from "../engines/phenotypeMapper.js";
import riskEngine from "../engines/riskEngine.js";
import llmService from "../services/llmService.js";
import Analysis from "../models/Analysis.js";

const analysisController = {
  // ===============================
  // MAIN ANALYSIS PIPELINE
  // ===============================
  async analyze(req, res) {
    try {
      const { uploadId, drugs } = req.body;

      if (!uploadId || !drugs) {
        return res.status(400).json({
          error: true,
          message: "uploadId and drugs are required",
        });
      }

      // 1️⃣ Parse VCF
      const variants = await vcfParser.parse(uploadId);

      // 2️⃣ Resolve diplotypes
      const diplotypes = starAlleleResolver.resolve(variants);

      // 3️⃣ Map phenotypes
      const phenotypes = phenotypeMapper.map(diplotypes);

      // 4️⃣ Classify risks
      const riskResult = riskEngine.classify(phenotypes, drugs);
      const resultsArray = riskResult.drug_results;

      // 5️⃣ Generate LLM explanations
      const explainedResults = await llmService.explain(resultsArray);

      // 6️⃣ Create patient ID
      const patientId = `PATIENT_${Date.now()}`;

      // 7️⃣ Transform into REQUIRED STRUCTURE
      const formattedResults = explainedResults.map((r) => ({
        patient_id: patientId,
        drug: r.drug,
        timestamp: new Date().toISOString(),

        risk_assessment: {
          risk_label: r.risk_label,
          confidence_score: r.confidence_score || 0.9,
          severity: r.severity || "none",
        },

        pharmacogenomic_profile: {
          primary_gene: r.gene,
          diplotype: r.diplotype || "Unknown",
          phenotype: convertPhenotypeShort(r.phenotype),
          detected_variants: (r.variants || []).map((v) => ({
            rsid: v.rsid || "Unknown",
          })),
        },

        clinical_recommendation:
          r.clinical_recommendation || {},

        llm_generated_explanation: {
          summary:
            r.llm_explanation || "No explanation available.",
        },

        quality_metrics: {
          vcf_parsing_success: true,
        },
      }));

      // 8️⃣ Save formatted structure to MongoDB
      const analysis = await Analysis.create({
        patient_id: patientId,
        results: formattedResults,
      });

      // 9️⃣ Return formatted output
      return res.status(200).json({
        analysisId: analysis._id,
        results: formattedResults,
      });

    } catch (error) {
      console.error("FULL ERROR:", error);
      return res.status(500).json({
        error: true,
        message: error.message,
        stack: error.stack,
      });
    }
  },

  // ===============================
  // GET RESULTS BY ID
  // ===============================
  async getResults(req, res) {
    try {
      const { id } = req.params;

      const analysis = await Analysis.findById(id);

      if (!analysis) {
        return res.status(404).json({
          error: true,
          message: "Analysis not found",
        });
      }

      return res.status(200).json({
        analysisId: analysis._id,
        results: analysis.results,
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: true,
        message: "Failed to retrieve results",
      });
    }
  },
};

// ===============================
// HELPER FUNCTIONS
// ===============================

function convertPhenotypeShort(phenotype) {
  const map = {
    "Poor Metabolizer": "PM",
    "Intermediate Metabolizer": "IM",
    "Normal Metabolizer": "NM",
    "Rapid Metabolizer": "RM",
    "Ultra Rapid Metabolizer": "URM",
  };

  return map[phenotype] || "Unknown";
}

export default analysisController;