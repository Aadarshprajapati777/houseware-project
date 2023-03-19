import React from "react";
import Card from "../UI/card";
import "./screen2.css";
import { inputvalue } from "../components/inputfield";
import { useNavigate } from "react-router-dom";


let check = false; // useful when user clicks on back button and then again enter some string and then click on submit button

export default function Screen2() {
  const characters = inputvalue.split("");
  const navigate = useNavigate();
  check = true;  //useful when screen2 render the card component as pass it as a prop to card component
  const handle_back_button = () => {
    navigate("/");
  };

  return (
    <div className="character_container">
      <h1 className="character_title">Characters-Before Delete</h1>
      {characters.map((character, index) => (
        <Card
          key={index}
          value={character}
          className="character_card"
          index={index}
          check={check}
        />
      ))}

      <button className="back_button" onClick={handle_back_button}>
        Back
      </button>
    </div>
  );
}
