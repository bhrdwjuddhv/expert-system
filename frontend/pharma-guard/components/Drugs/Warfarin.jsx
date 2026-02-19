import { motion } from "motion/react";

export default function Warfarin() {
    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            Warfarin
                        </h1>
                        <p className="text-cyan-400 font-medium mb-4">
                            Anticoagulant (Vitamin K Cycle Inhibitor)
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Warfarin is an oral anticoagulant used to prevent and treat blood clots.
                            It reduces the risk of stroke, deep vein thrombosis (DVT), pulmonary embolism,
                            and clot formation in patients with atrial fibrillation or artificial heart valves.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Warfarin_ball-and-stick_model_from_xtal_2002.png"
                            alt="Warfarin molecule"
                            className="w-64 h-64 object-contain bg-slate-900 p-6 rounded-2xl border border-cyan-500/20"
                        />
                    </div>
                </motion.div>

                {/* KEY INFO CARDS */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-8 mt-20"
                >
                    <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20">
                        <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                            Medical Uses
                        </h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Stroke prevention (Atrial fibrillation)</li>
                            <li>• Deep vein thrombosis (DVT)</li>
                            <li>• Pulmonary embolism</li>
                            <li>• Artificial heart valves</li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20">
                        <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                            Mechanism of Action
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Warfarin inhibits Vitamin K epoxide reductase (VKORC1),
                            reducing activation of clotting factors II, VII, IX, and X.
                            This decreases blood clot formation.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20">
                        <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                            Monitoring
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Requires regular INR (International Normalized Ratio) testing.
                            Therapeutic window is narrow — both under- and over-dosing are risky.
                        </p>
                    </div>
                </motion.div>

                {/* SAFETY SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 bg-slate-900 p-8 rounded-2xl border border-cyan-500/20"
                >
                    <h2 className="text-2xl font-semibold mb-6">
                        Safety & Pharmacogenomics
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-300">
                        <div>
                            <h4 className="text-cyan-400 font-semibold mb-2">
                                Common Risks
                            </h4>
                            <ul className="space-y-2">
                                <li>• Bleeding (major risk)</li>
                                <li>• Drug & food interactions (Vitamin K intake)</li>
                                <li>• Purple toe syndrome (rare)</li>
                                <li>• Contraindicated in pregnancy</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-cyan-400 font-semibold mb-2">
                                Genetic Factors
                            </h4>
                            <p>
                                Variants in <strong>VKORC1</strong> and <strong>CYP2C9</strong>
                                significantly affect dose requirements. Genetic differences can
                                increase bleeding risk or require higher doses.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* HISTORY */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 bg-slate-900 p-8 rounded-2xl border border-cyan-500/20"
                >
                    <h2 className="text-2xl font-semibold mb-4">
                        History
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Warfarin was first developed in 1948 as a rat poison.
                        It was later approved for medical use in 1954 after
                        demonstrating safe anticoagulant properties in humans.
                        It remains on the WHO Essential Medicines List.
                    </p>
                </motion.div>

                {/* SOURCE */}
                <div className="mt-16 text-sm text-gray-400 border-t border-cyan-500/20 pt-6">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Warfarin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – Warfarin
                    </a>
                </div>

            </div>
        </div>
    );
}
