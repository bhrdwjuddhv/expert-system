import { motion } from "motion/react";

export default function DPYD() {
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
                            DPYD
                        </h1>

                        <p className="text-gray-400 leading-relaxed text-lg">
              <span className="text-cyan-400 font-semibold">
                Dihydropyrimidine Dehydrogenase
              </span>{" "}
                            is the rate-limiting enzyme in pyrimidine catabolism.
                            It plays a critical role in the breakdown of uracil,
                            thymine, and the chemotherapeutic drug 5-fluorouracil (5-FU).
                        </p>

                        <div className="mt-6 inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                            Chromosome 1p22
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/58/1gte.jpg"
                            alt="DPYD Structure"
                            className="rounded-2xl shadow-2xl border border-cyan-500/20"
                        />
                    </div>
                </motion.div>

                {/* FUNCTION */}
                <Section
                    title="Biological Function"
                    content={`DPYD encodes the enzyme dihydropyrimidine dehydrogenase (DPD).

Primary reaction:
• Uracil → Dihydrouracil (using NADPH)
• Thymine → Dihydrothymine

It is:
• The initial and rate-limiting step in pyrimidine degradation
• Essential for uracil and thymine metabolism
• Required for degradation of fluoropyrimidine chemotherapy agents

DPD also participates in:
• Beta-alanine metabolism
• Pantothenate and CoA biosynthesis`}
                />

                {/* PHARMACOGENOMICS */}
                <Section
                    title="Pharmacogenomic Importance"
                    content={`DPYD is critically important in oncology.

The enzyme degrades:
• 5-Fluorouracil (5-FU)
• Capecitabine
• Tegafur

Reduced or absent DPYD activity leads to:

• Severe 5-FU toxicity
• Myelosuppression
• Mucositis
• Neurotoxicity
• Potentially fatal complications

Because DPYD controls 5-FU clearance, genetic variants strongly influence chemotherapy safety.`}
                />

                {/* CLINICAL SIGNIFICANCE */}
                <Section
                    title="Clinical Significance"
                    content={`DPYD deficiency is a pharmacogenetic risk factor.

Individuals may be:
• Normal metabolizers
• Intermediate metabolizers
• Poor metabolizers (high risk)

Key DPYD variants associated with toxicity:
• DPYD*2A
• c.2846A>T
• c.1679T>G
• HapB3 variant

Clinical guidelines (CPIC, EMA) recommend:
• Dose reduction in intermediate metabolizers
• Avoidance or major dose reduction in poor metabolizers

Pre-treatment DPYD testing is increasingly recommended before fluoropyrimidine chemotherapy.`}
                />

                {/* GENETIC DEFICIENCY */}
                <Section
                    title="DPYD Deficiency"
                    content={`Complete deficiency causes:

• Thymine-uraciluria
• Developmental delay
• Neurological abnormalities

Partial deficiency is more common and often undiagnosed
until severe chemotherapy toxicity occurs.

Estimated prevalence:
• Partial deficiency: ~3–5%
• Complete deficiency: rare (<0.1%)`}
                />

                {/* STRUCTURAL STUDIES */}
                <Section
                    title="Structural Studies"
                    content={`Multiple crystal structures of DPD have been solved.

PDB examples:
• 1GTE
• 1GT8
• 1GTH

DPD is a large multi-domain enzyme containing:
• FAD binding domain
• NADPH binding domain
• Iron-sulfur clusters

These domains enable electron transfer during pyrimidine reduction.`}
                />

                {/* SOURCE */}
                <div className="mt-20 border-t border-slate-800 pt-8 text-sm text-gray-500">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Dihydropyrimidine_dehydrogenase_(NADP%2B)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – Dihydropyrimidine Dehydrogenase (DPYD)
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
