import { motion } from "motion/react";

export default function Azathioprine() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* ================= HERO ================= */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.12)_0%,transparent_50%)]" />
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
            <span className="text-cyan-400 uppercase tracking-widest text-sm">
              Immunosuppressant • Antimetabolite
            </span>

                        <h1 className="text-5xl font-bold mt-4 mb-6">
                            Azathioprine
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Azathioprine is an immunosuppressive medication used in organ
                            transplantation and autoimmune diseases. It reduces immune
                            activity by interfering with DNA and RNA synthesis in rapidly
                            dividing immune cells.
                        </p>

                        <div className="mt-6 inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-sm">
                            ⚠ IARC Group 1 Carcinogen
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="bg-slate-900 p-6 rounded-3xl border border-cyan-500/20 shadow-xl">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/47/Azathioprine_xtal_1984.png"
                                alt="Azathioprine molecular structure"
                                className="w-72 h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= OVERVIEW ================= */}
            <section className="py-20 border-t border-cyan-500/10">
                <div className="max-w-6xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-12 text-center"
                    >
                        Clinical Overview
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* USES */}
                        <Card title="Medical Uses">
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Kidney & liver transplantation</li>
                                <li>• Rheumatoid arthritis</li>
                                <li>• Crohn’s disease & ulcerative colitis</li>
                                <li>• Systemic lupus erythematosus</li>
                                <li>• Vasculitis & autoimmune disorders</li>
                            </ul>
                        </Card>

                        {/* MECHANISM */}
                        <Card title="Mechanism of Action">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Azathioprine is converted into 6-mercaptopurine, which disrupts
                                purine synthesis. This inhibits DNA/RNA production, reducing
                                white blood cell proliferation and suppressing immune response.
                            </p>
                        </Card>

                        {/* SAFETY */}
                        <Card title="Major Risks">
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Bone marrow suppression</li>
                                <li>• Increased infection risk</li>
                                <li>• Lymphoma & skin cancer risk</li>
                                <li>• Pancreatitis (rare)</li>
                            </ul>
                        </Card>

                    </div>
                </div>
            </section>

            {/* ================= PHARMACOGENOMICS ================= */}
            <section className="py-20 bg-slate-900 border-t border-cyan-500/10">
                <div className="max-w-6xl mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-12 text-center"
                    >
                        Pharmacogenomics Insight
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-10">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-8 rounded-2xl border border-cyan-500/20"
                        >
                            <h3 className="text-cyan-400 text-lg font-semibold mb-4">
                                TPMT Gene Relevance
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                The TPMT (Thiopurine S-methyltransferase) enzyme metabolizes
                                azathioprine. Genetic variants in TPMT can reduce enzyme
                                activity, leading to higher levels of toxic metabolites and
                                severe bone marrow suppression.
                            </p>

                            <div className="mt-4 text-sm text-gray-400">
                                ✔ TPMT testing is FDA-recommended before therapy
                                ✔ Dose adjustment required for low TPMT activity
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-8 rounded-2xl border border-cyan-500/20"
                        >
                            <h3 className="text-cyan-400 text-lg font-semibold mb-4">
                                Risk Classification in PharmaGuard
                            </h3>

                            <ul className="space-y-3 text-sm text-gray-300">
                                <li>
                                    🟢 <strong>Safe:</strong> Normal TPMT activity
                                </li>
                                <li>
                                    🟡 <strong>Adjust Dosage:</strong> Intermediate TPMT activity
                                </li>
                                <li>
                                    🔴 <strong>High Risk:</strong> TPMT deficiency → Severe myelosuppression risk
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ================= FOOTER SOURCE ================= */}
            <section className="py-12 border-t border-cyan-500/10 text-center text-gray-400 text-sm">
                <p>
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Azathioprine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – Azathioprine
                    </a>
                </p>
            </section>

        </div>
    );
}

/* ================= CARD COMPONENT ================= */

function Card({ title, children }) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="bg-slate-900 p-8 rounded-2xl border border-cyan-500/20 shadow-lg"
        >
            <h3 className="text-cyan-400 font-semibold mb-4">{title}</h3>
            {children}
        </motion.div>
    );
}
