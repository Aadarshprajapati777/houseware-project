import React from "react";
import { afterDeleteInputValue } from "../UI/card";
import Card from "../UI/card";
import "./afterdelete.css";
import { inputvalue } from "./inputfield";
import { useNavigate } from "react-router-dom";

export default function Afterdelete() {
  const characters = afterDeleteInputValue.split("");
  const navigate = useNavigate();

  const handle_back = () => {
    navigate("/");
  };

  return (
    <div className="card">
      <div className="character_container">
        <button className="back_button" onClick={handle_back}>
          Back
        </button>
        <h1 className="character_title">Characters-After Delete</h1>
        {characters.map((character, index) => (
          <Card
            key={index}
            value={character}
            className="character_card"
            index={index}
          />
        ))}
        <div className="original_characters">
          <h2 className="original_string"> Original String was:- </h2>
          <h2 className="original_string_value"> {inputvalue}</h2>
        </div>
      </div>
    </div>
  );
}
