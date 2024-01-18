import React from "react";

const FileInput = ({ onFileChange, fileUploaded }) => {
    return (
        <>
            { fileUploaded ? 
                <span>✔️ File Uploaded</span> 
                : <input
                className="block text-sm outline-bibdpurple text-bibdpurple border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-bibdpurple dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                type="file" 
                accept=".csv" 
                onChange={(e) => onFileChange(e.target.files[0])}
                />
            }
        </>
    )
};

export default FileInput;