import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DNAMolecule from "./gene/DNAMolecule.jsx";

const HOW_IT_WORKS_STEPS = [
  {
    title: "Upload",
    description:
      "Securely upload a VCF file containing pharmacogenomic variant data.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 16V4M8 8l4-4 4 4M4 20h16" />
      </svg>
    ),
  },
  {
    title: "Analyze",
    description:
      "AI parses genetic variants and resolves star allele diplotypes.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Predict",
    description:
      "Drug–gene risks are classified using CPIC-aligned clinical logic.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a7 7 0 017 7v1a7 7 0 01-14 0V9a7 7 0 017-7z" />
      </svg>
    ),
  },
  {
    title: "Recommend",
    description: "Receive dosing guidance and plain-language AI explanations.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
  },
];

const HERO_CONTENT = {
  badge: "AI-Powered Pharmacogenomic Risk Analysis",
  titleLine1: "Precision Medicine,",
  titleHighlight: "Powered by Your DNA",
  description:
    "Upload your genetic VCF file and receive drug-specific safety insights, CPIC-aligned dosing recommendations, and AI-generated clinical explanations — instantly.",
  buttons: [
    { id: "upload", label: "Upload Genome", action: "upload" },
    { id: "learn", label: "How It Works", action: "scroll" },
  ],
  floatingCards: [
    { id: "cpic", text: "CPIC-Aligned Dosing" },
    { id: "ai", text: "AI Clinical Explanation" },
  ],
};

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.10)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-slate-950" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row">
        <div
          className={`flex flex-1 flex-col items-center text-center transition-all duration-700 lg:items-start lg:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            {HERO_CONTENT.badge}
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {HERO_CONTENT.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {HERO_CONTENT.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300 sm:text-xl">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {HERO_CONTENT.buttons.map((btn, i) => (
              <button
                key={btn.id}
                className={
                  i === 0
                    ? "cursor-pointer rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-cyan-700"
                    : "cursor-pointer rounded-full border border-gray-500 px-8 py-4 font-semibold text-gray-300 transition hover:border-cyan-500 hover:bg-cyan-500/10"
                }
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
            <div className="relative h-80 w-80 sm:h-96 sm:w-96 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
                <div className="absolute inset-4 rounded-full bg-cyan-500/5 backdrop-blur-md" />

                <DNAMolecule />
            </div>

        </div>
      </div>
    </section>
  );
}

function GlassCard({ title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true }}
      transition={{
        delay: delay,
        duration: 0.15,
        ease: "easeOut",
      }}
      className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="relative text-white bg-slate-950 overflow-hidden">
      {/* Global background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.08)_0%,transparent_60%)]" />

      <Hero />

      <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-20"
            id="steps"
          >
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
              Process
            </p>
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From genetic data to precision medicine insights in four seamless
              steps.
            </p>
          </motion.div>

          {/* STEPS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="group relative bg-slate-900 border border-cyan-500/20 
                 p-10 min-h-[280px] 
                 rounded-2xl transition-all duration-300 
                 hover:border-cyan-400/50 
                 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]"
              >
                {/* STEP NUMBER */}
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-base font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* ICON */}
                <div className="w-16 h-16 mb-8 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center transition group-hover:bg-cyan-500/30 group-hover:scale-110">
                  {step.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-base text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
              Platform Capabilities
            </p>
            <h2 className="text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced pharmacogenomic intelligence powered by AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "VCF Parsing",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16l6-3 6 3V8z" />
                  </svg>
                ),
              },
              {
                title: "Star Allele Detection",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 7c4-4 12-4 16 0M4 17c4 4 12 4 16 0" />
                  </svg>
                ),
              },
              {
                title: "Drug Risk Classification",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Explainable AI Reports",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12h6M9 16h6M9 8h6" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900 border border-cyan-500/20 p-8 rounded-2xl"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-400">
                  Advanced pharmacogenomic intelligence.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
              Risk Classification
            </p>
            <h2 className="text-4xl font-bold mb-4">Drug Safety Risk Levels</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              AI-driven classification aligned with CPIC guidelines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SAFE */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-green-500/5 border border-green-500/30 rounded-2xl p-8 backdrop-blur"
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-green-400 mb-3">
                Safe
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Standard dosing recommended. No significant interaction
                detected.
              </p>

              <div className="bg-slate-900 p-4 rounded-lg text-sm">
                <span className="text-gray-500 block mb-1">Example</span>
                Normal metabolizer (CYP2D6 *1/*1)
              </div>
            </motion.div>

            {/* ADJUST */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-yellow-500/5 border border-yellow-500/30 rounded-2xl p-8 backdrop-blur"
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v4m0 4h.01M10.29 3.86l-7.29 12.63A2 2 0 004.71 20h14.58a2 2 0 001.71-3.51L13.71 3.86a2 2 0 00-3.42 0z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                Adjust Dosage
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Dose modification required based on metabolizer phenotype.
              </p>

              <div className="bg-slate-900 p-4 rounded-lg text-sm">
                <span className="text-gray-500 block mb-1">Example</span>
                Intermediate metabolizer (CYP2D6 *1/*4)
              </div>
            </motion.div>

            {/* HIGH RISK */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-red-500/5 border border-red-500/30 rounded-2xl p-8 backdrop-blur"
            >
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-red-400 mb-3">
                High Risk / Toxic
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Avoid drug or use alternative due to elevated toxicity risk.
              </p>

              <div className="bg-slate-900 p-4 rounded-lg text-sm">
                <span className="text-gray-500 block mb-1">Example</span>
                Poor metabolizer (CYP2D6 *4/*4)
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
