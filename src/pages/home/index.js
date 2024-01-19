import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleWeather = () => {
    navigate("/weather");
  }
  const handleLivescore = () => {
    navigate("/livescore");
  }
  const handleTodo = () => {
    navigate("/todo");
  }
  return (
    <>
      <div className="flex bg-transparent m-10 items-center justify-center">
        <div className="flex flex-col bg-white p-8 rounded shadow-md w-full gap-2">
          <div className="justify-center items-center text-center">
            <span className="font-bold">WELCOME TO HOME PAGE</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-1">
            <div className="flex h-20 justify-center items-center rounded-md bg-slate-500 text-white hover:bg-slate-400 cursor-pointer" onClick={handleWeather}>
              <span>Weather</span>
            </div>
            <div className="flex h-20 justify-center items-center rounded-md bg-slate-500 text-white hover:bg-slate-400 cursor-pointer" onClick={handleLivescore}>
              <span>LiveScore</span>
            </div>
            <div className="flex h-20 justify-center items-center rounded-md bg-slate-500 text-white hover:bg-slate-400 cursor-pointer" onClick={handleTodo}>
              <span>Todo</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;