import React from "react";
import { Link, Route, useNavigate } from "react-router-dom";



function Home() {
    const Navigat = useNavigate()
    function About() {
        Navigat("about")
    }
    function Contact() {
        Navigat("contact")
    }
    function Car() {
        Navigat("car")
    }
   
    return(
       <div>
        <h1>Home page</h1>
        <button onClick={About}>About</button>
        <button onClick={Car}>Car</button>
        <button onClick={Contact}>Contact</button>
        <Link to={"/mobile"}>Mobile</Link>
       </div>        
    )
}

export default Home