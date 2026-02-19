import {Link} from "react-router-dom";

export default function Footer() {
  return (
      <footer className="bg-slate-950 border-t border-cyan-500/20 text-gray-300">
        <div className="max-w-[1400px] mx-auto px-4 py-14">

          {/* ===== TOP GRID — 4 COLUMNS ===== */}
          <div className="grid gap-10 md:grid-cols-4">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-xl bg-cyan-600 flex items-center justify-center text-white font-bold">
                  PG
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Pharma<span className="text-cyan-400">Guard</span>
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-gray-400">
                AI-powered pharmacogenomic risk prediction system. Upload genetic
                data, analyze drug response, and receive CPIC-aligned clinical
                recommendations — instantly.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h3 className="font-semibold text-white mb-4">PLATFORM</h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer">Upload Genome</li>
                <li className="hover:text-cyan-400 cursor-pointer">Risk Dashboard</li>
                <li className="hover:text-cyan-400 cursor-pointer">Clinical Chat</li>
                <li className="hover:text-cyan-400 cursor-pointer">
                  JSON Export
                </li>
              </ul>
            </div>

            {/* Supported Drugs */}
            <div>
              <h3 className="font-semibold text-white mb-4">SUPPORTED DRUGS</h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/drugs/codeine" className="hover:text-cyan-400">
                  Codeine
                </Link></li>
                <li><Link to="/drugs/warfarin" className="hover:text-cyan-400">
                  Warfarin
                </Link></li>
                <li><Link to="/drugs/clopidogrel" className="hover:text-cyan-400">
                  Clopidogrel
                </Link></li>
                <li><Link to="/drugs/simvastatin" className="hover:text-cyan-400">
                  Simvastatin
                </Link></li>
                <li><Link to="/drugs/azathioprine" className="hover:text-cyan-400">
                  Azathioprine
                </Link></li>
                <li><Link to="/drugs/fluorouracil" className="hover:text-cyan-400">
                  Fluorouracil
                </Link></li>
              </ul>
            </div>

            {/* Genes & Compliance */}
            <div>
              <h3 className="font-semibold text-white mb-4">GENES ANALYZED</h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/gene/CYP2D6" className="hover:text-cyan-400">
                  CYP2D6
                </Link></li>
                <li><Link to="/gene/CYP2C19" className="hover:text-cyan-400">
                  CYP2C19
                </Link></li>
                <li><Link to="/gene/CYP2C9" className="hover:text-cyan-400">
                  CYP2C9
                </Link></li>
                <li><Link to="/gene/SLCO1B1" className="hover:text-cyan-400">
                  SLCO1B1
                </Link></li>
                <li><Link to="/gene/TPMT" className="hover:text-cyan-400">
                  TPMT
                </Link></li>
                <li><Link to="/gene/DPYD" className="hover:text-cyan-400">
                  DPYD
                </Link></li>
              </ul>

              <button className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-700 transition">
                Start Analysis
              </button>
            </div>
          </div>

          {/* ===== DISCLAIMER SECTION ===== */}
          <div className="mt-12 border-t border-cyan-500/10 pt-6 text-center text-sm text-gray-500">
            This system provides pharmacogenomic decision support aligned with
            CPIC guidelines. It is intended for research and educational purposes
            and should not replace professional medical judgment.
          </div>

          {/* ===== BOTTOM ===== */}
          <div className="mt-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} PharmaGuard — Precision Medicine Platform.
          </div>
        </div>
      </footer>
  );
}
