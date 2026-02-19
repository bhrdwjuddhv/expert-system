// server/config/phenotypeMaps.js

const phenotypeMaps = {
  CYP2D6: {
    "*1/*1": { phenotype: "Normal Metabolizer", activity: 2.0 },
    "*1/*2": { phenotype: "Normal Metabolizer", activity: 2.0 },
    "*1/*4": { phenotype: "Intermediate Metabolizer", activity: 1.0 },
    "*2/*4": { phenotype: "Intermediate Metabolizer", activity: 1.0 },
    "*4/*4": { phenotype: "Poor Metabolizer", activity: 0.0 },
    "*1/*10": { phenotype: "Intermediate Metabolizer", activity: 1.5 },
    "*10/*10": { phenotype: "Intermediate Metabolizer", activity: 1.0 }
  },

  CYP2C19: {
    "*1/*1": { phenotype: "Normal Metabolizer", activity: 2.0 },
    "*1/*2": { phenotype: "Intermediate Metabolizer", activity: 1.0 },
    "*2/*2": { phenotype: "Poor Metabolizer", activity: 0.0 },
    "*1/*17": { phenotype: "Rapid Metabolizer", activity: 2.5 },
    "*17/*17": { phenotype: "Ultra Rapid Metabolizer", activity: 3.0 }
  },

  CYP2C9: {
    "*1/*1": { phenotype: "Normal Metabolizer", activity: 2.0 },
    "*1/*2": { phenotype: "Intermediate Metabolizer", activity: 1.5 },
    "*1/*3": { phenotype: "Intermediate Metabolizer", activity: 1.0 },
    "*2/*3": { phenotype: "Poor Metabolizer", activity: 0.5 },
    "*3/*3": { phenotype: "Poor Metabolizer", activity: 0.0 }
  },

  SLCO1B1: {
    "*1/*1": { phenotype: "Normal Function", activity: 2.0 },
    "*1/*5": { phenotype: "Decreased Function", activity: 1.0 },
    "*5/*5": { phenotype: "Low Function", activity: 0.0 }
  },

  TPMT: {
    "*1/*1": { phenotype: "Normal Metabolizer", activity: 2.0 },
    "*1/*3A": { phenotype: "Intermediate Metabolizer", activity: 1.0 },
    "*3A/*3A": { phenotype: "Poor Metabolizer", activity: 0.0 }
  },

  DPYD: {
    "*1/*1": { phenotype: "Normal Metabolizer", activity: 2.0 },
    "*1/*2A": { phenotype: "Intermediate Metabolizer", activity: 1.0 },
    "*2A/*2A": { phenotype: "Poor Metabolizer", activity: 0.0 }
  }
};

export default phenotypeMaps;
