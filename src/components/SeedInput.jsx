import React from "react";

const SeedInput = ({ rngSeed, value, onChange }) => {
    return (
        <>
            <div id="seed-input" className="w-full mb-2 mt-2">
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white justify-center items-center text-center">
                    RNG Seed Value:
                </label>
                <input type="text"
                    defaultValue={rngSeed}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="bg-gray-50 border border-bibdpurple text-gray-900 text-sm rounded-lg focus:ring-bibdpurple focus:border-bibdpurple block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
        </>
    );
};

export default SeedInput;