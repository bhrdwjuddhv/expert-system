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

      if (!analysis.results || !Array.isArray(analysis.results)) {
        return res.status(404).json({
          error: true,
          message: "Analysis not found",
        });
      }
      console.log(analysis.results);
      if (!analysis.results) {
        return res.status(400).json({
          error: true,
          message: "Invalid analysis results structure",
        });
      }

      // 2️⃣ Build structured clinical summary
      const summaryContext = analysis.results
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
You are a friendly clinical pharmacogenomics assistant.

Below is the patient's genetic medication summary:

${summaryContext}

Question:
${question}

Instructions:
- Answer in simple, patient-friendly language.
- Maximum 120 words.
- Do not use headings.
- Do not sound academic.
- Do not mention contradictions.
- Only use the genetic data provided.
- If the drug is safe, clearly say it is safe.
- If there is a risk, explain it simply.

Keep it clear, calm, and easy to understand.
`;


      // 4️⃣ Call Gemini
      const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: prompt,
  generationConfig: {
    maxOutputTokens: 250,
    temperature: 0.4
  }
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