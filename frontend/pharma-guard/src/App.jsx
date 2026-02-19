import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import Layout from "../components/layout.jsx";
import UploadPage from "../components/genomeupload.jsx";
import ContactPage from "../components/ContactPage.jsx";
import Dashboard from "../components/Dashboard.jsx";
import PatientLookup from "../components/PatientLookup.jsx";
import ClinicalChat from "../components/ClinicalChat.jsx";

import Azathioprine from "../components/Drugs/Azathioprine";
import Clopidogrel from "../components/Drugs/Clopidogrel";
import Codeine from "../components/Drugs/Codeine";
import Fluorouracil from "../components/Drugs/Fluorouracil";
import Simvastatin from "../components/Drugs/Simvastatin";
import Warfarin from "../components/Drugs/Warfarin";


/* ---------- GENE PAGES ---------- */

import CYP2D6 from "../components/gene/CYP2D6";
import CYP2C19 from "../components/gene/CYP2C19";
import CYP2C9 from "../components/gene/CYP2C9";
import SLCO1B1 from "../components/gene/SLCO1B1";
import TPMT from "../components/gene/TPMT";
import DPYD from "../components/gene/DPYD";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload" element={<UploadPage />} />

                <Route path="/contact" element={<ContactPage />} />
                <Route path="/dashboard/:analysisId" element={<Dashboard />} />
                <Route path="/dashboard" element={<PatientLookup />} />
                <Route path="/chat/:analysisId" element={<ClinicalChat />} />






                {/* Drug Wiki Pages */}

                <Route path="/drugs/codeine" element={<Codeine />} />
                <Route path="/drugs/fluorouracil" element={<Fluorouracil />} />
                <Route path="/drugs/azathioprine" element={<Azathioprine />} />
                <Route path="/drugs/simvastatin" element={<Simvastatin />} />
                <Route path="/drugs/warfarin" element={<Warfarin />} />
                <Route path="/drugs/clopidogrel" element={<Clopidogrel />} />

                {/* Gene Routes */}
                <Route path="/gene/CYP2D6" element={<CYP2D6 />} />
                <Route path="/gene/CYP2C19" element={<CYP2C19 />} />
                <Route path="/gene/CYP2C9" element={<CYP2C9 />} />
                <Route path="/gene/SLCO1B1" element={<SLCO1B1 />} />
                <Route path="/gene/TPMT" element={<TPMT />} />
                <Route path="/gene/DPYD" element={<DPYD />} />




            </Route>
        </Routes>
    );
}

export default App;
