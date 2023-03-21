import React from "react";
import "./card.css";
import { inputvalue } from "../components/inputfield";
import { useNavigate } from "react-router-dom";

export let deletechar = "";
export let afterDeleteInputValue = "";
export let newInputValue = "";


let isFirstTime;



export default function Card(props) {
  isFirstTime = props.check;

  



  // const randomColor = () => {
  //   const r = Math.floor(Math.random() * 256);
  //   const g = Math.floor(Math.random() * 256);
  //   const b = Math.floor(Math.random() * 256);
  //   return `rgb(${r}, ${g}, ${b})`;
  // };

  // console.log("check: " + props.check);
  const navigate = useNavigate();

  const handleClick = (index) => {
    if (index !== -1) {

      if (isFirstTime) {
        afterDeleteInputValue = inputvalue;
        isFirstTime = false;
      }

      const beforeindex = afterDeleteInputValue.substring(0, index);
      const afterindex = afterDeleteInputValue.substring(index + 1);


      deletechar = props.value;

      let newBeforeIndex = "";
      let newAfterIndex = "";

      for (let i = 0; i < beforeindex.length; i++) {
        if (beforeindex[i] !== deletechar) {
          newBeforeIndex += beforeindex[i];
        }
      }

      for (let i = 0; i < afterindex.length; i++) {
        if (afterindex[i] !== deletechar) {
          newAfterIndex += afterindex[i];
        }
      }
      
      const newInputValue = newBeforeIndex + deletechar + newAfterIndex;
      afterDeleteInputValue = newInputValue;
    }
    navigate("/afterdelete");
  };

  if(props.duplicate) {
    return (
      <div className="card">
        <button className="card_body_d" onClick={() => handleClick(props.index) }  style={{backgroundColor: props.color}}>
          {props.value}
          <i class="fa fa-trash delete-icon"></i>
        </button>
      </div>
    );
  } else {
    return (
      <div className="card">
        <button className="card_body_nd" onClick={() => handleClick(props.index)} style={{backgroundColor: props.color}}> 
          {props.value}
          <i class="fa fa-trash delete-icon"></i>
        </button>
      </div>
    );
  }
} 
