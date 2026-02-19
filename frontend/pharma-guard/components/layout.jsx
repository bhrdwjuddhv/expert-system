import Header from "./header.jsx";
import Footer from "./footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    );
}
