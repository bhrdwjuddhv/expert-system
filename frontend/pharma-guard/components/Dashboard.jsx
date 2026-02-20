import { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import GeneVisualizer from "../components/GeneVisualizer";

const RISK_COLORS = {
  Safe: "#22c55e",
  "Adjust Dosage": "#f59e0b",
  Toxic: "#ef4444",
  Ineffective: "#ef4444",
  Unknown: "#a855f7",
};

export default function Dashboard() {
  const { analysisId } = useParams();
  const [data, setData] = useState(null);
  const [selectedGene, setSelectedGene] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/results/${analysisId}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to load analysis.");
        }

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (analysisId) fetchData();
  }, [analysisId]);

  if (loading)
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading analysis...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-slate-950 text-red-400 flex items-center justify-center">
        {error}
      </div>
    );

  if (!data || !data.results)
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        No data available.
      </div>
    );

const filteredResults =
  selectedGene === "ALL"
    ? data.results
    : data.results.filter(
        (r) =>
          r.pharmacogenomic_profile.primary_gene === selectedGene
      );


  const helixVariants = filteredResults.flatMap((result) =>
  (result.pharmacogenomic_profile.detected_variants || []).map((v) => ({
    rsid: v.rsid,
    position: v.position,
    risk_label: result.risk_assessment.risk_label,
  })),
);

const chartData = filteredResults.map((item) => ({
  drug: item.drug,
  confidence: 100,
}));


  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pharmaguard_analysis_${analysisId}.json`;
    a.click();
  };

  const copyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Risk Assessment Results</h1>

        {/* GENE FILTER */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "ALL",
            "CYP2D6",
            "CYP2C19",
            "CYP2C9",
            "SLCO1B1",
            "TPMT",
            "DPYD",
          ].map((gene) => (
            <button
              key={gene}
              onClick={() => setSelectedGene(gene)}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                selectedGene === gene
                  ? "bg-cyan-600 border-cyan-600 text-white shadow-md"
                  : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {gene}
            </button>
          ))}
        </div>

        {/* RISK CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredResults.map((result, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{result.drug}</h2>
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: RISK_COLORS[result.risk_assessment.risk_label] + "33",
                    color: RISK_COLORS[result.risk_assessment.risk_label],
                  }}
                >
                  {result.risk_assessment.risk_label}
                </span>
              </div>

              <div className="text-sm text-gray-400 space-y-1">
                <p>
                  <strong>Gene:</strong> {result.pharmacogenomic_profile.primary_gene}
                </p>
                <p>
                  {result.diplotype && (
                  <p><strong>Diplotype:</strong> {result.pharmacogenomic_profile.diplotype}</p>
                  )}
                </p>
                <p>
                  <strong>Phenotype:</strong> {result.pharmacogenomic_profile.phenotype}
                </p>
                <p>
                  <strong>Confidence:</strong>{" "}
                  {Math.round(result.risk_assessment.confidence_score * 100)}%
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Visualization */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">
            3D Gene Variant Visualization
          </h2>

          {helixVariants.length === 0 ? (
            <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20 text-gray-400">
              No variants detected.
            </div>
          ) : (
            <GeneVisualizer
              gene={
                selectedGene === "ALL" ? "Pharmacogenomic Panel" : selectedGene
              }
              variants={helixVariants}
            />
          )}
        </div>

        {/* Chart */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20 mb-12">
          <h2 className="text-lg font-semibold mb-4">Confidence Overview</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid stroke="#334155" />
              <XAxis dataKey="drug" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="confidence" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/*ChatBot*/}
        <div className="flex justify-end mb-8">
          <button
              onClick={() => navigate(`/chat/${analysisId}`)}
              className="group relative"
          >
            {/* Glow Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition duration-300" />

            {/* Main Button */}
            <div className="relative px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg
                    transform transition-all duration-300
                    group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_rgba(6,182,212,0.4)]
                    active:translate-y-0 active:shadow-md flex items-center gap-3">

              {/* AI Brain SVG */}
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur">
                <svg
                    className="w-5 h-5 text-cyan-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                  <path d="M9 3a4 4 0 018 0 4 4 0 013 6.9V11a4 4 0 01-4 4H8a4 4 0 01-4-4v-1.1A4 4 0 019 3z" />
                  <path d="M12 7v4M9 11h6M10 15h4" />
                </svg>
              </div>

              {/* Text */}
              <span className="tracking-wide">
        Clinical AI Assistant
      </span>

              {/* Animated Pulse Dot */}
              <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-200"></span>
      </span>

            </div>
          </button>
        </div>


        {/* JSON EXPORT */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20">
          <h2 className="text-lg font-semibold mb-4">Structured JSON Output</h2>

          <div className="flex gap-4 mb-4">
            <button
              onClick={downloadJSON}
              className="px-4 py-2 bg-cyan-600 rounded-lg"
            >
              Download JSON
            </button>

            <button
              onClick={copyJSON}
              className="px-4 py-2 border border-cyan-600 rounded-lg"
            >
              Copy to Clipboard
            </button>
          </div>

          <pre className="bg-slate-800 p-4 rounded-lg overflow-auto text-sm max-h-96">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
