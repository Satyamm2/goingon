import React from "react";
import axios from "axios";

const Logout = ({ token, onLogout }) => {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3001/logout', { token });
            onLogout();
        } catch (error) {
            console.error('Logout failed', error);
        }
    }
    return (
        <>
            <div>
                <h2>Logout</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
};

export default Logout;