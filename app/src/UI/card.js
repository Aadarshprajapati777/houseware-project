import React from "react"
import { inputvalue } from "../components/inputfield";

export default function Card() {
   
    return(
        <div className="card_body">
            <h1>Card</h1>
            <h2>{inputvalue}</h2>
        </div>
    );
};