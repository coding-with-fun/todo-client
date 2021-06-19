import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";

const AddToDo = () => {
    const [isAddNewToDoModalOpen, setIsAddNewToDoModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsAddNewToDoModalOpen(!isAddNewToDoModalOpen);
    };

    return (
        <div>
            <Transition appear show={isAddNewToDoModalOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={handleToggleModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 dark:text-gray-700 text-gray-200 dark:bg-white shadow-xl rounded-xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6"
                                >
                                    Add New ToDo
                                </Dialog.Title>

                                <div className="mt-6">
                                    <div>
                                        <label for="title">Title</label>
                                        <input
                                            id="title"
                                            type="text"
                                            className="block w-full px-4 py-2 mt-2 bg-white border dark:border-gray-300 rounded-md text-gray-700 border-gray-600 dark:focus:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-800 dark:text-white bg-white dark:bg-blue-800 hover:bg-gray-200 dark:hover:bg-blue-900 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={handleToggleModal}
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

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
