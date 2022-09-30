import React from 'react';
import Plusimage from "../../Images/Plusimage.jfif";
import "./Addbutton.css";
import PropTypes from 'prop-types';

export const Addbutton = (props) => {
    const handleButtonClick =()=>{
        console.log("from the button component");
    }
  return (
        <div className='add-todo' id='AddButton' onClick={props.clickHandler}>
              <div className='add-todo-text'>
                 {props.buttonText}
              </div>
              {
                props.icon ?
                <div className='add-todo-image'>
                <img src={Plusimage} alt="plus Icon Image" />
              </div> : null

              }
             
        </div>
    
  
    








  )
}
