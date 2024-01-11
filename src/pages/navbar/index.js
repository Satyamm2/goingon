import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="grid grid-cols-3 w-full px-2 h-8 border-2 rounded-l-md bg-white">
                {/* home */}
                <div className="flex gap-2">
                    <Link to="/" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Home</Link>
                    <Link to="/about" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">About</Link>
                    <Link to="/contact" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Contact</Link>
                    <Link to="/weather" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Weather</Link>
                    <Link to="/todo" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">ToDo</Link>
                    {/* <Link to="/design" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Design</Link> */}
                </div>
                {/* home */}
                {/* logo */}
                <div className="flex font-bold items-center justify-center">LiveScore</div>
                {/* logo */}
                {/* login */}
                <div className="flex justify-end gap-2">
                    <Link to="/login" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Login</Link>
                    <Link to="/signup" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">SignUp</Link>
                </div>
                {/* login */}
            </div>
        </>
    );
};

export default Navbar;