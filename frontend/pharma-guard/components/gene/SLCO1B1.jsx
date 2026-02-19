import { motion } from "motion/react";

export default function SLCO1B1() {
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
                            SLCO1B1
                        </h1>

                        <p className="text-gray-400 leading-relaxed text-lg">
              <span className="text-cyan-400 font-semibold">
                Solute Carrier Organic Anion Transporter Family Member 1B1
              </span>{" "}
                            encodes a liver-specific membrane transporter (OATP1B1)
                            responsible for hepatic uptake of many drugs — especially statins.
                            Genetic variation in SLCO1B1 significantly influences simvastatin
                            response and risk of statin-induced myopathy.
                        </p>

                        <div className="mt-6 inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                            Chromosome 12p12.1
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://cdn.genecards.org/protein-structure-v5-26/pdbe/8HNH_model-1.png"
                            alt="SLCO1B1 Structure"
                            className="rounded-2xl shadow-2xl border border-cyan-500/20"
                        />
                    </div>
                </motion.div>

                {/* FUNCTION */}
                <Section
                    title="Function"
                    content={`SLCO1B1 encodes OATP1B1, a membrane transport protein located on the basolateral surface of hepatocytes.

Primary role:
• Hepatic uptake of organic anions
• Transport of drugs from blood into liver cells

Key transported substances:
• Statins (e.g., simvastatin, pravastatin)
• Bilirubin
• Thyroid hormones
• Various xenobiotics

Unlike CYP enzymes, SLCO1B1 does NOT metabolize drugs — it transports them into the liver for metabolism or elimination.`}
                />

                {/* PHARMACOGENOMICS */}
                <Section
                    title="Pharmacogenomic Importance"
                    content={`Genetic variants in SLCO1B1 alter transporter activity.

Reduced function variants:
• Decrease hepatic uptake of statins
• Increase plasma statin concentrations
• Increase risk of statin-induced myopathy

The SLCO1B1 c.521T>C (rs4149056) variant is strongly associated with:

• Simvastatin-induced muscle toxicity
• Elevated creatine kinase
• Myopathy risk

Clinical guidelines (e.g., CPIC) recommend dose adjustments or alternative statins based on SLCO1B1 genotype.`}
                />

                {/* CLINICAL SIGNIFICANCE */}
                <Section
                    title="Clinical Significance"
                    content={`SLCO1B1 genotype influences:

• Simvastatin safety
• Pravastatin pharmacokinetics
• Risk of statin-induced muscle injury

Patients with decreased function alleles may require:
• Lower simvastatin doses
• Alternative statins (e.g., pravastatin, rosuvastatin)
• Careful monitoring for muscle symptoms

SLCO1B1 testing is increasingly used in precision cardiology and preventive medicine.`}
                />

                {/* ADDITIONAL NOTES */}
                <Section
                    title="Additional Clinical Associations"
                    content={`• Variants may influence bilirubin transport.
• Polymorphisms affect drug–drug interaction susceptibility.
• Transport inhibition can contribute to drug-induced hyperbilirubinemia.

Unlike metabolizing enzymes (CYPs), SLCO1B1 is a transporter gene — making it critical in absorption, distribution, and clearance phases of pharmacokinetics.`}
                />

                {/* SOURCE */}
                <div className="mt-20 border-t border-slate-800 pt-8 text-sm text-gray-500">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Solute_carrier_organic_anion_transporter_family_member_1B1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – SLCO1B1
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
