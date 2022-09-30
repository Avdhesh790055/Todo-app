import React, {useState} from "react";
import "./Singletask.css"

const Singletask = (props)=>{
    const handlecheckboxClick =(index)=>{
        console.log("checkbox Clicked!!");
        props.removeTaskHandler(index);

    }
    
    return(
        <div className="single-todo">
            <input type="checkbox" onClick={()=>handlecheckboxClick(props.idx)} name="Task 1" id={props.idx}/>
            {props.name }
        </div>

    )
}

export default Singletask;




