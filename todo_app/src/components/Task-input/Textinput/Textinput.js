import React, {useState, useEffect} from 'react';

export const Textinput = (props) => {
    console.log("Rendering Text Input!");
    const onTextInputUpdate =(e) =>{
        props.updateHandler(e.target.value);
    }
  return (
    <div className="add-todo-input">
        <input id="TodoText" onInput={onTextInputUpdate} value={props.initialValue} type="text" placeholder='Add to do  here...'/>

    </div>
  )
}
