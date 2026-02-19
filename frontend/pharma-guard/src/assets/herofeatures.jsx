import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

function AccountIcon() {
    return (
        <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none">
            <circle cx="60" cy="40" r="18" className="fill-green-600" />
            <rect
                x="25"
                y="65"
                width="70"
                height="30"
                rx="14"
                className="fill-green-200"
            />
        </svg>
    );
}

function DoctorIcon() {
    return (
        <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none">
            <rect
                x="20"
                y="30"
                width="80"
                height="60"
                rx="16"
                className="fill-emerald-200"
            />
            <path
                d="M60 45 v30 M45 60 h30"
                stroke="#166534"
                strokeWidth="6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function BuildIcon() {
    return (
        <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none">
            <rect
                x="25"
                y="35"
                width="70"
                height="50"
                rx="12"
                className="fill-green-100"
            />
            <rect x="40" y="50" width="12" height="20" className="fill-green-500" />
            <rect x="58" y="45" width="12" height="25" className="fill-green-700" />
            <rect x="76" y="55" width="12" height="15" className="fill-green-900" />
        </svg>
    );
}

function LaunchIcon() {
    return (
        <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none">
            <path d="M60 20 L80 70 L60 60 L40 70 Z" className="fill-green-600" />
            <rect x="54" y="60" width="12" height="30" className="fill-green-300" />
        </svg>
    );
}

/* ---------------- STEP CARD ---------------- */

function StepSlide({ number, title, text, icon, bg }) {
    return (
        <section
            className={`sticky top-0 h-screen flex items-center justify-center ${bg}`}
        >
            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 px-8 items-center">
                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative inline-block">
            <span className="text-8xl font-extrabold text-green-700/10">
              {number}
            </span>
                        <span className="absolute inset-0 text-8xl font-extrabold text-green-700 blur-sm animate-pulse">
              {number}
            </span>
                    </div>

                    <h2 className="text-4xl font-bold text-green-900 mt-4">{title}</h2>
                    <p className="mt-4 text-lg text-green-900/70 leading-relaxed">
                        {text}
                    </p>

                    <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-xl font-semibold shadow-lg hover:bg-green-800 transition">
                        Continue
                    </button>
                </motion.div>

                {/* ICON CARD WITH PARALLAX */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    whileHover={{ y: -12 }}
                    className="relative"
                >
                    <div className="rounded-3xl bg-white p-10 shadow-2xl border border-green-100">
                        {icon}
                    </div>

                    <div className="absolute -z-10 inset-0 rounded-3xl bg-green-700/10 blur-2xl scale-110" />
                </motion.div>
            </div>
        </section>
    );
}

/* ---------------- MAIN ---------------- */

export default function StepsAdvanced() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

    return (
        <div className="relative">
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-1 bg-green-700 origin-left z-50"
            />

            <StepSlide
                number="01"
                title="Create Patient Account"
                text="Register securely and create your healthcare profile. Store your basic details and preferences for faster appointment booking."
                icon={<AccountIcon />}
                bg="bg-gradient-to-b from-green-100 to-green-200"
            />

            <StepSlide
                number="02"
                title="Find Verified Doctors"
                text="Browse specialists, check availability, and compare profiles before choosing the right doctor for your needs."
                icon={<DoctorIcon />}
                bg="bg-gradient-to-b from-green-50 to-green-100"
            />

            <StepSlide
                number="03"
                title="Book & Manage Visits"
                text="Schedule appointments, manage timings, and keep your medical interactions organized in one dashboard."
                icon={<BuildIcon />}
                bg="bg-gradient-to-b from-white to-green-50"
            />

            <StepSlide
                number="04"
                title="Start Your Care Journey"
                text="Consult, follow up, and track your healthcare progress with digital records and reminders."
                icon={<LaunchIcon />}
                bg="bg-white"
            />
        </div>
    );
}
