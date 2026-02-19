import { motion } from "motion/react";

export default function TPMT() {
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
                            TPMT
                        </h1>

                        <p className="text-gray-400 leading-relaxed text-lg">
              <span className="text-cyan-400 font-semibold">
                Thiopurine S-methyltransferase
              </span>{" "}
                            is a critical pharmacogenomic enzyme responsible for the
                            methylation and inactivation of thiopurine drugs. Genetic
                            variation in TPMT significantly influences toxicity risk in
                            patients receiving azathioprine, 6-mercaptopurine, and
                            6-thioguanine.
                        </p>

                        <div className="mt-6 inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                            Chromosome 6p22.3
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Protein_TPMT_PDB_2bzg.png"
                            alt="TPMT Structure"
                            className="rounded-2xl shadow-2xl border border-cyan-500/20"
                        />
                    </div>
                </motion.div>

                {/* FUNCTION */}
                <Section
                    title="Function"
                    content={`TPMT catalyzes the S-methylation of thiopurine compounds.

It transfers a methyl group from:
• S-adenosyl-L-methionine (SAM)

Producing:
• S-adenosyl-L-homocysteine (SAH)

Example reaction:
6-mercaptopurine → 6-methylmercaptopurine

This methylation pathway inactivates thiopurine drugs and regulates intracellular drug levels.`}
                />

                {/* CLINICAL SIGNIFICANCE */}
                <Section
                    title="Clinical Significance"
                    content={`Thiopurine drugs are widely used as:

• Chemotherapeutic agents  
• Immunosuppressants (e.g., autoimmune disease, transplant)  

Individuals with low or absent TPMT activity cannot efficiently inactivate thiopurines, leading to:

• Severe myelosuppression  
• Bone marrow toxicity  
• Leukopenia  
• Anemia  
• Infection risk  
• Bleeding tendency  

Approximately:
• 10% of individuals have reduced TPMT activity  
• ~0.3% have absent activity  
• ~1 in 300 individuals are TPMT deficient`}
                />

                {/* PHARMACOLOGY */}
                <Section
                    title="Pharmacology"
                    content={`TPMT metabolizes key thiopurine drugs:

• Azathioprine  
• 6-Mercaptopurine (6-MP)  
• 6-Thioguanine  

Reduced TPMT activity → decreased drug inactivation → accumulation of toxic metabolites.

Important interaction:
• Allopurinol inhibits TPMT activity and can dramatically increase thiopurine toxicity if doses are not adjusted.`}
                />

                {/* DIAGNOSTIC USE */}
                <Section
                    title="Diagnostic & Pharmacogenomic Testing"
                    content={`TPMT activity testing or genotyping is recommended before initiating thiopurine therapy.

Why test?

• Predict toxicity risk  
• Adjust initial dose  
• Prevent life-threatening bone marrow suppression  

Patients with low or absent TPMT activity require:
• Significant dose reduction  
• Alternative therapy  

TPMT is one of the earliest and most established pharmacogenomic biomarkers in clinical practice.`}
                />

                {/* ADDITIONAL CLINICAL NOTES */}
                <Section
                    title="Additional Clinical Associations"
                    content={`• Genetic TPMT variants have been linked to cisplatin-induced ototoxicity in children.
• TPMT is listed by the FDA as a pharmacogenomic biomarker for certain adverse drug reactions.
• Ethnic variation exists in TPMT allele frequencies, influencing global prescribing strategies.`}
                />

                {/* SOURCE */}
                <div className="mt-20 border-t border-slate-800 pt-8 text-sm text-gray-500">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Thiopurine_methyltransferase"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – Thiopurine Methyltransferase (TPMT)
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
