import React from "react";
import Inputfield from "./components/inputfield"
import Screen2 from "./components/screen2"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Inputfield />} />
                <Route exact path="/screen2" element={<Screen2 />} />
            </Routes>
        </Router>
    );
}