import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/* =========================================================
   HERO CONTENT
========================================================= */

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

/* =========================================================
   HERO SECTION
========================================================= */

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.10)_0%,transparent_50%)]" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row">
                {/* LEFT CONTENT */}
                <div
                    className={`flex flex-1 flex-col items-center text-center transition-all duration-700 lg:items-start lg:text-left ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
            </span>
                        {HERO_CONTENT.badge}
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                        {HERO_CONTENT.titleLine1}
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {HERO_CONTENT.titleHighlight}
            </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-lg text-gray-300 sm:text-xl">
                        {HERO_CONTENT.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        {HERO_CONTENT.buttons.map((btn, i) => (
                            <button
                                key={btn.id}
                                className={
                                    i === 0
                                        ? "rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-cyan-700"
                                        : "rounded-full border border-gray-500 px-8 py-4 font-semibold text-gray-300 transition hover:border-cyan-500 hover:bg-cyan-500/10"
                                }
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT VISUAL */}
                <div
                    className={`relative flex flex-1 items-center justify-center transition-all duration-1000 delay-300 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                >
                    <div className="relative h-80 w-80 sm:h-96 sm:w-96">
                        <div className="absolute inset-8 rounded-full bg-cyan-500/20 animate-pulse" />

                        <div className="absolute inset-8 flex items-center justify-center">
                            <div className="bg-slate-900 p-6 rounded-3xl shadow-xl border border-cyan-500/20">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#06b6d4"
                                    strokeWidth="2"
                                >
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </div>
                        </div>

                        {HERO_CONTENT.floatingCards.map((card, i) => (
                            <div
                                key={card.id}
                                className={`absolute ${
                                    i === 0 ? "left-2 top-1/4" : "bottom-1/4 right-2"
                                } rounded-2xl bg-cyan-600 p-4 text-white shadow-lg animate-float`}
                            >
                                <p className="text-sm font-semibold">{card.text}</p>
                            </div>
                        ))}

                        <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-spin [animation-duration:30s]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =========================================================
   STEPS SECTION
========================================================= */

function StepSlide({ number, title, text, bg }) {
    return (
        <section className={`sticky top-0 h-screen flex items-center justify-center ${bg}`}>
            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 px-8 items-center text-slate-900">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-8xl font-extrabold text-cyan-500/20">{number}</span>
                    <h2 className="text-4xl font-bold mt-4">{title}</h2>
                    <p className="mt-4 text-lg leading-relaxed">{text}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    whileHover={{ y: -10 }}
                    className="rounded-3xl bg-white p-10 shadow-2xl border border-cyan-100"
                >
                    <div className="h-40 w-full bg-gradient-to-br from-cyan-200 to-blue-200 rounded-xl" />
                </motion.div>
            </div>
        </section>
    );
}

/* =========================================================
   MAIN HOME PAGE
========================================================= */

export default function HomePage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

    return (
        <div className="relative">
            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-50"
            />

            <Hero />

            <StepSlide
                number="01"
                title="Upload Your VCF File"
                text="Securely upload your Variant Call Format (VCF) file. We analyze key pharmacogenomic variants across six critical genes."
                bg="bg-gradient-to-b from-slate-100 to-cyan-100"
            />

            <StepSlide
                number="02"
                title="Select Target Medications"
                text="Choose supported drugs such as Codeine, Warfarin, Clopidogrel, Simvastatin, Azathioprine, and Fluorouracil."
                bg="bg-gradient-to-b from-cyan-50 to-white"
            />

            <StepSlide
                number="03"
                title="AI Risk & Phenotype Mapping"
                text="Star alleles are mapped to diplotypes and phenotypes (PM, IM, NM, RM, URM) and classified according to CPIC guidelines."
                bg="bg-white"
            />

            <StepSlide
                number="04"
                title="Clinical Decision Support"
                text="Receive structured JSON output, drug risk levels, and AI-generated explanations ready for professional review."
                bg="bg-slate-50"
            />
        </div>
    );
}
