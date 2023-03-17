import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export let inputvalue  = "";   

export default function Inputfield() {
  const [input, setInput] = useState("");
  const navigate=useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      console.log(input);
        navigate("/screen2");

        inputvalue = input;

    } else {
      alert("Input is empty");
    }
  };

  return (
    <div>
      <h1>Inputfield</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
