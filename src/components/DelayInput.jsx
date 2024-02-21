import React from "react";

const DelayInput = ({ value, onChange }) => {
    return (
        <>
            <div id="delay-input" class="w-full mb-2 mt-2">
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white justify-center items-center text-center">
                    Delay Between Lines (in Seconds):
                </label>
                <input type="number"
                    min="0"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="bg-gray-50 border border-bibdpurple text-gray-900 text-sm rounded-lg focus:ring-bibdpurple focus:border-bibdpurple block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
        </>
    );
};

export default DelayInput;