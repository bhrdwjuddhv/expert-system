import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GeneVisualizer from "../components/GeneVisualizer";

const SUPPORTED_DRUGS = [
    "CODEINE",
    "WARFARIN",
    "CLOPIDOGREL",
    "SIMVASTATIN",
    "AZATHIOPRINE",
    "FLUOROURACIL",
];

export default function UploadPage() {
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [selectedDrugs, setSelectedDrugs] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    /* =========================
       FILE HANDLING
    ========================= */

    const validateFile = (file) => {
        if (!file) return "Please upload a VCF file.";

        const validExtensions = [".vcf", ".vcf.gz"];
        const isValidExtension = validExtensions.some((ext) =>
            file.name.toLowerCase().endsWith(ext)
        );

        if (!isValidExtension) {
            return "Only .vcf or .vcf.gz files are allowed.";
        }

        if (file.size > 5 * 1024 * 1024) {
            return "File size must be under 5MB.";
        }

        return "";
    };

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        const validationError = validateFile(uploadedFile);

        if (validationError) {
            setError(validationError);
            setFile(null);
            return;
        }

        setError("");
        setFile(uploadedFile);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        const validationError = validateFile(droppedFile);

        if (validationError) {
            setError(validationError);
            setFile(null);
            return;
        }

        setError("");
        setFile(droppedFile);
    };

    /* =========================
       DRUG SELECTOR
    ========================= */

    const toggleDrug = (drug) => {
        setSelectedDrugs((prev) =>
            prev.includes(drug)
                ? prev.filter((d) => d !== drug)
                : [...prev, drug]
        );
    };

    /* =========================
       SUBMIT HANDLER
    ========================= */

const handleSubmit = async () => {
    if (!file) {
        setError("Please upload a VCF file.");
        return;
    }

    if (selectedDrugs.length === 0) {
        setError("Please select at least one drug.");
        return;
    }

    setError("");
    setLoading(true);

    try {
        // 1️⃣ Upload file
        const formData = new FormData();
        formData.append("vcfFile", file); // IMPORTANT: must match backend field name

        const uploadResponse = await fetch("http://localhost:5000/api/upload", {
            method: "POST",
            body: formData,
        });
        console.log(uploadResponse);
        const uploadData = await uploadResponse.json();

        if (!uploadResponse.ok) {
            throw new Error(uploadData.message || "Upload failed.");
        }

        const uploadId = uploadData.uploadId;

        // 2️⃣ Call analyze API
        const analyzeResponse = await fetch("http://localhost:5000/api/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uploadId,
                drugs: selectedDrugs.join(","),
            }),
        });

        const analyzeData = await analyzeResponse.json();

        if (!analyzeResponse.ok) {
            throw new Error(analyzeData.message || "Analysis failed.");
        }
        console.log(analyzeData);
        // 3️⃣ Navigate using returned analysisId
        navigate(`/dashboard/${analyzeData.analysisId}`);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

    /* =========================
       UI
    ========================= */

    const mockGene = "CYP2D6";

    const mockVariants = [
        {
            rsid: "rs3892097",
            position: 42130692,
            risk_label: "Ineffective",
        },
        {
            rsid: "rs1057910",
            position: 42127500,
            risk_label: "Adjust Dosage",
        },
        {
            rsid: "rs16947",
            position: 42129876,
            risk_label: "Safe",
        },
        {
            rsid: "rs1135840",
            position: 42132000,
            risk_label: "Toxic",
        },
    ];


    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-20">
            <div className="w-full max-w-3xl bg-slate-900 rounded-3xl p-10 shadow-2xl border border-cyan-500/20">

                {/* TITLE */}
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Upload Genetic Data
                </h1>

                <p className="text-gray-400 text-center mb-10">
                    Upload your Variant Call Format (VCF) file and select the drugs
                    you want to analyze.
                </p>

                {/* FILE DROPZONE */}
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-cyan-500/40 rounded-xl p-8 text-center cursor-pointer hover:border-cyan-400 transition"
                >
                    <input
                        type="file"
                        accept=".vcf,.vcf.gz"
                        onChange={handleFileChange}
                        className="hidden"
                        id="fileUpload"
                    />

                    <label htmlFor="fileUpload" className="cursor-pointer">
                        <p className="text-lg font-semibold text-cyan-400">
                            Drag & Drop VCF File Here
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            or click to browse (.vcf / .vcf.gz, max 5MB)
                        </p>
                    </label>

                    {file && (
                        <div className="mt-4 text-sm text-green-400">
                            Selected: {file.name} ({(file.size / 1024).toFixed(1)} KB)
                        </div>
                    )}
                </div>

                {/* DRUG SELECTOR */}
                <div className="mt-10">
                    <h2 className="text-lg font-semibold mb-4 text-cyan-400">
                        Select Drug(s)
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {SUPPORTED_DRUGS.map((drug) => {
                            const selected = selectedDrugs.includes(drug);

                            return (
                                <button
                                    key={drug}
                                    onClick={() => toggleDrug(drug)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                                        selected
                                            ? "bg-cyan-600 border-cyan-600 text-white"
                                            : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                                    }`}
                                >
                                    {drug}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ERROR MESSAGE */}
                {error && (
                    <div className="mt-6 text-red-400 text-sm text-center">
                        {error}
                    </div>
                )}

                {/* SUBMIT BUTTON */}
                <div className="mt-10 text-center">
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 transition rounded-full font-semibold text-white shadow-lg disabled:opacity-50"
                    >
                        {loading ? "Analyzing..." : "Analyze Genome"}
                    </button>
                </div>
            </div>
        </div>
    );
}
