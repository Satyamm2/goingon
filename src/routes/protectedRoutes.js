import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected_Routes = (props) => {
    const navigate = useNavigate('');
    const { Component } = props;
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        }
    })
    return (
        <>
            <Component />
        </>
    );
};

export default Protected_Routes;