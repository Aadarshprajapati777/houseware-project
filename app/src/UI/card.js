import React from "react"
import "./card.css"
import { inputvalue } from "../components/inputfield";


export let deletechar = "";

export default function Card(props) {
   const handleClick = () => {
        console.log(props.value);
        deletechar=props.value;
        console.log("deletechar: " + deletechar);
        const index = inputvalue.indexOf(deletechar);
        console.log("index: " + index);
        const characters = inputvalue.split("");
        console.log("charaxterlength: " + characters.length);
        if (index !== -1) {
            const newInputValue = inputvalue.substring(0, index) + inputvalue.substring(index + 1);
            console.log("new inputvalue: " + newInputValue);
            inputvalue = newInputValue;
        }

        console.log("after deleting inputvalue: " + inputvalue);
    };
    return(
        <div className="card">
            <button className='card_body' onClick={handleClick}> {props.value} </button>
        </div>
    );
};


