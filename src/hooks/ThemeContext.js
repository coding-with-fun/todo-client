import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState();

    useEffect(() => {
        const storedTheme = localStorage.getItem("user-theme");
        setTheme(storedTheme);

        const root = window.document.documentElement;
        root.classList.add(storedTheme);
    }, []);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        const themeColor = theme === "dark" ? "light" : "dark";

        root.classList.remove(theme);
        root.classList.add(themeColor);
        localStorage.setItem("user-theme", themeColor);

        setTheme(themeColor);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
