import React, { useContext } from "react";
import AddToDo from "../components/Home/AddToDo";
import { ToDoContext } from "../hooks/ToDoContext";
import "./Home.css";

const Home = () => {
    const { todoList, handleToggleCompleteToDo, handleDeleteToDo } =
        useContext(ToDoContext);

    return (
        <div className="h-full overflow-hidden">
            <section className="relative w-full max-w-md px-5 py-4 mx-auto rounded-md h-full">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                            className="w-5 h-5 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </span>

                    <input
                        type="text"
                        className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring transition duration-150"
                        placeholder="Search"
                    />
                </div>

                <div className="absolute inset-x-0 mx-5 mt-5 transition duration-150 todo-list">
                    {todoList.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className="flex justify-between items-center my-3 cursor-pointer bg-white border border-gray-300 dark:bg-gray-800 dark:border-transparent rounded-md"
                            >
                                <h3
                                    className={`${
                                        item.isCompleted && "line-through"
                                    } font-medium text-gray-700 dark:text-gray-100 transition duration-150 flex-1 py-3 pl-6`}
                                    onClick={() =>
                                        handleToggleCompleteToDo(index)
                                    }
                                >
                                    {item.title}
                                </h3>

                                <span className="py-3 px-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        onClick={() => handleDeleteToDo(index)}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>

            <AddToDo />
        </div>
    );
};

export default Home;
