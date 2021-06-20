import React, { createContext, useEffect, useState } from "react";
import sampleToDoList from "../sampleToDoList.json";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [todoList, setToDoList] = useState([]);

    useEffect(() => {
        setToDoList(sampleToDoList);
    }, []);

    const handleToggleCompleteToDo = (index) => {
        const todoListLocal = [...todoList];

        todoListLocal[index].isCompleted = !todoListLocal[index].isCompleted;
        setToDoList(todoListLocal);
    };

    const handleDeleteToDo = (index) => {
        const todoListLocal = [...todoList];

        todoListLocal.splice(index, 1);
        setToDoList(todoListLocal);
    };

    const handleAddNewToDo = (data) => {
        const todoListLocal = [...todoList];

        todoListLocal.push(data);
        setToDoList(todoListLocal);
    };

    return (
        <ToDoContext.Provider
            value={{
                todoList,

                handleToggleCompleteToDo,
                handleDeleteToDo,
                handleAddNewToDo,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};
