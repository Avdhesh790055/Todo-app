import { Taskinput } from "../Task-input/Taskinput";
import Tasklisting from "../Tasklisting/Tasklisting";
import { useState } from "react"; 


import "./Body.css";

function Body(){
    const [allTasks, setAllTasks] = useState([]);
    const updateTasks=(taskName) =>{
        setAllTasks([...allTasks,taskName]);

    }

    const removeTask = (index)=>{
        console.log(index+ " passed fom single task");
        let tempAllTasks= [...allTasks];
        tempAllTasks.splice(index,1);
        setAllTasks(tempAllTasks);
    }

    return(
        <div className="body-row">
            <Tasklisting removeTaskHandler={removeTask} tasks={allTasks}></Tasklisting>
            <Taskinput updateTaskHandler={updateTasks}></Taskinput>
            
        </div>
    );
}

export default Body;