import React, { useState } from "react";
import axios from 'axios';

function Signup({ onSignUp }) {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSignup = async () => {
    //     try {
    //         await axios.post('http://localhost:3001/signup', {
    //             username,
    //             password,
    //         });
    //         onSignUp();
    //     } catch (error) {
    //         console.log('Signup failed', error)
    //     }
    // };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
        city: "",
        gender: ""
    });

    const [registrationStatus, setRegistrationStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/user/save", formData);
            if (response) {
                console.log("Registration Successful");
                setRegistrationStatus("Successfully registered");
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    mobile: "",
                    address: "",
                    city: "",
                    gender: ""
                });
            } else {
                console.log("Registration failed");
                setRegistrationStatus("Registration failed");
            }

        } catch (error) {
            console.log("Error", error);
            setRegistrationStatus("Registration failed");
        }

    }

    return (
        <>
            <div className="flex bg-transparent mt-20 items-center justify-center">
                <div className="flex flex-col bg-white p-8 rounded shadow-md w-96 ">
                    <h2 className="text-2xl font-semibold mb-6">SignUp</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="sam" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="xyz@gmail.com" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="********" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Mobile:</label>
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="9999999999" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
                            <textarea name="address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="new delhi" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                            <input type="text" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="male/female/others" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">SignUp</button>

                        {registrationStatus && (
                            <p className={`text-center mt-4 ${registrationStatus === 'Successfully registered' ? 'text-green-500' : 'text-red-500'}`}>{registrationStatus}</p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;