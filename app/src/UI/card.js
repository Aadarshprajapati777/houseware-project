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
        const beforeindex = inputvalue.substring(0, index);
        const afterindex = inputvalue.substring(index + 1);

        console.log("beforeindex: " + beforeindex);
        console.log("afterindex: " + afterindex);

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


        const newInputValue = newBeforeIndex + deletechar + newAfterIndex


        // console.log("deletechar: " + deletechar);
        // console.log("newBeforeIndex: " + newBeforeIndex);
        // console.log("newAfterIndex: " + newAfterIndex);

        // console.log("newInputValue: " + newInputValue);
        
        afterDeleteInputValue = newInputValue;
      }

      navigate("/afterdelete");

    };
    return (
      <div className="card">
        <button className="card_body" onClick={() => handleClick(props.index)}>

          {props.value}
          <i class="fa fa-trash delete-icon"></i>
        </button>
      </div>
    );
  };
  