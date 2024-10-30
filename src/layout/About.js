import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function About() {
    const Navigat = useNavigate()
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
    return(
        <div>
        <h1>about</h1>
        <button onClick={Car}>Car</button>
        <button onClick={Contact}>Contact</button>
        <Link to={"/mobile"}>Mobile</Link>
        <button onClick={oneBack}>1 back</button>
        <button onClick={Backtohome}>back to home</button>
        </div>

    )

}

export default About