import axios from "axios";
import React, { useEffect, useState } from "react";

function Contact() {
    const [list, setList] = useState();
    useEffect(() => {
        axios.get("https://reqres.in/api/unknown")
            .then((response) => {
                console.log(response);
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className="flex flex-col bg-transparent mt-10 w-full items-center justify-center">
                <div className="flex flex-col bg-white rounded shadow-md p-2">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center items-center p-2">
                            <span className="text-4xl font-bold ">Hello ReqRes users!</span>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="grid grid-cols-4 gap-6 p-2">
                                {list?.data?.map((lists, index) => (
                                    <div key={index} className="flex flex-col justify-center hover:bg-slate-300 p-1 cursor-pointer rounded-sm items-center gap-2">
                                        <span className="text-lg font-bold">{lists.name}</span>
                                        <span className={`flex justify-center items-center h-[128px] w-[128px]`} style={{ backgroundColor: lists.color }}>
                                            {lists.color}
                                        </span>
                                        <span>{lists.pantone_value}</span>
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

export default Contact;