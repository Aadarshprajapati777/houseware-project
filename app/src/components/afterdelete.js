import React from "react";
import { afterDeleteInputValue } from "../UI/card";
import Card from "../UI/card";
import "./afterdelete.css";

export default function Afterdelete() {
    const characters = afterDeleteInputValue.split("");
    return (
        <div className="card">
             <div className="character_container">
            <h1 className="character_title">Characters-After Delete</h1>
            {characters.map((character, index) => (
                <Card key={index} value={character} className="character_card" index={index} />
            ))}
        </div>
        </div>
      );
    }