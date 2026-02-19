import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, "../uploads");

const vcfParser = {
  async parse(uploadId) {
    const filePath = path.join(uploadsDir, `${uploadId}.vcf`);

    if (!fs.existsSync(filePath)) {
      throw new Error("VCF file not found");
    }

    const content = fs.readFileSync(filePath, "utf-8");

    const lines = content.split("\n");

    const variants = [];

    for (let line of lines) {
      if (line.startsWith("#")) continue;

      const columns = line.split("\t");
      const infoField = columns[7];

      if (!infoField) continue;

      const infoParts = infoField.split(";");

      let gene = null;
      let star = null;
      let rsid = columns[2];

      for (let part of infoParts) {
        if (part.startsWith("GENE=")) {
          gene = part.replace("GENE=", "");
        }
        if (part.startsWith("STAR=")) {
          star = part.replace("STAR=", "");
        }
      }

      if (gene && star) {
        variants.push({
          gene,
          star,
          rsid,
        });
      }
    }

    return variants;
  },
};

export default vcfParser;
