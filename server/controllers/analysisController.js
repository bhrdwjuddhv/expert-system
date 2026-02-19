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
      const risks = riskEngine.classify(phenotypes, drugs);

      // 5️⃣ Generate LLM explanations
      const explanations = await llmService.explain(risks);

      // Merge explanations into risks
      const finalResults = {
        ...risks,
        llm_generated_explanation: explanations,
      };

      // 6️⃣ Save to MongoDB
      const analysis = await Analysis.create({
        uploadId,
        drugs,
        results: finalResults,
        createdAt: new Date(),
      });

      // 7️⃣ Return results
      return res.status(200).json({
        analysisId: analysis._id,
        results: finalResults,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: true,
        message: "Analysis failed",
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

export default analysisController;
