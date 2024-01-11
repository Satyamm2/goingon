import React, { useState } from "react";
import axios from "axios";

function Login() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:3001/login', {
    //             username,
    //             password,
    //         });
    //         const { token } = response.data;
    //         onLogin(token);
    //     } catch (error) {
    //         console.error('Login failed', error);
    //     }
    // }
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/user/login", formData);

            if (response) {
                console.log("Loggin Successful");
            } else {
                console.log("Login failed");
            }
        } catch (error) {
            console.log("Error during login", error);

        }
    };

    return (
        <>
            <div className="flex bg-transparent mt-20 items-center justify-center">
                <div class="flex flex-col bg-white p-8 rounded shadow-md w-96 ">
                    <h1 class="text-2xl font-semibold mb-6">Login</h1>

                    <form onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="you@example.com" required />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="********" required />
                        </div>

                        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;