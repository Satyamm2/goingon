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
                        <Link to="/livescore" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Livescore</Link>
                        <Link to="/product" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Products</Link>
                        {/* <Link to="/design" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Design</Link> */}
                    </div>
                    {/* home */}
                    {/* logo */}
                    <div className="flex font-bold items-center justify-center">GoingOn</div>
                    {/* logo */}
                    {/* login */}
                    <div className="flex justify-end gap-2">
                        <Link to="/add" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </Link>
                        {/* <button className="hover:bg-gray-300 px-1 cursor-pointer rounded-md"></button> */}
                        <span className="px-1 rounded-md">
                            {
                                username ? (
                                    <p className="underline">Welcome {username}</p>
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
                        <Link to="/livescore" className="hover:bg-gray-300 px-1 cursor-pointer rounded-md">Livescore</Link>
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