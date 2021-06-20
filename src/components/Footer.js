import React from "react";

const Footer = () => {
    return (
        <div className="text-base font-semibold shadow-inner dark:bg-gray-900 bg-gray-200 text-gray-700 dark:text-gray-200 flex justify-center align-middle fixed bottom-0 w-screen h-12 transition duration-150">
            <span className="my-auto">
                Made by{" "}
                <a
                    href="https://github.com/harsh2124"
                    className="hover:text-indigo-500 dark:hover:text-indigo-400 font-bold"
                >
                    Coderc
                </a>
            </span>
        </div>
    );
};

export default Footer;
