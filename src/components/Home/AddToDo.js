import React, { useState } from "react";

const AddToDo = () => {
    const [isAddNewToDoModalOpen, setIsAddNewToDoModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsAddNewToDoModalOpen(!isAddNewToDoModalOpen);
    };

    return (
        <div>
            <div
                className="fixed bottom-14 sm:right-6 right-3 p-4 bg-blue-600 dark:bg-white hover:bg-blue-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 cursor-pointer rounded-full transition duration-150"
                onClick={handleToggleModal}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </div>
        </div>
    );
};

export default AddToDo;
