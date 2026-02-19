import { Groq } from "groq-sdk";
import dotenv from 'dotenv'

dotenv.config();
console.log(process.env.GROQ_API_KEY);


const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL = "moonshotai/kimi-k2-instruct";

const llmService = {
  async explain(results) {
    const prompt = buildPrompt(results);

    try {
      const completion = await groq.chat.completions.create({
        model: MODEL,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.6,
        max_completion_tokens: 1000,
        top_p: 1,
      });

      const rawText = completion.choices[0]?.message?.content || "";

      // Extract JSON safely
      const parsed = safeJsonParse(rawText);

      const explanations = parsed?.explanations || [];

      return results.map((r) => ({
        ...r,
        llm_explanation:
          explanations.find(
            (e) => e.drug === r.drug && e.gene === r.gene
          )?.explanation || getFallback(r.risk_label),
      }));

    } catch (error) {
      console.error("LLM Explain Error:", error);

      // Fallback
      return results.map((r) => ({
        ...r,
        llm_explanation: getFallback(r.risk_label),
      }));
    }
  },

  async chat(question, results) {
    const context = results
      .map((r) => `${r.drug} (${r.gene}): ${r.risk_label}`)
      .join("\n");

    try {
      const completion = await groq.chat.completions.create({
        model: MODEL,
        messages: [
          {
            role: "system",
            content:
              "You are a genetic counselor answering questions about pharmacogenomic results.",
          },
          {
            role: "user",
            content: `Context:\n${context}\n\nQuestion: ${question}`,
          },
        ],
        temperature: 0.6,
        max_completion_tokens: 500,
      });

      return completion.choices[0]?.message?.content || "No response.";

    } catch (error) {
      console.error("LLM Chat Error:", error);
      return "Unable to generate response at this time.";
    }
  },
};

export default llmService;

/* =============================
   HELPERS
============================= */

function buildPrompt(results) {
  return `
You are a genetic counselor explaining pharmacogenomic results.

Analysis Results:
${results
    .map(
      (r) => `
- Drug: ${r.drug}
- Gene: ${r.gene}
- Diplotype: ${r.diplotype}
- Phenotype: ${r.phenotype}
- Risk: ${r.risk_label}
- Recommendation: ${r.clinical_recommendation}
`
    )
    .join("\n")}

Provide a brief, plain-language explanation for each drug-gene interaction.
Keep each explanation under 150 words. Avoid medical jargon.

Return ONLY valid JSON in this exact format:

{
  "explanations": [
    { "drug": "...", "gene": "...", "explanation": "..." }
  ]
}
`;
}

function getFallback(riskLabel) {
  const fallbacks = {
    Safe:
      "Your genetic profile suggests this medication should work normally for you.",
    "Adjust Dosage":
      "Your genes may affect how this medication works. Your doctor might adjust the dose.",
    Toxic:
      "Your genetic makeup creates a higher risk with this medication. Alternatives should be considered.",
    Ineffective:
      "Your genetic profile suggests this medication may not work effectively for you.",
    Unknown:
      "There isn't enough data about how your genes affect this medication.",
  };

  return fallbacks[riskLabel] || fallbacks.Unknown;
}

function safeJsonParse(text) {
  try {
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");
    if (jsonStart !== -1 && jsonEnd !== -1) {
      return JSON.parse(text.slice(jsonStart, jsonEnd + 1));
    }
    return null;
  } catch {
    return null;
  }
}
