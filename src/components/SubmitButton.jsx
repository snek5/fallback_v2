import React from "react";

const SubmitButton = ({ handleFormSubmitted }) => {
    return (
        <>
            <div id="submit" class="w-full mb-2">
                <button
                    id="submit-btn"
                    onClick={handleFormSubmitted}
                    className="btn mt-4 bg-gray-50 border border-bibdpurple text-gray-900 text-sm rounded-lg focus:ring-bibdpurple focus:border-bibdpurple block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    Submit
                </button>
            </div>
        </>
    );
};

export default SubmitButton;