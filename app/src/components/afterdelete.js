import React from "react";
import { afterDeleteInputValue } from "../UI/card";
import Card from "../UI/card";

export default function Afterdelete() {
    const characters = afterDeleteInputValue.split("");
    return (
        <div className="card">
             <div className="character_container">
            {characters.map((character, index) => (
                <Card key={index} value={character} className="character_card" index={index} />
            ))}
        </div>
        </div>
      );
    }