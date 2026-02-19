// server/engines/riskEngine.js

import riskMatrix from "../config/riskMatrix.js";

const riskEngine = {
  classify(phenotypes, drugsInput) {
    const drugs = drugsInput
      .split(",")
      .map((d) => d.trim().toUpperCase());

    const results = [];

    for (const drug of drugs) {
      const drugConfig = riskMatrix[drug];

      if (!drugConfig) {
        results.push({
          drug,
          gene: null,
          phenotype: "Unknown",
          risk_label: "Unknown",
          severity: "moderate",
          clinical_recommendation:
            "No pharmacogenomic data available for this drug.",
        });
        continue;
      }

      // Each drug maps to one gene in your matrix
      const gene = Object.keys(drugConfig)[0];

      const phenotypeData = phenotypes[gene];

      if (!phenotypeData) {
        results.push({
          drug,
          gene,
          phenotype: "Unknown",
          risk_label: "Unknown",
          severity: "moderate",
          clinical_recommendation:
            "Phenotype data unavailable for this gene.",
        });
        continue;
      }

      const phenotype = phenotypeData.phenotype;

      const geneRiskConfig = drugConfig[gene];
      const riskInfo = geneRiskConfig[phenotype];

      if (!riskInfo) {
        results.push({
          drug,
          gene,
          phenotype,
          risk_label: "Unknown",
          severity: "moderate",
          clinical_recommendation:
            "No specific guideline found for this phenotype.",
        });
        continue;
      }

      results.push({
        drug,
        gene,
        phenotype,
        risk_label: riskInfo.label,
        severity: riskInfo.severity,
        clinical_recommendation: riskInfo.recommendation,
      });
    }

    return {
      drug_results: results,
    };
  },
};

export default riskEngine;
