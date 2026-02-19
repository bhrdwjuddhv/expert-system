import phenotypeMaps from "../config/phenotypeMaps.js";

function normalizeDiplotype(diplotype) {
  const [a1, a2] = diplotype.split("/");
  return [a1, a2].sort().join("/");
}

const phenotypeMapper = {
  map(diplotypes) {
    const phenotypes = {};

    for (const gene in diplotypes) {
      const rawDiplotype = diplotypes[gene];
      const geneMap = phenotypeMaps[gene];

      if (!geneMap) {
        phenotypes[gene] = {
          phenotype: "Unknown",
          activity: null,
        };
        continue;
      }

      const normalized = normalizeDiplotype(rawDiplotype);

      const result = geneMap[normalized];

      if (result) {
        phenotypes[gene] = result;
      } else {
        phenotypes[gene] = {
          phenotype: "Unknown",
          activity: null,
        };
      }
    }

    return phenotypes;
  },
};

export default phenotypeMapper;
