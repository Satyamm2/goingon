import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeSecond = () => {
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

  useEffect(() => {
    axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=0800f345-53e5-49ed-b014-ea1307e62ba1&offset=0`)
      .then((response) => {
        console.log(response);
        // setLiveScore(response);
        setLiveScore(Array.isArray(response.data.data) ? response.data.data : [response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
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
          <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-2 px-4 border-b">S.no</th>
                <th class="py-2 px-4 border-b">Match</th>
                <th class="py-2 px-4 border-b">MatchType</th>
                <th class="py-2 px-4 border-b">Toss</th>
                <th class="py-2 px-4 border-b">Venue</th>
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
                  <td class="py-2 px-4 border-b">select</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>


      </div>
    </>
  );
};

export default HomeSecond;