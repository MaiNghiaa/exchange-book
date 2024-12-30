import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main className="relative">
            <Header />
            <div id="body" className="xl:mt-auto w-full h-full">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}
