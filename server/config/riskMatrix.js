// server/config/riskMatrix.js

const riskMatrix = {
  CODEINE: {
    CYP2D6: {
      "Poor Metabolizer": {
        label: "Ineffective",
        severity: "high",
        recommendation:
          "Avoid codeine due to reduced conversion to morphine. Consider alternative analgesics such as morphine or non-opioid options.",
      },

      "Intermediate Metabolizer": {
        label: "Adjust Dosage",
        severity: "moderate",
        recommendation:
          "Reduced efficacy possible. Monitor pain response and consider dose adjustment.",
      },

      "Normal Metabolizer": {
        label: "Safe",
        severity: "none",
        recommendation:
          "Standard dosing recommended.",
      },

      "Rapid Metabolizer": {
        label: "Adjust Dosage",
        severity: "moderate",
        recommendation:
          "Monitor for signs of opioid toxicity.",
      },

      "Ultra Rapid Metabolizer": {
        label: "Toxic",
        severity: "critical",
        recommendation:
          "Avoid codeine. Increased morphine formation may lead to life-threatening toxicity.",
      }
    }
  },

  WARFARIN: {
    CYP2C9: {
      "Poor Metabolizer": {
        label: "Adjust Dosage",
        severity: "high",
        recommendation:
          "Reduce starting dose by 25-50%. Monitor INR closely.",
      },

      "Intermediate Metabolizer": {
        label: "Adjust Dosage",
        severity: "moderate",
        recommendation:
          "Consider reduced starting dose and close INR monitoring.",
      },

      "Normal Metabolizer": {
        label: "Safe",
        severity: "none",
        recommendation:
          "Standard dosing recommended.",
      }
    }
  },

  CLOPIDOGREL: {
    CYP2C19: {
      "Poor Metabolizer": {
        label: "Ineffective",
        severity: "high",
        recommendation:
          "Avoid clopidogrel. Consider alternative antiplatelet therapy (e.g., prasugrel or ticagrelor).",
      },

      "Intermediate Metabolizer": {
        label: "Adjust Dosage",
        severity: "moderate",
        recommendation:
          "Reduced activation possible. Consider alternative therapy depending on clinical context.",
      },

      "Normal Metabolizer": {
        label: "Safe",
        severity: "none",
        recommendation:
          "Standard dosing recommended.",
      },

      "Rapid Metabolizer": {
        label: "Safe",
        severity: "none",
        recommendation:
          "Standard dosing appropriate.",
      }
    }
  },

  SIMVASTATIN: {
    SLCO1B1: {
      "Low Function": {
        label: "Toxic",
        severity: "high",
        recommendation:
          "Avoid high-dose simvastatin due to increased risk of myopathy. Consider alternative statin.",
      },

      "Decreased Function": {
        label: "Adjust Dosage",
        severity: "moderate",
        recommendation:
          "Use lower dose and monitor for muscle toxicity.",
      },

      "Normal Function": {
        label: "Safe",
        severity: "none",
        recommendation:
          "Standard dosing recommended.",
      }
    }
  },

  AZATHIOPRINE: {
    TPMT: {
      "Poor Metabolizer": {
        label: "Toxic",
        severity: "critical",
        recommendation:
          "Avoid azathioprine due to high risk of severe myelosuppression.",
      },

      "Intermediate Metabolizer": {
        label: "Adjust Dosage",
        severity: "high",
        recommendation:
          "Start with reduced dose and monitor blood counts frequently.",
      },

      "Normal Metabolizer": {
        label: "Safe",
        severity: "none",
        recommendation:
          "Standard dosing recommended.",
      }
    }
  },

  FLUOROURACIL: {
    DPYD: {
      "Poor Metabolizer": {
        label: "Toxic",
        severity: "critical",
        recommendation:
          "Avoid fluorouracil due to high risk of severe toxicity.",
      },

      "Intermediate Metabolizer": {
        label: "Adjust Dosage",
        severity: "high",
        recommendation:
          "Reduce dose significantly and monitor closely.",
      },

      "Normal Metabolizer": {
        label: "Safe",
        severity: "none",
        recommendation:
          "Standard dosing recommended.",
      }
    }
  }
};

export default riskMatrix;
