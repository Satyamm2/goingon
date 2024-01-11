import React, { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, task]);
        setTask("");// clear the input after adding the task
    };
    return (
        <>
            <div className="flex flex-col bg-transparent mt-10 items-center justify-center">
                <div className="flex flex-col bg-white p-8 rounded shadow-md w-96">
                    <div className="justify-center items-center">
                        <span>ToDo List App</span>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="task" name="task" placeholder="Add you task.." onChange={handleTaskChange} required />
                            <button type="submit" class="w-full bg-black mt-1 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-blue-600">Add</button>
                        </form>
                        <div className="p-2">
                            {
                                tasks.map((elem, index) => (
                                    <div key={index}>{index+1}. {elem}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;