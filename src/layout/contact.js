import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
    const Navigat = useNavigate()
    function About() {
        Navigat("/about")
    }
    function Car() {
        Navigat("/car")
    }
    function onehome() {
        Navigat(-1)
    }
    function backtohome() {
        Navigat("/")
    }

    return (
        <div>
            <h1>
                Contact
            </h1>
            <button onClick={Car}>Car</button>
            <button onClick={About}>About</button>
            <Link to={"/mobile"}>Mobile</Link>
            <button onClick={onehome}>1 back</button>
            <button onClick={backtohome}>back to home</button>

        </div>
    )

}

export default Contact

