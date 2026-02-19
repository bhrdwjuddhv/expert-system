import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, "../uploads");

// Ensure uploads folder exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const uploadController = {
  async handleUpload(req, res) {
    try {
      // 1️⃣ Validate file
      if (!req.file) {
        return res.status(400).json({
          error: true,
          message: "VCF file is required",
        });
      }

      if (!req.file.originalname.endsWith(".vcf")) {
        return res.status(400).json({
          error: true,
          message: "Only .vcf files are allowed",
        });
      }

      // 2️⃣ Generate unique upload ID
      const uploadId = uuidv4();

      // 3️⃣ Save file to uploads folder
      const filePath = path.join(uploadsDir, `${uploadId}.vcf`);

      fs.writeFileSync(filePath, req.file.buffer);

      // 4️⃣ Return uploadId
      return res.status(200).json({
        success: true,
        uploadId,
        message: "File uploaded successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: true,
        message: "File upload failed",
      });
    }
  },
};

export default uploadController;
