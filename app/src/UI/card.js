import React from "react"
import "./card.css"

export default function Card(props) {
   
    return(
        <div className="card_body">
            <h2 className="card">{props.value}</h2>
        </div>
    );
};