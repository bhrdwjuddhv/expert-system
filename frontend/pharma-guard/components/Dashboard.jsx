import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

/* =========================
   RISK COLOR MAP
========================= */

const RISK_COLORS = {
  Safe: "#22c55e",
  "Adjust Dosage": "#f59e0b",
  Toxic: "#ef4444",
  Ineffective: "#ef4444",
  Unknown: "#a855f7",
};

/* =========================
   DASHBOARD
========================= */

export default function Dashboard() {
  const { analysisId } = useParams();
  const [data, setData] = useState(null);
  const [selectedGene, setSelectedGene] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================
       FETCH DATA
    ========================= */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/analysis/${analysisId}`);
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

    fetchData();
  }, [analysisId]);

  /* =========================
       LOADING / ERROR
    ========================= */

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

  /* =========================
       FILTER LOGIC
    ========================= */

  const filteredResults =
    selectedGene === "ALL"
      ? data.results
      : data.results.filter((r) => r.primary_gene === selectedGene);

  /* =========================
   3D VARIANT EXTRACTION
========================= */

  const helixVariants = filteredResults.flatMap((result) =>
    (result.pharmacogenomic_profile?.detected_variants || []).map((v) => ({
      rsid: v.rsid,
      position: v.position,
      risk_label: result.risk_label,
    })),
  );

  /* =========================
       CHART DATA
    ========================= */

  const chartData = filteredResults.map((item) => ({
    drug: item.drug,
    confidence: Math.round(item.confidence_score * 100),
  }));

  /* =========================
       EXPORT JSON
    ========================= */

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

  /* =========================
       UI
    ========================= */

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
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
                    backgroundColor: RISK_COLORS[result.risk_label] + "33",
                    color: RISK_COLORS[result.risk_label],
                  }}
                >
                  {result.risk_label}
                </span>
              </div>

              <div className="text-sm text-gray-400 space-y-1">
                <p>
                  <strong>Gene:</strong> {result.primary_gene}
                </p>
                <p>
                  <strong>Diplotype:</strong> {result.diplotype}
                </p>
                <p>
                  <strong>Phenotype:</strong> {result.phenotype}
                </p>
                <p>
                  <strong>Confidence:</strong>{" "}
                  {Math.round(result.confidence_score * 100)}%
                </p>
              </div>

              <details className="mt-4 text-sm">
                <summary className="cursor-pointer text-cyan-400">
                  Clinical Recommendation
                </summary>
                <p className="mt-2 text-gray-300">
                  {result.clinical_recommendation}
                </p>
              </details>

              <details className="mt-4 text-sm">
                <summary className="cursor-pointer text-cyan-400">
                  AI Explanation
                </summary>
                <p className="mt-2 text-gray-300">
                  {result.llm_generated_explanation?.summary}
                </p>
              </details>
            </div>
          ))}
        </div>

        {/* =========================
   3D GENE VISUALIZATION
========================= */}

        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-cyan-400">
              3D Gene Variant Visualization
            </h2>
            <span className="text-sm text-gray-400">
              Interactive genomic mapping
            </span>
          </div>

          {helixVariants.length === 0 ? (
            <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/20 text-gray-400">
              No variants detected for this gene.
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

        {/* CONFIDENCE CHART */}
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
