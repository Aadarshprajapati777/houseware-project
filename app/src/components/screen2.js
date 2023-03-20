import React from "react";
import Card from "../UI/card";
import "./screen2.css";
import { inputvalue } from "../components/inputfield";
import { useNavigate } from "react-router-dom";

let check = false; // useful when user clicks on back button and then again enter some string and then click on submit button

export default function Screen2() {
  const characters = inputvalue.split("");
  const navigate = useNavigate();
  check = true; //useful when screen2 render the card component as pass it as a prop to card component
  const handle_back_button = () => {
    navigate("/");
  };

  let duplicate = [];
  let nonduplicate = [];

  for (let i = 0; i < characters.length; i++) {
    if (!nonduplicate.includes(characters[i])) {
      nonduplicate.push(characters[i]);
    } else {
      if (!duplicate.includes(characters[i])) {
        duplicate.push(characters[i]);
      }
    }
  }
  for (let i = 0; i < duplicate.length; i++) {
    nonduplicate.splice(nonduplicate.indexOf(duplicate[i]), 1);
  }

  console.log("duplicate: " + duplicate);
  console.log("nonduplicate: " + nonduplicate);

  return (
    <div className="character_container">
      <h1 className="character_title">Characters-Before Delete</h1>
      {/* {characters.map((character, index) => (
        <Card
          key={index}
          value={character}
          className="character_card"
          index={index}
          check={check}
        />
      ))} */}

      {characters.map((character, index) => {
        if (nonduplicate.includes(character)) {
          return (
            <Card
              key={index}
              value={character}
              className="character_card"
              index={index}
              check={check}
              duplicate={false}
            />
          );
        } else {
          return (
            <Card
              key={index}
              value={character}
              className="character_card"
              index={index}
              check={check}
              duplicate={true}
            />
          );
        }
      }
      )}

      <button className="back_button" onClick={handle_back_button}>
        Back
      </button>
    </div>
  );
}
