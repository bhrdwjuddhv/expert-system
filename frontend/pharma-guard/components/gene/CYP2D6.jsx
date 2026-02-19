import { motion } from "motion/react";

export default function CYP2D6() {
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
                            CYP2D6
                        </h1>

                        <p className="text-gray-400 leading-relaxed text-lg">
              <span className="text-cyan-400 font-semibold">
                Cytochrome P450 2D6
              </span>{" "}
                            is a highly polymorphic drug-metabolizing enzyme responsible for
                            metabolizing approximately 25% of clinically used medications.
                            It is primarily expressed in the liver and also in specific brain
                            regions, including the substantia nigra.
                        </p>

                        <div className="mt-6 inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                            Chromosome 22q13.1
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/CYP2D6_structure.png/500px-CYP2D6_structure.png"
                            alt="CYP2D6 Structure"
                            className="rounded-2xl shadow-2xl border border-cyan-500/20"
                        />
                    </div>
                </motion.div>

                {/* FUNCTION */}
                <Section
                    title="Function"
                    content={`CYP2D6 is part of the cytochrome P450 monooxygenase system. It metabolizes drugs through hydroxylation, demethylation, and dealkylation reactions.

It also activates certain prodrugs such as:
• Codeine → Morphine
• Tramadol → O-desmethyltramadol
• Tamoxifen → Endoxifen

Beyond drug metabolism, CYP2D6 contributes to dopamine biosynthesis in the brain by converting tyramine derivatives into dopamine.`}
                />

                {/* GENOTYPE VARIABILITY */}
                <Section
                    title="Genotype / Phenotype Variability"
                    content={`CYP2D6 demonstrates one of the highest levels of genetic variability among CYP enzymes.

Individuals are classified as:

• Poor Metabolizers (PM) – little or no function  
• Intermediate Metabolizers (IM)  
• Extensive (Normal) Metabolizers (EM)  
• Ultrarapid Metabolizers (UM) – multiple gene copies  

Drug response and toxicity risk depend strongly on metabolizer status.`}
                />

                {/* CLINICAL SIGNIFICANCE */}
                <Section
                    title="Clinical Relevance"
                    content={`CYP2D6 significantly affects response to:

• Opioids (codeine, tramadol, hydrocodone)
• Antidepressants (SSRIs, TCAs, SNRIs)
• Antipsychotics
• Beta-blockers (metoprolol)
• Tamoxifen
• Atomoxetine

Ultrarapid metabolizers may experience toxicity with prodrugs.
Poor metabolizers may experience reduced therapeutic effect or increased side effects depending on the drug.`}
                />

                {/* ETHNIC VARIABILITY */}
                <Section
                    title="Ethnic Variability"
                    content={`Genetic variability differs across populations:

• 7–10% of Europeans are Poor Metabolizers  
• ~2% of Asians and African Americans are Poor Metabolizers  
• Ultrarapid metabolism is more common in Middle Eastern & North African populations  
• Up to 30% ultrarapid metabolizers reported in Ethiopia  

These differences influence global prescribing considerations.`}
                />

                {/* DRUG INTERACTIONS */}
                <Section
                    title="Key Substrates & Interactions"
                    content={`Common CYP2D6 substrates:
• Codeine
• Tramadol
• Metoprolol
• Tamoxifen
• Fluoxetine
• Haloperidol

Strong inhibitors:
• Fluoxetine
• Paroxetine
• Bupropion
• Quinidine

Drug–drug interactions can dramatically alter drug plasma levels and safety profiles.`}
                />

                {/* SOURCE */}
                <div className="mt-20 border-t border-slate-800 pt-8 text-sm text-gray-500">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/CYP2D6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – CYP2D6
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
