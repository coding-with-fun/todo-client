import React, { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="bg-white dark:bg-gray-800 shadow flex justify-between items-center fixed top-0 w-screen h-12 transition duration-150 text-base font-medium text-gray-700 dark:text-gray-200 z-50">
            <div onClick={toggleTheme} className="ml-6 sm:ml-10 cursor-pointer">
                {theme === "dark" ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                )}
            </div>
            <div className="mr-6 sm:mr-10">
                <a
                    className="hover:text-indigo-500 dark:hover:text-indigo-400 mr-6"
                    href="/"
                >
                    Profile
                </a>

                <a
                    className="hover:text-indigo-500 dark:hover:text-indigo-400"
                    href="/"
                >
                    Sign Out
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
