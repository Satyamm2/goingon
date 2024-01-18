import React, { useEffect, useState } from "react";
import axios from "axios";

const Modal = ({ data, onClose }) => {
    return (
        <>
            <div className="fixed h-screen flex justify-center items-start top-0 left-0 right-0 z-[9999] 50 bg-black/25 w-full p- overflow-x-hidden overflow-y-auto md:inset-0 max-h-full modal-overlay">
                <div className="rounded-md p-3 w-62 mt-10 bg-white">
                    {/* <p>{data?.teamInfo[0]?.img}</p> */}
                    {/* <p><img src={`https://h.cricapi.com/img/icon512.png`} alt="" /></p> */}
                    <p className="flex items-center justify-center gap-2"><img src={data?.teamInfo[0]?.img} alt="" className="h-16 w-16" /> VS <img src={data?.teamInfo[1]?.img} alt="" className="h-16 w-16" /></p>
                    <p>Name: {data?.name}</p>
                    <p>Venue: {data?.venue}</p>
                    <p>Match Type: {data?.matchType}</p>
                    <p>Status: {data?.status}</p>
                    <p>Currently Batting: {data?.score[data?.score.length - 1]?.inning}</p>
                    {/* <p>Score: {data?.score[0]?.r}/{data?.score[0]?.w} Overs:{data?.score[0]?.o}</p> */}
                    <p>Score: {data?.score.map((ele, index) => (
                        <>
                            <tr key={index}>
                                <td>{ele?.r}/{ele?.w} Overs: {ele?.o} {ele?.inning}</td>
                            </tr>
                        </>
                    ))}</p>
                    <button className="bg-black text-white hover:text-gray-500 rounded px-3 py-1 mt-1" onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    );
};

const HomeModal = () => {
    // const API_KEY = "qZnM0O90ToVsLfLIjBiq9GvT9382";
    // // const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    // const fetchCricketScore=()=>{
    //     axios.get( `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`)
    //      .then((response)=>{
    //         console.log(response);
    //      })
    //      .catch((error)=>{
    //         console.log(error);
    //      });
    // };
    // fetchCricketScore();
    // fetch(`https://api.cricapi.com/v1/currentMatches?apikey=0800f345-53e5-49ed-b014-ea1307e62ba1&offset=0`)
    //   .then((res)=>{
    //     return res.json();
    //   })
    //   .then((data)=>{
    //     console.log(data);
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    const [liveScore, setLiveScore] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=0800f345-53e5-49ed-b014-ea1307e62ba1&offset=0`)
            .then((response) => {
                console.log(response);
                // setLiveScore(response);
                setLiveScore(Array.isArray(response.data.data) ? response.data.data : [response.data.data]);
            })
            .catch((error) => {
                console.log(error);
                setError("Error fetching data from the server. Please try again later.");
            })
    }, []);
    const openModal = (index) => {
        setSelectedRow(index);
    };
    const closeModal = () => {
        setSelectedRow(null);
    };
    return (
        <>
            <div className="flex flex-col bg-transparent mt-10 items-center justify-center">
                <div className="flex flex-col bg-white p-8 rounded shadow-md w-4/5 m-10 ">
                    {/* {
            liveScore?.map((data, index) => {
              console.log();
              return (
                <div key={index}>{index} {data?.name}</div>
              )
            })
          } */}
                    {/* {liveScore?.data?.name} */}
                    {liveScore.length == 1 ? (
                        <div className="flex gap-1">
                            <span className="flex text-red-500">Bad Request
                            </span>
                            <span className="flex text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </span>
                        </div>
                    ) : (
                        <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="py-2 px-4 border-b">S.no</th>
                                    <th class="py-2 px-4 border-b">Match</th>
                                    <th class="py-2 px-4 border-b">MatchType</th>
                                    <th class="py-2 px-4 border-b">Toss</th>
                                    <th class="py-2 px-4 border-b">Venue</th>
                                    <th class="py-2 px-4 border-b"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {liveScore.map((data, index) => (
                                    <tr key={index}>
                                        <td class="py-2 px-4 border-b">{index}</td>
                                        <td class="py-2 px-4 border-b">{data?.name}</td>
                                        <td class="py-2 px-4 border-b">{data?.matchType}</td>
                                        <td class="py-2 px-4 border-b">{data?.status}</td>
                                        <td class="py-2 px-4 border-b">{data?.venue}</td>
                                        <td class="py-2 px-4 border-b"><button className="hover:text-gray-500" onClick={() => openModal(index)}>Select</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {error && (
                <div className="flex items-center justify-center h-screen">
                    <p className="text-red-500">{error}</p>
                </div>
            )}

            {selectedRow !== null && (
                <Modal data={liveScore[selectedRow]} onClose={closeModal} />
            )}
        </>
    );
};

export default HomeModal;