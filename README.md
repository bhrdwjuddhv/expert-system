# 🧬 PharmaGuard
### Precision Medicine. Interpreted Instantly.

---

## 🚀 Two Patients. Same Drug. Different Outcome.

Two patients receive the same medication.  
Same condition. Same dose.

One recovers.  
The other develops severe toxicity.

The difference?

A single genetic variant.

Adverse drug reactions remain one of the leading causes of preventable hospitalizations worldwide. In many cases, the warning signs are already written in a patient’s DNA.

The problem isn’t sequencing.  
The problem is interpretation.

**PharmaGuard bridges that gap.**

---

# 💡 What is PharmaGuard?

PharmaGuard is an AI-powered pharmacogenomic risk prediction system that transforms raw genomic VCF data into:

- 🟢 Drug safety classifications
- 🟠 Dose adjustment recommendations
- 🔴 Toxicity or inefficacy alerts
- 🧠 Plain-language AI explanations
- 🧬 Interactive 3D gene visualization
- 🤖 Context-aware clinical AI chat

All in under 30 seconds.

---

# 🧠 The Clinical Problem

Pharmacogenomic interpretation today requires:

1. Parsing raw VCF files
2. Matching variants to star alleles
3. Resolving diplotypes
4. Mapping to metabolizer phenotypes
5. Cross-referencing CPIC guidelines
6. Manually interpreting dosing recommendations

This workflow is complex and not feasible in real-time clinical environments.

PharmaGuard automates the entire pipeline.

---

# ⚙️ How It Works

## 1️⃣ Upload VCF File
- Accepts `.vcf` and `.vcf.gz`
- Max size: 5MB
- Streaming parser for efficiency

## 2️⃣ Variant Extraction
Extracts variants for 6 critical pharmacogenes:

- CYP2D6
- CYP2C19
- CYP2C9
- SLCO1B1
- TPMT
- DPYD

## 3️⃣ Star Allele Resolution
Matches detected variants to predefined allele patterns.

Example:
- `CYP2D6*1`
- `CYP2D6*4`

## 4️⃣ Diplotype Determination
Combines two inherited alleles.

Example:


## 5️⃣ Phenotype Mapping
Diplotype → Metabolizer Status:

- Poor Metabolizer
- Intermediate Metabolizer
- Normal Metabolizer
- Ultrarapid Metabolizer

## 6️⃣ CPIC-Based Risk Classification
Drugs are categorized as:

- Safe
- Adjust
- Toxic / Ineffective
- Unknown

## 7️⃣ AI Explanation
- Single structured GPT-4 prompt
- Plain-language output (<150 words)
- Fallback mechanism for reliability

---

# 🎨 3D Variant Visualization

Built using **React Three Fiber**.

- Variants rendered as spheres
- Color-coded by risk level
- Interactive rotate + zoom

Genomic data made intuitive.

---

# 🤖 Clinical Chat Assistant

Users can ask:

> Why is Codeine high risk for this patient?

The system maintains analysis context and provides AI-powered clarifications.

---

# 🏗️ Architecture

## Frontend
- React + Vite
- Material-UI (Dark medical theme)
- React Three Fiber
- Axios

## Backend
- Node.js + Express
- Streaming VCF parser
- Star allele resolver
- CPIC-aligned risk engine

## Database
- MongoDB Atlas

## AI
- OpenAI GPT-4
- Structured prompt system
- Fallback explanation templates

## Deployment
- Frontend → Vercel
- Backend → Render

---

# 📊 Performance

| Component | Time |
|-----------|------|
| VCF Parsing | < 5 seconds |
| Full Analysis | < 30 seconds |
| 3D Rendering | < 1 second |

Designed for real-time clinical usability.

---

# 🎯 Supported Drugs

- CODEINE
- WARFARIN
- CLOPIDOGREL
- SIMVASTATIN
- AZATHIOPRINE
- FLUOROURACIL

---

# 🔬 Target Genes

- CYP2D6
- CYP2C19
- CYP2C9
- SLCO1B1
- TPMT
- DPYD

---

# 🌍 Why PharmaGuard Matters

PharmaGuard reduces:

- Trial-and-error prescribing
- Adverse drug reactions
- Manual CPIC lookups
- Genetic misinterpretation

It transforms genomic complexity into clinical clarity.

---

# 🛠️ Setup Instructions

## Clone Repository
```bash
git clone https://github.com/yourusername/pharmaguard.git
cd pharmaguard
