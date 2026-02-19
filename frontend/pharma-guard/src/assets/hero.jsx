import { useEffect, useState } from "react";

/*
BACKEND NOTE:
Replace HERO_CONTENT with API response later
Example:
const { data } = await GET /api/hero
*/

const HERO_CONTENT = {
    badge: "Online Doctor Consultation Available",

    titleLine1: "Your Health,",
    titleHighlight: "Our First Priority",

    description:
        "Book trusted doctors, get online consultations, and manage your appointments — all in one secure healthcare platform.",

    buttons: [
        {
            id: "book",
            label: "Book Appointment",
            action: "book_appointment",
        },
        {
            id: "find",
            label: "Find Doctors",
            action: "find_doctors",
        },
    ],

    floatingCards: [
        { id: "support", text: "24/7 Support" },
        { id: "verified", text: "Verified Doctors" },
    ],
};

export default function Hero({
                                 data = HERO_CONTENT, // backend can pass props
                                 onAction = () => {}, // button click handler from parent
                             }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClick = (action) => {
        // BACKEND / ROUTER can control navigation here
        onAction(action);
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white">
            {/* soft medical background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(21,128,61,0.10)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(21,128,61,0.06)_0%,transparent_50%)]" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row">
                {/* LEFT CONTENT */}
                <div
                    className={`flex flex-1 flex-col items-center text-center transition-all duration-700 lg:items-start lg:text-left ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    {/* badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-700/30 bg-green-700/10 px-4 py-1.5 text-sm font-medium text-green-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-700 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-green-700" />
            </span>
                        {data.badge}
                    </div>

                    {/* heading */}
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
                        {data.titleLine1}
                        <br />
                        <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
              {data.titleHighlight}
            </span>
                    </h1>

                    {/* description */}
                    <p className="mt-6 max-w-xl text-lg text-gray-600 sm:text-xl">
                        {data.description}
                    </p>

                    {/* buttons */}
                    <div
                        className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-200 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        {data.buttons.map((btn, i) => (
                            <button
                                key={btn.id}
                                onClick={() => handleClick(btn.action)}
                                className={
                                    i === 0
                                        ? "group inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-800"
                                        : "inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-green-700 hover:bg-green-700/10"
                                }
                            >
                                {btn.label}

                                {i === 0 && (
                                    <svg
                                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                )}
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
                        <div className="absolute inset-8 rounded-full bg-green-700/20 animate-pulse" />

                        <div className="absolute inset-8 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-3xl shadow-xl border border-green-100">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#15803d"
                                    strokeWidth="2"
                                >
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </div>
                        </div>

                        {/* floating cards — backend driven */}
                        {data.floatingCards.map((card, i) => (
                            <div
                                key={card.id}
                                className={`absolute ${
                                    i === 0 ? "left-2 top-1/4" : "bottom-1/4 right-2"
                                } rounded-2xl bg-green-700 p-4 text-white shadow-lg animate-float`}
                            >
                                <p className="text-sm font-semibold">{card.text}</p>
                            </div>
                        ))}

                        <div className="absolute inset-0 rounded-full border border-dashed border-green-700/20 animate-spin [animation-duration:30s]" />
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}
