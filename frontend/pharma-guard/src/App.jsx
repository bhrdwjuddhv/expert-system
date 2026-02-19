import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import Layout from "../components/layout.jsx";
import UploadPage from "../components/genomeupload.jsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload" element={<UploadPage />} />

            </Route>
        </Routes>
    );
}

export default App;
