import React, { useState } from "react";
import { Button } from "../../components/button";


function Counter() {
    const [counter, setCounter] = useState(0);
    const reduceCount = () => {
        setCounter(counter - 1);
        if (counter == 0) {
            setCounter(0);
        }
    }
    return (
        <>
            <div className="flex flex-col justify-between items-center gap-3 mt-4">
                <div className="text-5xl">The count is : <span className="text-blue-500">{counter}</span></div>
                {/* <div className="border-4 border-black rounded-md p-2 w-fit hover:text-green-500 cursor-pointer" onClick={() => setCounter(counter + 1)}>Update Count</div>
                <div className="border-4 border-black rounded-md p-2 w-fit hover:text-red-500 cursor-pointer" onClick={reduceCount}>Reduce Count</div> */}
                <Button
                  placeholder={"Increase"}
                  onClick={()=>setCounter(counter+1)}
                  className="hover:text-green-500"
                />
                <Button
                  placeholder={"Reduce"}
                  onClick={reduceCount}
                  className="hover:text-red-500"
                 />
            </div>
        </>
    );
};

export default Counter;