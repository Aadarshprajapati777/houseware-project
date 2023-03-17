import React from "react"

export default function Card(props) {
   
    return(
        <div className="card_body">
            <h2 className="card">{props.value}</h2>
            
        </div>
    );
};