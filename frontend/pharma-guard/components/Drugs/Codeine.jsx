import { motion } from "motion/react";

export default function Codeine() {
    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
            <div className="max-w-6xl mx-auto">

                {/* ================= HERO ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center mb-20"
                >
                    <div>
                        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
                            Opiate Analgesic
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Codeine
                        </h1>
                        <p className="text-gray-300 leading-relaxed">
                            Codeine is a naturally occurring opiate and a prodrug of morphine,
                            primarily used to treat mild to moderate pain, cough, and diarrhea.
                            It works by being metabolized in the liver into morphine, which
                            produces its analgesic effects.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Codeine_molecule_ball.png/330px-Codeine_molecule_ball.png"
                            alt="Codeine Molecule"
                            className="rounded-2xl shadow-2xl border border-cyan-500/20 bg-slate-900 p-6"
                        />
                    </div>
                </motion.div>

                {/* ================= QUICK FACTS ================= */}
                <section className="grid md:grid-cols-3 gap-6 mb-20">
                    {[
                        { title: "Drug Class", value: "Opiate (Prodrug of Morphine)" },
                        { title: "Metabolism", value: "CYP2D6 → Morphine" },
                        { title: "Half-Life", value: "2.5–3 hours" },
                        { title: "Onset", value: "15–30 minutes" },
                        { title: "Duration", value: "4–6 hours" },
                        { title: "WHO Status", value: "Essential Medicine" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -6 }}
                            className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-6"
                        >
                            <h3 className="text-cyan-400 text-sm uppercase mb-2">
                                {item.title}
                            </h3>
                            <p className="text-lg font-semibold">{item.value}</p>
                        </motion.div>
                    ))}
                </section>

                {/* ================= MEDICAL USES ================= */}
                <section className="mb-20">
                    <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
                        Medical Uses
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Pain Management",
                                desc: "Used for mild to moderate pain. Often combined with paracetamol (acetaminophen), aspirin, or NSAIDs for improved effectiveness.",
                            },
                            {
                                title: "Cough Suppression",
                                desc: "Acts as an antitussive. Not recommended for children under 12 years due to respiratory risk.",
                            },
                            {
                                title: "Diarrhea",
                                desc: "Occasionally used for severe diarrhea due to its slowing effect on intestinal motility.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="bg-slate-900 border border-cyan-500/20 p-6 rounded-2xl"
                            >
                                <h3 className="font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ================= SAFETY & RISKS ================= */}
                <section className="mb-20">
                    <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
                        Safety & Risks
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Common */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-slate-900 border border-green-500/30 p-6 rounded-2xl"
                        >
                            <div className="text-green-400 mb-3 text-xl">✔</div>
                            <h3 className="font-semibold mb-2 text-green-400">
                                Common Effects
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Drowsiness, nausea, constipation, itching, lightheadedness.
                            </p>
                        </motion.div>

                        {/* Dependence */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-slate-900 border border-orange-500/30 p-6 rounded-2xl"
                        >
                            <div className="text-orange-400 mb-3 text-xl">⚠</div>
                            <h3 className="font-semibold mb-2 text-orange-400">
                                Dependence Risk
                            </h3>
                            <p className="text-gray-400 text-sm">
                                High addiction liability. Long-term use can lead to withdrawal
                                symptoms and physical dependence.
                            </p>
                        </motion.div>

                        {/* Severe */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-slate-900 border border-red-500/30 p-6 rounded-2xl"
                        >
                            <div className="text-red-400 mb-3 text-xl">✖</div>
                            <h3 className="font-semibold mb-2 text-red-400">
                                Serious Risks
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Respiratory depression, overdose, pediatric toxicity, and abuse
                                potential similar to other opioids.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ================= PHARMACOGENOMICS ================= */}
                <section className="mb-20 bg-slate-900 border border-cyan-500/20 p-8 rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
                        Pharmacogenomics (CYP2D6 Relevance)
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        Codeine is metabolized by the liver enzyme CYP2D6 into morphine.
                        Genetic variations in CYP2D6 significantly impact drug response:
                    </p>

                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li>• Poor metabolizers → Reduced pain relief</li>
                        <li>• Normal metabolizers → Expected response</li>
                        <li>• Ultrarapid metabolizers → Higher morphine levels → Toxicity risk</li>
                    </ul>

                    <p className="mt-4 text-sm text-cyan-400">
                        This makes Codeine a key drug for pharmacogenomic risk analysis
                        within PharmaGuard.
                    </p>
                </section>

                {/* ================= SOURCE ================= */}
                <div className="mt-16 text-sm text-gray-400 border-t border-cyan-500/20 pt-6">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Codeine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – Codeine
                    </a>

                </div>


            </div>
        </div>
    );
}
