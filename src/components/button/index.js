import React from "react";

export function Button({ onClick, placeholder }) {
    return (
        <>
            <button type="submit" onClick={onClick} style={{ width: "100px", height: "50px" }}>{placeholder}</button>
        </>
    );
};