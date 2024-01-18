import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function generateNavbar(role, username) {

    if (role === 'user') {
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
                        <Link to="/product"className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Products</Link>
                        {/* <Link to="/design" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Design</Link> */}
                    </div>
                    {/* home */}
                    {/* logo */}
                    <div className="flex font-bold items-center justify-center">GoingOn</div>
                    {/* logo */}
                    {/* login */}
                    <div className="flex justify-end gap-2">
                        {/* <button className="hover:bg-gray-300 px-1 cursor-pointer rounded-md"></button> */}
                        <span className="px-1 rounded-md">
                            {
                                username ? (
                                    <p>Welcome {username}</p>
                                ) : (
                                    <p>Welcome {username}</p>
                                )
                            }
                        </span>
                        <Link to="/logout" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Logout</Link>
                    </div>
                    {/* login */}
                </div>
            </>
        );
    } else {
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
                    <div className="flex font-bold items-center justify-center">GoingOn</div>
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
    }

};



function Navbar() {

    const [NavContent, setNavContent] = useState(null);
    const Location = useLocation();
    const [username, setUsername] = useState('');
    useEffect(() => {
        const storedUsername = localStorage.getItem('name');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    useEffect(() => {
        // Fetch token and role from localStorage
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        // Generate the Navbar based on the user role
        if (token != undefined && role === 'user') {
            setNavContent(generateNavbar('user', username));
        } else {
            setNavContent(generateNavbar());
        }
    }, [Location]);


    return (
        <>
            {NavContent}
        </>
    );
}

export default Navbar;