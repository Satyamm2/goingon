import React from "react";

export function Button({ onClick, placeholder, className }) {
    return (
        <>
            <button className={`${className} border-2`} type="submit" onClick={onClick} style={{ width: "100px", height: "50px", }}>{placeholder}</button>
        </>
    );
};