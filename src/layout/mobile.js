import React from "react";
import { useNavigate } from "react-router-dom";

function Mobile() {
    const Navigat = useNavigate()
    function About() {
        Navigat("/about")
    }
    function Contact() {
        Navigat("/contact")
    }
    function Car() {
        Navigat("/car")
    }
    function oneBack() {
        Navigat(-1)
    }
    function Backtohome() {
        Navigat("/")
    }
    return (
        <div>
            <h1>Mobile</h1>
            <button onClick={Car}>Car</button>
            <button onClick={Contact}>Contact</button>
            <button onClick={About}>about</button>
            <button onClick={oneBack}>1 back</button>
            <button onClick={Backtohome}>back to home</button>
        </div>
    )

}

export default Mobile