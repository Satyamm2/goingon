import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setWeData } from "../../redux/slices/weather";

const Modal = ({ weData, onClose }) => {
    const [time, setTime] = useState(null);
    useEffect(() => {
        const convertToGmt = () => {
            let currentDate = new Date();
            let currentTimeStamp = currentDate.getTime();
            let offsetInSeconds = weData?.timezone || 0; // Assuming timezone is in seconds
            let adjustedTimeStamp = currentTimeStamp - offsetInSeconds * 1000;
            let gmtDate = new Date(adjustedTimeStamp);
            setTime(gmtDate.toUTCString());
        };
        convertToGmt();
    }, [weData]);
    return (
        <>
            <div className="fixed h-screen flex justify-center items-start top-0 left-0 right-0 z-[9999] 50 bg-black/25 w-full p- overflow-x-hidden overflow-y-auto md:inset-0 max-h-full modal-overlay">
                <div className="rounded-md p-3 w-[600px] mt-10 bg-white">
                    {/* mainDiv */}
                    <div className="p-2">
                        {/* top */}
                        <div className="flex justify-between border-b-2 border-gray-200 p-2">
                            <span>Current Weather</span>
                            <span>{weData?.name} , {weData?.sys.country}</span>
                        </div>
                        {/* topEnds */}
                        {/* weatherRow */}
                        <div className="grid grid-cols-2 p-2 gap-10">
                            <div className="flex-row">
                                <div className="flex items-center justify-start">
                                    <div className="">
                                        <img src={`https://openweathermap.org/img/wn/${weData?.weather[0]?.icon}@2x.png`} alt="" />
                                    </div>
                                    <div className="flex">
                                        <div className="text-4xl">
                                            {weData?.main?.temp}
                                        </div>
                                        <span className="mt-4">℃</span>
                                    </div>
                                </div>
                                <div className="text-lg">{weData?.weather[0]?.main}</div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div>RealFeel {weData?.main?.feels_like}℃</div>
                                <div>{time}</div>
                            </div>
                        </div>
                        {/* weatherRowEnds */}
                        {/* moreDetails */}
                        <div className="grid grid-cols-2 p-2 gap-10">
                            <div className="">
                                <div className="flex justify-between border-b-2 py-2">
                                    <span>Wind</span>
                                    <span>{weData?.wind?.speed} km/h</span>
                                </div>
                                <div className="flex justify-between border-b-2 py-2">
                                    <span>Max Temperature</span>
                                    <span>{weData?.main?.temp_max}</span>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex justify-between border-b-2 py-2">
                                    <span>Pressure</span>
                                    <span>{weData?.main?.pressure} mb</span>
                                </div>
                                <div className="flex justify-between border-b-2 py-2">
                                    <span>Min Temperature</span>
                                    <span>{weData?.main?.temp_min}</span>
                                </div>
                            </div>
                        </div>
                        {/* moreDetailsEnds */}
                        <button className="hover:text-gray-500 mt-4 rounded bg-black text-white px-3 py-1" onClick={onClose}>Close</button>
                    </div>
                    {/* mainDiv ends */}
                </div>
            </div>
        </>
    );
};

function Weather() {
    const dispatch = useDispatch();
    const { weData, city } = useSelector((state) => state.weather);
    const [moredetails, setMoredetails] = useState(null);
    // const [weData, setWeData] = useState(false);
    // const [city, setCity] = useState("indore");
    const API_KEY = `c0d573b18729da9019711dcbacf8458d`;
    // const city = `indore`;
    // useEffect(() => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    //         .then((response) => {
    //             console.log(response);
    //             setWeData(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [city]);
    const fetchData = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => {
                console.log(response);
                // setWeData(response.data);
                dispatch(setWeData(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleCityChange = (e) => {
        // setCity(e.target.value);
        dispatch(setCity(e.target.value));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };
    const openModal = () => {
        setMoredetails(true);
    };
    const closeModal = () => {
        setMoredetails(null);
    };

    return (
        <>
            {/* <h1>Weather</h1>
            {
                weData?.map((data,index)=>{
                    console.log(index);
                    return(
                        <>
                        <div key={index}>{data.base}</div>
                        </>
                    )
                })
            } */}
            <div className="flex flex-col bg-transparent mt-10 items-center justify-center">
                <div className="flex flex-col bg-white p-8 rounded shadow-md w-96 ">
                    <h1 class="text-2xl font-semibold text-center sm:text-left mb-6">Weather</h1>
                    {/* weatherDetails */}
                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-4">
                                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Enter City!</label>
                                <input type="text" id="city" name="city" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleCityChange} placeholder="indore" required />
                            </div>
                            <button type="submit" class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-blue-600">Search</button>
                        </form>
                    </div>
                    {/* weatherDetails */}
                </div>
                {/* showingWeather */}
                {weData && (
                    <div className="flex flex-col bg-white border-t-2 rounded shadow-md w-96">
                        <div className="flex flex-col bg-white p-8 w-96 ">
                            <h1 class="text-2xl font-semibold text-center mb-6">{weData?.name}</h1>
                            <div className="flex justify-between">
                                {/* logo */}
                                <div className="flex">
                                    <img src={`https://openweathermap.org/img/wn/${weData?.weather[0]?.icon}@2x.png`} alt="" />
                                </div>
                                {/* logoends */}
                                {/* temp&conditon */}
                                <div className="felx flex-col">
                                    <div className="text-5xl">{weData?.main?.temp} ℃</div>
                                    <div className="text-2xl">{weData?.weather[0]?.main}</div>
                                </div>
                                {/* temp&conditon */}
                            </div>
                        </div>

                        <div className="flex justify-end pb-2 px-2">
                            <span onClick={openModal} className="cursor-pointer text-gray-500 hover:text-gray-400 font-semibold">More Details</span>
                        </div>
                    </div>
                )}
                {/* showingWeather */}
            </div>

            {moredetails !== null && (
                <Modal weData={weData} onClose={closeModal} />
            )}
            {/* {weData && (
                <div>
                    <div>{weData?.main?.temp} ℃</div>
                    <div>{weData?.name}</div> */}
            {/* <div>
                        {weData?.weather[0]?.main}
                        <img src={`https://openweathermap.org/img/wn/${weData.weather[0].icon}@2x.png`} alt="" />
                    </div> */}
            {/* </div>
            )} */}
        </>
    );
};

export default Weather;