import { GoogleGenAI } from "@google/genai";
import Analysis from "../models/Analysis.js";
import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const chatController = {
  async handleChat(req, res) {
    try {
      const { analysisId, question } = req.body;
        console.log(analysisId);
        console.log(question);
      if (!analysisId || !question) {
        return res.status(400).json({
          error: true,
          message: "analysisId and question are required",
        });
      }

      // 1️⃣ Fetch analysis
      const analysis = await Analysis.findById(analysisId);

      if (!analysis) {
        return res.status(404).json({
          error: true,
          message: "Analysis not found",
        });
      }

      if (!analysis.results || !analysis.results.drug_results) {
        return res.status(400).json({
          error: true,
          message: "Invalid analysis results structure",
        });
      }

      // 2️⃣ Build structured clinical summary
      const summaryContext = analysis.results.drug_results
        .map(
          (r) => `
Drug: ${r.drug}
Gene: ${r.gene}
Phenotype: ${r.phenotype}
Risk: ${r.risk_label}
Severity: ${r.severity}
`
        )
        .join("\n");

      // 3️⃣ Build safe clinical prompt
      const prompt = `
You are a clinical pharmacogenomics assistant.

Below is a structured summary of the patient's pharmacogenomic results:

${summaryContext}

Clinical Question:
${question}

Instructions:
- Be medically accurate.
- Only use the genetic information provided above.
- Do NOT fabricate new genes, variants, or results.
- If information is insufficient, clearly state that.
- Provide explanation under these sections:

1. Interpretation
2. Clinical Implication
3. Recommendation (if applicable)

Keep the response professional and concise.
`;

      // 4️⃣ Call Gemini
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      // Safe extraction of text
      const answer =
        response?.text ||
        response?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response generated.";

      // 5️⃣ Return result
      res.status(200).json({ answer });

    } catch (error) {
      console.error("Chat Error:", error);
      res.status(500).json({
        error: true,
        message: "Chat processing failed",
      });
    }
  },
};

export default chatController;