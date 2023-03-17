import React from "react"
import "./card.css"
import { inputvalue } from "../components/inputfield";
import { useNavigate } from 'react-router-dom';


export let deletechar = "";
export let afterDeleteInputValue = "";

export default function Card(props) {

    const navigate=useNavigate();


    const handleClick = (index) => {
      console.log("index: " + index);
      if (index !== -1) {
        const newInputValue = inputvalue.substring(0, index) + inputvalue.substring(index + 1);
        console.log("new inputvalue: " + newInputValue);
        afterDeleteInputValue = newInputValue;
      }

      console.log("after deleting inputvalue: " + inputvalue);
      navigate("/afterdelete");

    };
    return (
      <div className="card">
        <button className="card_body" onClick={() => handleClick(props.index)}>
          {props.value}
        </button>
      </div>
    );
  };
  