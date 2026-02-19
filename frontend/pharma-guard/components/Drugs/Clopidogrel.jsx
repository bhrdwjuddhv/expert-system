import { motion } from "motion/react";

export default function Clopidogrel() {
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
                            Clopidogrel
                        </h1>
                        <p className="text-cyan-400 font-medium mb-4">
                            Antiplatelet (P2Y12 Receptor Inhibitor)
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Clopidogrel is an antiplatelet medication used to prevent heart attacks,
                            strokes, and other cardiovascular events. It is commonly prescribed
                            after stent placement or in patients with acute coronary syndrome.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Clopidogrel_ball-and-stick_model.png"
                            alt="Clopidogrel molecule"
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
                            <li>• Acute coronary syndrome (ACS)</li>
                            <li>• Post-stent placement</li>
                            <li>• Stroke prevention</li>
                            <li>• Peripheral artery disease</li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20">
                        <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                            Mechanism of Action
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Clopidogrel blocks the P2Y12 ADP receptor on platelets,
                            preventing platelet aggregation and reducing clot formation.
                            It is a prodrug activated in the liver.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20">
                        <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                            Administration
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Taken orally once daily. Often combined with aspirin
                            (dual antiplatelet therapy).
                        </p>
                    </div>
                </motion.div>

                {/* SAFETY & PHARMACOGENOMICS */}
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
                                <li>• Bruising</li>
                                <li>• Gastrointestinal bleeding</li>
                                <li>• Rare: Thrombotic thrombocytopenic purpura (TTP)</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-cyan-400 font-semibold mb-2">
                                Genetic Impact (CYP2C19)
                            </h4>
                            <p>
                                Clopidogrel requires activation by the <strong>CYP2C19</strong> enzyme.
                                Patients with reduced-function CYP2C19 variants may have decreased
                                drug effectiveness and higher risk of cardiovascular events.
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
                        Clopidogrel was approved in 1997 and became one of the most widely
                        prescribed antiplatelet drugs worldwide. It is included in the
                        WHO List of Essential Medicines.
                    </p>
                </motion.div>

                {/* SOURCE */}
                <div className="mt-16 text-sm text-gray-400 border-t border-cyan-500/20 pt-6">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Clopidogrel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – Clopidogrel
                    </a>
                </div>

            </div>
        </div>
    );
}
