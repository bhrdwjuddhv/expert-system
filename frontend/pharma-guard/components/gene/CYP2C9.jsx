import { motion } from "motion/react";

export default function CYP2C9() {
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
                            CYP2C9
                        </h1>

                        <p className="text-gray-400 leading-relaxed text-lg">
              <span className="text-cyan-400 font-semibold">
                Cytochrome P450 2C9
              </span>{" "}
                            is a crucial drug-metabolizing enzyme involved in the oxidation of
                            both xenobiotics (drugs) and endogenous fatty acids. It plays a
                            major role in warfarin, phenytoin, NSAID, and sulfonylurea
                            metabolism and is highly polymorphic, significantly influencing
                            individual drug response.
                        </p>

                        <div className="mt-6 inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                            Chromosome 10q24.1
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/29/CYP2C9_1OG2.png"
                            alt="CYP2C9 Structure"
                            className="rounded-2xl shadow-2xl border border-cyan-500/20"
                        />
                    </div>
                </motion.div>

                {/* FUNCTION */}
                <Section
                    title="Function"
                    content={`CYP2C9 accounts for approximately 18% of total hepatic cytochrome P450 enzymes. It metabolizes over 100 therapeutic drugs including warfarin, phenytoin, tolbutamide, losartan, and various NSAIDs. 

It also converts polyunsaturated fatty acids into bioactive epoxides (EETs, EDPs, EEQs) which influence blood pressure regulation, inflammation, angiogenesis, and cardiovascular protection.`}
                />

                {/* PHARMACOGENOMICS */}
                <Section
                    title="Pharmacogenomics"
                    content={`CYP2C9 is highly polymorphic. The most clinically relevant variants are:

• CYP2C9*2 → ~30% reduced activity  
• CYP2C9*3 → ~80% reduced activity  

Reduced enzyme activity increases drug levels and toxicity risk, especially for warfarin and phenytoin. Genetic testing is recommended for dose optimization in certain cases.`}
                />

                {/* METABOLIZER STATUS */}
                <Section
                    title="Metabolizer Phenotypes"
                    content={`Normal Metabolizer (NM): *1/*1  
Intermediate Metabolizer (IM): *1/*2, *1/*3  
Poor Metabolizer (PM): *2/*2, *2/*3, *3/*3  

Poor metabolizers require significantly lower warfarin doses and have increased risk of bleeding if dosed conventionally.`}
                />

                {/* CLINICAL SIGNIFICANCE */}
                <Section
                    title="Clinical Relevance"
                    content={`CYP2C9 genotype strongly influences warfarin dose requirements. Studies show:

• *1/*2 → ~92% of standard dose  
• *1/*3 → ~74%  
• *2/*3 → ~63%  
• *3/*3 → ~34%  

Pharmacogenetic-guided dosing improves safety and reduces adverse drug reactions.`}
                />

                {/* LIGANDS */}
                <Section
                    title="Key Substrates & Interactions"
                    content={`Important CYP2C9 substrates:
• Warfarin (S-warfarin)
• Phenytoin
• Diclofenac
• Ibuprofen
• Tolbutamide
• Losartan

Strong inhibitors:
• Fluconazole
• Amiodarone
• Sulfamethoxazole

Strong inducers:
• Rifampicin

Drug interactions significantly alter plasma drug levels and clinical response.`}
                />

                {/* SOURCE */}
                <div className="mt-20 border-t border-slate-800 pt-8 text-sm text-gray-500">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/CYP2C9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – CYP2C9
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
