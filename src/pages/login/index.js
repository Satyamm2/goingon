import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [output, setOutput] = useState();

    const handleSubmit = () => {

        const userDetails = { "email": email, "password": password };

        axios.post("http://localhost:3001/user/login", userDetails).then((response) => {
            //console.log(response.data);
            setOutput("User register successfully....");
            var obj = response.data.userDetails
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("_id", obj._id);
            localStorage.setItem("name", obj.name);
            localStorage.setItem("email", obj.email);
            localStorage.setItem("mobile", obj.mobile);
            localStorage.setItem("address", obj.address);
            localStorage.setItem("city", obj.city);
            localStorage.setItem("gender", obj.gender);
            localStorage.setItem("info", obj.info);
            localStorage.setItem("role", obj.role);

            obj.role == "admin" ? navigate("/admin") : navigate("/");


        }).catch((error) => {
            //console.log(error);
            setOutput("Invalid user or verify your account....");
            setEmail("");
            setPassword("");
        });

    };

    return (
        <>
            {/* About Start */}
            <div className="flex bg-transparent mt-20 items-center justify-center">
                <div className="flex flex-col bg-white p-8 rounded shadow-md w-96 ">
                    <h1 className="text-2xl font-semibold mb-6">Login</h1>
                    <font color="blue">{output}</font>
                    <form>
                        <div className="mb-4">
                            <label className='block text-gray-700 text-sm font-bold mb-2' for="email">Email address:</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500' placeholder="you@example.com" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="pwd">Password:</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="********" required />
                        </div>
                        <br />
                        <button type="button" onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                    </form>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default Login;










// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Login() {
//     // const [username, setUsername] = useState('');
//     // const [password, setPassword] = useState('');
//     // const handleLogin = async () => {
//     //     try {
//     //         const response = await axios.post('http://localhost:3001/login', {
//     //             username,
//     //             password,
//     //         });
//     //         const { token } = response.data;
//     //         onLogin(token);
//     //     } catch (error) {
//     //         console.error('Login failed', error);
//     //     }
//     // }
//     const navigate = useNavigate();
//     const [output, setOutput] = useState();
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         axios.post("http://localhost:3001/user/login", formData).then((response) => {
//             setOutput("User register successfully....");
//             var obj = response.data.formData;
//             localStorage.setItem("token", response.data.token);
//             localStorage.setItem("_id", obj._id);
//             localStorage.setItem("name", obj.name);
//             localStorage.setItem("email", obj.email);
//             localStorage.setItem("mobile", obj.mobile);
//             localStorage.setItem("address", obj.address);
//             localStorage.setItem("city", obj.city);
//             localStorage.setItem("gender", obj.gender);
//             localStorage.setItem("info", obj.info);
//             localStorage.setItem("role", obj.role);

//             obj.role == "admin" ? navigate("/admin") : navigate("/user");
//         })
//             .catch((error) => {
//                 setOutput("Invalid user or verify your account");
//                 console.log(error);
//             })
//         // try {
//         //     const response = await axios.post("http://localhost:3001/user/login", formData);

//         //     if (response) {
//         //         console.log("Loggin Successful");
//         //     } else {
//         //         console.log("Login failed");
//         //     }
//         // } catch (error) {
//         //     console.log("Error during login", error);

//         // }

//         // try {
//         //     // Assuming you have an API endpoint for login
//         //     const response = await axios.post("http://localhost:3001/user/login", formData);

//         //     if (response.data && response.data.success) {
//         //         console.log("Login Successful");
//         //         // Save user data in local storage
//         //         localStorage.setItem("user", JSON.stringify(response.data.user));
//         //         onLogin(); // Trigger any login-related actions in your parent component
//         //     } else {
//         //         console.log("Login failed");
//         //     }

//         // } catch (error) {
//         //     console.log("Error", error);
//         // }
//     };

//     return (
//         <>
//             <div className="flex bg-transparent mt-20 items-center justify-center">
//                 <div class="flex flex-col bg-white p-8 rounded shadow-md w-96 ">
//                     <h1 class="text-2xl font-semibold mb-6">Login</h1>
//                     <font className="text-blue-600">{output}</font>
//                     <form onSubmit={handleSubmit}>
//                         <div class="mb-4">
//                             <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
//                             <input type="email" name="email" value={formData.email} onChange={handleChange} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="you@example.com" required />
//                         </div>

//                         <div class="mb-4">
//                             <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                             <input type="password" name="password" value={formData.password} onChange={handleChange} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="********" required />
//                         </div>

//                         <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;