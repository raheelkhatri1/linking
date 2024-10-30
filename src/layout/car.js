import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Car() {
    const Navigat = useNavigate()
    function About() {
        Navigat("/about")
    }
    function Contact() {
        Navigat("/contact")
    }
   
    function Backtohome() {
        Navigat("/")
    }
    function oneBack() {
        Navigat(-1)
    }
    return (
        <div>
            <h1>Car</h1>
            <button onClick={About}>About</button>
            <button onClick={Contact}>Contact</button>
            <Link to={"/mobile"}>Mobile</Link>
            <button onClick={oneBack}>1 back</button>
            <button onClick={Backtohome}>back to home</button>
        </div>
    )

}

export default Car