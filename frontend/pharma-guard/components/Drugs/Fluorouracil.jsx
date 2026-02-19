import { motion } from "motion/react";

export default function Fluorouracil() {
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
                            Antimetabolite Chemotherapy
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Fluorouracil (5-FU)
                        </h1>
                        <p className="text-gray-300 leading-relaxed">
                            Fluorouracil (5-FU) is a chemotherapy medication used to treat
                            various cancers including colorectal, breast, gastric, pancreatic,
                            and skin cancers. It works by interfering with DNA and RNA
                            synthesis, preventing cancer cell replication.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Fluorouracil-from-xtal-3D-bs-17.png/250px-Fluorouracil-from-xtal-3D-bs-17.png"
                            alt="Fluorouracil Crystal Structure"
                            className="rounded-2xl shadow-2xl border border-cyan-500/20 bg-slate-900 p-6"
                        />

                    </div>
                </motion.div>

                {/* ================= QUICK FACTS ================= */}
                <section className="grid md:grid-cols-3 gap-6 mb-20">
                    {[
                        { title: "Drug Class", value: "Antimetabolite (Pyrimidine Analog)" },
                        { title: "Primary Use", value: "Cancer Chemotherapy" },
                        { title: "Mechanism", value: "Inhibits Thymidylate Synthase" },
                        { title: "Administration", value: "IV or Topical" },
                        { title: "Metabolism", value: "DPYD Enzyme" },
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
                                title: "Colorectal Cancer",
                                desc: "Common backbone chemotherapy drug for colon and rectal cancer treatment.",
                            },
                            {
                                title: "Breast & GI Cancers",
                                desc: "Used in combination regimens for breast, stomach, pancreatic, and esophageal cancers.",
                            },
                            {
                                title: "Topical Skin Treatment",
                                desc: "Applied as cream for actinic keratosis and superficial basal cell carcinoma.",
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
                                Nausea, diarrhea, mouth sores, hair thinning, and fatigue.
                            </p>
                        </motion.div>

                        {/* Dose Adjustment */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-slate-900 border border-orange-500/30 p-6 rounded-2xl"
                        >
                            <div className="text-orange-400 mb-3 text-xl">⚠</div>
                            <h3 className="font-semibold mb-2 text-orange-400">
                                Genetic Risk (DPYD)
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Patients with reduced DPYD activity may experience severe
                                toxicity and require dose adjustment.
                            </p>
                        </motion.div>

                        {/* Severe */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-slate-900 border border-red-500/30 p-6 rounded-2xl"
                        >
                            <div className="text-red-400 mb-3 text-xl">✖</div>
                            <h3 className="font-semibold mb-2 text-red-400">
                                Serious Toxicity
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Bone marrow suppression, severe diarrhea, mucositis, and
                                life-threatening toxicity in DPYD-deficient individuals.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ================= PHARMACOGENOMICS ================= */}
                <section className="mb-20 bg-slate-900 border border-cyan-500/20 p-8 rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
                        Pharmacogenomics (DPYD Relevance)
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        Fluorouracil is primarily broken down by the enzyme
                        dihydropyrimidine dehydrogenase (DPYD).
                    </p>

                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li>• Normal metabolizers → Standard dosing</li>
                        <li>• Intermediate deficiency → Dose reduction required</li>
                        <li>• Complete deficiency → High risk of life-threatening toxicity</li>
                    </ul>

                    <p className="mt-4 text-sm text-cyan-400">
                        DPYD testing is clinically recommended before initiating 5-FU
                        therapy in many treatment protocols.
                    </p>
                </section>

                {/* ================= SOURCE ================= */}
                <div className="mt-16 text-sm text-gray-400 border-t border-cyan-500/20 pt-6">
                    Source:{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Fluorouracil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                    >
                        Wikipedia – Fluorouracil
                    </a>

                </div>


            </div>
        </div>
    );
}
