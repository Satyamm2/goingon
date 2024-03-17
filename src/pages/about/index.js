import axios from "axios";
import React, { useEffect, useState } from "react";

function About() {
    const [users, setUsers] = useState([]);
    const [searchUser, setSearchUser] = useState('');
    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2")
            .then((response) => {
                console.log(response);
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    const filteredUsers = users?.data?.filter((user) =>
        user.first_name?.toLowerCase().includes(searchUser?.toLowerCase())
    );
    return (
        <>
            <div className="flex flex-col bg-transparent mt-10 w-full items-center justify-center">
                <div className="flex flex-col bg-white rounded shadow-md p-2">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center items-center p-2">
                            <span className="text-4xl font-bold ">Hello ReqRes users!</span>
                        </div>
                        <div className="flex flex-col w-full">
                            <input
                                type="text"
                                placeholder="Search by name"
                                value={searchUser}
                                onChange={(e) => setSearchUser(e.target.value)}
                                className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                            <div className="grid grid-cols-4 gap-6 p-2">
                                {filteredUsers?.map((user, index) => (
                                    <div key={index} className="flex flex-col justify-center hover:bg-slate-300 p-1 cursor-pointer rounded-sm items-center gap-2">
                                        <span className="text-lg font-bold">{user.first_name}</span>
                                        <span>{user.email}</span>
                                        <span className="flex justify-center items-center h-[128px] w-[128px]"><img src={`${user.avatar}`} /></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default About;