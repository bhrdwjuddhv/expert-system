import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import Layout from "../components/layout.jsx";


function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />

            </Route>
        </Routes>
    );
}

export default App;
