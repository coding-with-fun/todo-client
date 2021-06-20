import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ThemeProvider } from "./hooks/ThemeContext";
import { ToDoProvider } from "./hooks/ToDoContext";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <ToDoProvider>
                <App />
            </ToDoProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
