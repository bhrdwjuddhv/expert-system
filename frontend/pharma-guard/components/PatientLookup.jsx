import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientLookup() {
    const [patientId, setPatientId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/dashboard/${patientId}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6 text-white">
            <div className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-10 w-full max-w-md shadow-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Fetch Patient Dashboard
                </h1>

                <form onSubmit={handleSearch} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter Patient ID"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition font-medium cursor-pointer"
                    >
                        {loading ? "Fetching..." : "Load Dashboard"}
                    </button>
                </form>

                {error && (
                    <p className="text-red-400 text-sm mt-4 text-center">{error}</p>
                )}
            </div>
        </div>
    );
}
