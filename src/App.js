import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";

const App = () => {
    return (
        <div className="flex justify-center select-none dark:bg-gray-700 bg-white text-gray-700 dark:text-gray-200 transition duration-150">
            <Navbar />

            <div className="container py-14 h-screen">
                <Home />
            </div>
            <Footer />
        </div>
    );
};

export default App;
