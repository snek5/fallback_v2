import React from "react";

const SubmitButton = ({ handleFormSubmitted }) => {
    return (
        <>
            <button
            onClick={handleFormSubmitted}
            >
                Submit
            </button>
        </>
    );
};

export default SubmitButton;