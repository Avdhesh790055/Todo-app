import React from 'react';
import Singletask from "../SingleTask/Singletask";
import "./Tasklisting.css";

export default function Tasklisting(props) {
  const taskArray=["Task1", "Task2", "Task3", "Task4"];
  return (
    <div className='todo-list' id='TodoList'>
      { /* <Singletask name= {"Task 1"}></Singletask>
        <Singletask name= {"Task 2"}></Singletask>
        <Singletask name= {"Task 3"}></Singletask>
        <Singletask name= {"Task 4"}></Singletask>
  */}
      {
        props.tasks.length?
        props.tasks.map((value,index)=>{
          return<Singletask idx={index} removeTaskHandler={props.removeTaskHandler} name={value}></Singletask>
        })
        :"Everything's Sorted :)"
      }
      

    </div>
  )
}
