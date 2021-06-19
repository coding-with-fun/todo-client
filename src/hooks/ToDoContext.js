import React, { createContext, useEffect, useState } from "react";
import sampleToDoList from "../sampleToDoList.json";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [todoList, setToDoList] = useState([]);

    useEffect(() => {
        setToDoList(sampleToDoList);
    }, []);

    return (
        <ToDoContext.Provider
            value={{
                todoList,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};
