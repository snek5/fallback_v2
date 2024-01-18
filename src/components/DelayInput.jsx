import React from "react";

const DelayInput = ({ value, onChange }) => {
    return (
        <>
            <label>
                Delay Between Lines (in Seconds):
            </label>
            <input type="number"
            min="0"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            /> 
        </>
    );
};

export default DelayInput;