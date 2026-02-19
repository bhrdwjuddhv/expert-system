import { motion } from "motion/react";

export default function CYP2C19() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center mb-16"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            CYP2C19
                        </h1>

                        <p className="text-gray-400 leading-relaxed text-lg">
              <span className="text-cyan-400 font-semibold">
                Cytochrome P450 2C19
              </span>{" "}
                            is a major liver enzyme responsible for metabolizing
                            approximately 10% of commonly prescribed drugs,
                            including clopidogrel, proton pump inhibitors,
                            antidepressants, and anticonvulsants.
                        </p>

                        <div className="mt-6 inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                            Chromosome 10q24
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/11/Protein_CYP2C19_PDB_1r9o.png"
                            alt="CYP2C19 Structure"
                            className="rounded-2xl shadow-2xl border border-cyan-500/20"
                        />
                    </div>
                </motion.div>

                {/* FUNCTION */}
                <Section
                    title="Biological Function"
                    content={`CYP2C19 is a monooxygenase enzyme in the cytochrome P450 system.

It is responsible for:

• Drug metabolism (xenobiotics)
• Cholesterol and lipid metabolism
• Steroid synthesis

CYP2C19 also acts as an epoxygenase and metabolizes:
• Arachidonic acid → EETs
• Linoleic acid → Epoxides
• DHA and EPA → Epoxide signaling molecules

It localizes to the endoplasmic reticulum of hepatocytes.`}
                />

                {/* MAJOR DRUGS */}
                <Section
                    title="Major Drug Substrates"
                    content={`Clinically important CYP2C19 substrates include:

Antiplatelets:
• Clopidogrel (prodrug)

Proton Pump Inhibitors:
• Omeprazole
• Esomeprazole
• Pantoprazole
• Lansoprazole

Antidepressants:
• Citalopram
• Escitalopram
• Sertraline

Antiepileptics:
• Diazepam
• Phenytoin

Antifungals:
• Voriconazole

CYP2C19 polymorphisms significantly influence drug exposure and therapeutic outcomes.`}
                />

                {/* PHARMACOGENOMICS */}
                <Section
                    title="Pharmacogenomics"
                    content={`CYP2C19 is one of the most clinically actionable pharmacogenes.

Key alleles:

• *1 → Normal function
• *2 → Loss-of-function
• *3 → Loss-of-function
• *17 → Increased function

Phenotype classifications:

• Poor Metabolizer (PM)
• Intermediate Metabolizer (IM)
• Normal/Extensive Metabolizer (EM)
• Ultrarapid Metabolizer (UM)

Loss-of-function alleles (*2, *3):
→ Reduced clopidogrel activation
→ Higher cardiovascular event risk

Gain-of-function allele (*17):
→ Increased drug metabolism
→ Potential bleeding risk (clopidogrel)
→ Lower SSRI serum concentrations

CPIC provides genotype-guided dosing recommendations.`}
                />

                {/* CLINICAL IMPACT */}
                <Section
                    title="Clinical Impact"
                    content={`Clopidogrel (Plavix):

• Requires CYP2C19 activation
• Poor metabolizers may not receive adequate platelet inhibition
• Alternative drugs (e.g., ticagrelor) may be preferred

Proton Pump Inhibitors:

• Poor metabolizers → Higher exposure
• Ultrarapid metabolizers → Reduced acid suppression

SSRIs:

• *17 carriers may have lower serum concentrations
• *2/*3 carriers may have higher concentrations and side effects

CYP2C19 testing is increasingly used in cardiology,
psychiatry, and gastroenterology.`}
                />

                {/* POPULATION VARIABILITY */}
                <Section
                    title="Population Variability"
                    content={`Allele frequency varies significantly by ethnicity:

• *2 and *3 are more common in Asian populations
• *17 more prevalent in European and African populations

Estimated prevalence:

• Poor metabolizers: ~2–5% (Europeans)
• Higher rates in East Asians
• Ultrarapid metabolizers: <5% in Asians, higher in Europeans

This variability explains interindividual drug response differences.`}
                />

                {/* SOURCE */}
                <div className="mt-20 border-t border-slate-800 pt-8 text-sm text-gray-500">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/CYP2C19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – CYP2C19
                    </a>
                </div>

            </div>
        </div>
    );
}

/* ---------- REUSABLE SECTION COMPONENT ---------- */

function Section({ title, content }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14 bg-slate-900/60 backdrop-blur-md border border-cyan-500/10 rounded-2xl p-8"
        >
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                {title}
            </h2>
            <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                {content}
            </p>
        </motion.div>
    );
}
