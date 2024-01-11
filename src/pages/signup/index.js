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
            } else {
                console.log("Registration failed");
            }

        } catch (error) {
            console.log("Error", error);
        }

    }

    return (
        <>
            <div>
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Mobile:</label>
                        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Address:</label>
                        <textarea name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>City:</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
                    </div>
                    <button type="submit">SignUp</button>
                </form>
            </div>
        </>
    );
};

export default Signup;