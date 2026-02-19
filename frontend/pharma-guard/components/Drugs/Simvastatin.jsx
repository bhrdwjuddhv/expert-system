import { motion } from "motion/react";

export default function Simvastatin() {
    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
            <div className="max-w-6xl mx-auto">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            Simvastatin
                        </h1>
                        <p className="text-cyan-400 font-medium mb-4">
                            Statin (HMG-CoA Reductase Inhibitor)
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Simvastatin (brand name <span className="italic">Zocor</span>) is a
                            lipid-lowering medication used to reduce LDL cholesterol and lower
                            cardiovascular risk. It is prescribed alongside diet and exercise
                            to prevent heart attacks, strokes, and other atherosclerosis-related
                            complications.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Simvastatin3Dan.gif"
                            alt="Simvastatin molecule"
                            className="w-64 h-64 object-contain bg-slate-900 p-6 rounded-2xl border border-cyan-500/20"
                        />
                    </div>
                </motion.div>

                {/* ================= QUICK FACTS ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-8 mt-20"
                >
                    <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20">
                        <h3 className="text-cyan-400 font-semibold mb-3">Clinical Use</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Dyslipidemia (high cholesterol)</li>
                            <li>• Cardiovascular prevention</li>
                            <li>• Stroke risk reduction</li>
                            <li>• Atherosclerosis management</li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20">
                        <h3 className="text-cyan-400 font-semibold mb-3">Administration</h3>
                        <p className="text-gray-300 text-sm">
                            Taken orally. Bioavailability ~5%.
                            Metabolized primarily by CYP3A4 in the liver.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20">
                        <h3 className="text-cyan-400 font-semibold mb-3">Drug Class</h3>
                        <p className="text-gray-300 text-sm">
                            Statin (HMG-CoA reductase inhibitor).
                            Lowers LDL cholesterol by inhibiting cholesterol synthesis.
                        </p>
                    </div>
                </motion.div>

                {/* ================= MEDICAL USES ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 bg-slate-900 p-8 rounded-2xl border border-cyan-500/20"
                >
                    <h2 className="text-2xl font-semibold mb-6">Medical Uses</h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        Simvastatin is primarily used to treat elevated LDL cholesterol
                        and prevent cardiovascular events in high-risk individuals.
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        The Scandinavian Simvastatin Survival Study (4S) demonstrated
                        significant reductions in mortality, heart attacks, and strokes
                        with simvastatin therapy.
                    </p>
                </motion.div>

                {/* ================= CONTRAINDICATIONS ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 bg-slate-900 p-8 rounded-2xl border border-cyan-500/20"
                >
                    <h2 className="text-2xl font-semibold mb-6">Contraindications</h2>
                    <ul className="text-gray-300 text-sm space-y-3">
                        <li>• Pregnancy and breastfeeding</li>
                        <li>• Active liver disease</li>
                        <li>• High-dose use with interacting drugs (e.g., amlodipine)</li>
                    </ul>
                </motion.div>

                {/* ================= ADVERSE EFFECTS ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 bg-slate-900 p-8 rounded-2xl border border-cyan-500/20"
                >
                    <h2 className="text-2xl font-semibold mb-6">Adverse Effects</h2>
                    <ul className="text-gray-300 text-sm space-y-3">
                        <li>• Muscle pain (myopathy)</li>
                        <li>• Rare: Rhabdomyolysis</li>
                        <li>• Elevated liver enzymes</li>
                        <li>• Small increased risk of diabetes</li>
                    </ul>
                </motion.div>

                {/* ================= PHARMACOGENOMICS ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-20 bg-slate-900 p-8 rounded-2xl border border-cyan-500/20"
                >
                    <h2 className="text-2xl font-semibold mb-6">
                        Pharmacogenomics (SLCO1B1)
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Variants in the SLCO1B1 gene (especially rs4149056) are associated
                        with increased risk of statin-induced myopathy. CPIC guidelines
                        recommend lower doses or alternative statins for individuals with
                        reduced-function SLCO1B1 variants.
                    </p>
                </motion.div>

                {/* ================= PHARMACOLOGY ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-20 bg-slate-900 p-8 rounded-2xl border border-cyan-500/20"
                >
                    <h2 className="text-2xl font-semibold mb-6">Pharmacology</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Simvastatin inhibits HMG-CoA reductase, the rate-limiting enzyme
                        in cholesterol biosynthesis. This reduces LDL cholesterol levels
                        and lowers cardiovascular event risk. It is metabolized primarily
                        by CYP3A4.
                    </p>
                </motion.div>

                {/* ================= HISTORY ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="mt-20 bg-slate-900 p-8 rounded-2xl border border-cyan-500/20"
                >
                    <h2 className="text-2xl font-semibold mb-6">History</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Developed by Merck, simvastatin entered clinical use in 1992.
                        It became one of the most widely prescribed cholesterol-lowering
                        medications worldwide and is listed on the WHO Essential Medicines List.
                    </p>
                </motion.div>

                {/* ================= SOURCE ================= */}
                <div className="mt-16 text-sm text-gray-400 border-t border-cyan-500/20 pt-6">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Simvastatin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – Simvastatin
                    </a>
                </div>

            </div>
        </div>
    );
}
