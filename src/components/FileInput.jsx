import React from "react";

const FileInput = ({ onFileChange, fileUploaded, hashedValue, hashFile }) => {
    return (
      <>
        {fileUploaded ? (
          <>
            <span
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white justify-center items-center text-center"
            >
              ✔️ File Uploaded
            </span>
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white justify-center items-center text-center">
              🔒 Hashed Value: {hashedValue}
            </span>
          </>
        ) : (
          <input
            className="px-4 py-2 w-full block text-sm text-gray-900 border border-bibdpurple rounded-lg cursor-pointer mb-2 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file"
            accept=".csv"
            onChange={(e) => {
              onFileChange(e.target.files[0]);
              hashFile(e.target.files[0]);
            }}
          />
        )}
      </>
    );
  };
  
  export default FileInput;