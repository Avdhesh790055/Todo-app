import React, {useState}from 'react';
import { Addbutton } from './AddButton/Addbutton';
import { Textinput } from './Textinput/Textinput';
import "./Taskinput.css";
export const Taskinput = (props) => {
    const[text,setText] =useState("");    //react hook
    const updateText=(inputValue) =>{
        setText(inputValue);
    }

    const handleClick =()=>{
        console.log(" Button clicked from parent component");
        console.log("the valueof  the text box is :  " + text);
        props.updateTaskHandler(text);
        //empty the  text  of input box
        setText("");

    }
  return (
    <div className='todo-action'>
        {/* <TextInput initialValue="Dummy Task"> </TextInput> */}
        <Textinput updateHandler={updateText} initialValue={text}></Textinput>
        <Addbutton clickHandler={handleClick} icon={true} buttonText={"Add"}></Addbutton>

    </div>
  )
}
