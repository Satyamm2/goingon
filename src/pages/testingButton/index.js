import React, { useState } from "react";
import { Button } from "../../components/button/index";

function TestingButton(){

    // const [register, setRegister] = useState("");
    // const [login, setLogin] = useState("");

    const handeRegister=()=>{
        // setRegister("Register")
        console.log("reg");
    }
    const handleLogin=()=>{
        // setLogin("Login")
        console.log("log");
    }


    return(
        <>
        <Button 
            placeholder={"Register"}
            onClick={handeRegister}
        />
        <Button
            placeholder={"Login"}
            onClick={handleLogin}
        />
        </>
    );
};

export default TestingButton;