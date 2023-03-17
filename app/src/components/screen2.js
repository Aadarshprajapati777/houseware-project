import React from "react";
import Card from "../UI/card";
import "./screen2.css";
import { inputvalue } from "../components/inputfield";



export default function Screen2() {
    const characters = inputvalue.split(""); 
    
    return (
        <div className="character_container">
            {characters.map((character, index) => (
                <Card key={index} value={character} className="character_card" index={index} />
            ))}
        </div>
    );
}
