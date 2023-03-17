import React from "react";
import Card from "../UI/card";
import { inputvalue } from "../components/inputfield";

export default function Screen2() {
    const characters = inputvalue.split(""); 
    
    return (
        <div className="character">
            {characters.map((character) => (
                <Card key={character} value={character} />
            ))}
        </div>
    );
}

