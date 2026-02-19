import {useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";

/* -------- CONFIG -------- */

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Upload Genome", path: "/upload" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "How It Works", path: "/#steps" },
  { name: "Contact", path: "/contact" },
];

const WIKI_DRUGS = [
  { name: "Codeine", path: "/drugs/codeine" },
  { name: "Fluorouracil", path: "/drugs/fluorouracil" },
  { name: "Azathioprine", path: "/drugs/azathioprine" },
  { name: "Simvastatin", path: "/drugs/simvastatin" },
  { name: "Warfarin", path: "/drugs/warfarin" },
  { name: "Clopidogrel", path: "/drugs/clopidogrel" },
];


const WIKI_GENES = [
  { name: "CYP2D6", path: "/gene/CYP2D6" },
  { name: "CYP2C9", path: "/gene/CYP2C9" },
  { name: "CYP2C19", path: "/gene/CYP2C19" },
  { name: "SLCO1B1", path: "/gene/SLCO1B1" },
  { name: "TPMT", path: "/gene/TPMT" },
  { name: "DPYD", path: "/gene/DPYD" },
];


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wikiOpen, setWikiOpen] = useState(false);


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);



  return (
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-slate-950 border-b border-cyan-500/20 min-h-[70px] tracking-wide relative z-50 text-white">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center font-bold text-white">
              PG
            </div>
            <span className="text-xl font-semibold tracking-wide">
            Pharma<span className="text-cyan-400">Guard</span>
          </span>
          </Link>

          {/* MENU */}
          <div
              className={`max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-1/2 max-lg:min-w-[300px]
          max-lg:bg-slate-900 max-lg:p-6 max-lg:shadow-md max-lg:overflow-auto z-50
          transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:!block`}
          >
            <button
                onClick={() => setMenuOpen(false)}
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-slate-800 w-9 h-9 flex items-center justify-center border border-cyan-500/20 text-white"
            >
              ✕
            </button>

            <ul className="lg:flex gap-x-6 max-lg:space-y-4 mt-6 lg:mt-0">
              {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    <NavLink
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            `block font-medium text-[15px] transition ${
                                isActive
                                    ? "text-cyan-400"
                                    : "text-gray-300 hover:text-cyan-400"
                            }`
                        }
                    >
                      {item.name}
                    </NavLink>
                  </li>
              ))}

              <li className="relative">
                <button
                    onClick={() => setWikiOpen(!wikiOpen)}
                    className="font-medium text-[15px] text-gray-300 cursor-pointer hover:text-cyan-400 transition"
                >
                  Wiki ▾
                </button>

                {wikiOpen && (
                    <div className="absolute left-0 mt-4 w-64 bg-slate-900 border border-cyan-500/20 rounded-xl shadow-xl p-5 space-y-5 z-50">

                      {/* DRUGS SECTION */}
                      <div>
                        <p className="text-xs uppercase tracking-wider text-cyan-400 mb-3">
                          Drugs
                        </p>

                        <div className="space-y-2">
                          {WIKI_DRUGS.map((drug) => (
                              <NavLink
                                  key={drug.name}
                                  to={drug.path}
                                  onClick={() => {
                                    setWikiOpen(false);
                                    setMenuOpen(false);
                                  }}
                                  className="block text-sm text-gray-300 hover:text-cyan-400 transition"
                              >
                                {drug.name}
                              </NavLink>
                          ))}
                        </div>
                      </div>

                      {/* GENES SECTION */}
                      <div>
                        <p className="text-xs uppercase tracking-wider text-cyan-400 mb-3">
                          Genes
                        </p>

                        <div className="space-y-2">
                          {WIKI_GENES.map((gene) => (
                              <NavLink
                                  key={gene.name}
                                  to={gene.path}
                                  onClick={() => {
                                    setWikiOpen(false);
                                    setMenuOpen(false);
                                  }}
                                  className="block text-sm text-gray-300 hover:text-cyan-400 transition"
                              >
                                {gene.name}
                              </NavLink>
                          ))}
                        </div>
                      </div>

                    </div>
                )}

              </li>


            </ul>
          </div>

          {/* PRIMARY CTA BUTTON */}
          <div className="flex max-lg:ml-auto space-x-4 items-center">
            <Link
                to="/upload"
                className="px-5 py-2 text-sm rounded-full font-medium text-white bg-cyan-600 hover:bg-cyan-700 transition shadow-lg"
            >
              Analyze Genome
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden cursor-pointer"
            >
              <svg className="w-7 h-7 text-white" viewBox="0 0 20 20">
                <path
                    fillRule="evenodd"
                    d="M3 5h12M3 10h12M3 15h12"
                    stroke="currentColor"
                    strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* OVERLAY */}
        {menuOpen && (
            <div
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
        )}
      </header>
  );
}
