import starAlleles from "../config/starAlleles.js";

const starAlleleResolver = {
  resolve(variants) {
    const geneVariantsMap = {};

    // Group variants by gene
    for (const variant of variants) {
      if (!geneVariantsMap[variant.gene]) {
        geneVariantsMap[variant.gene] = [];
      }
      geneVariantsMap[variant.gene].push(variant);
    }

    const diplotypes = {};

    for (const gene in starAlleles) {
      const genePatterns = starAlleles[gene];
      const detectedVariants = geneVariantsMap[gene] || [];

      const matchedAlleles = [];

      // Check each star allele pattern
      for (const allele in genePatterns) {
        const requiredVariants = genePatterns[allele];

        // Wild-type (*1) handled later
        if (requiredVariants.length === 0) continue;

        const matches = requiredVariants.every((reqVar) =>
          detectedVariants.some(
            (detVar) =>
              detVar.rsId === reqVar.rsId &&
              detVar.alt === reqVar.alt
          )
        );

        if (matches) {
          matchedAlleles.push(allele);
        }
      }

      // If no variant matches → assume wild-type
      if (matchedAlleles.length === 0) {
        diplotypes[gene] = "*1/*1";
      }
      // If one allele found
      else if (matchedAlleles.length === 1) {
        diplotypes[gene] = `${matchedAlleles[0]}/*1`;
      }
      // If two detected (rare but possible)
      else {
        diplotypes[gene] = `${matchedAlleles[0]}/${matchedAlleles[1]}`;
      }
    }

    return diplotypes;
  },
};

export default starAlleleResolver;
