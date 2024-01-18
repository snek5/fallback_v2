import React from "react";

const WinnersInput = ({ label, value, onChange }) => {
    return (
        <>
            <label>
                {label}
                <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                min="0"
                />
            </label>
        </>
    );
};

export default WinnersInput