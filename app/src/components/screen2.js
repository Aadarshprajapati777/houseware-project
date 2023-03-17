import React from "react";
import Card from "../UI/card";
import "./screen2.css";
import { inputvalue } from "../components/inputfield";

export default function Screen2() {
    const characters = inputvalue.split(""); 
    
    return (
        <div className="character_container">
            {characters.map((character) => (
                <Card key={character} value={character} className="character_card" />
            ))}
            

        </div>
    );
}

