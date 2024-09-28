/* ==========================
   File Name: [layout.jsx]
   Student’s Name: Thadee Sidyumunsi
   Student ID: 301432375
   Date: 9/25/204
   ========================== */
import React from 'react';
import { Link } from 'react-router-dom';


export default function Layout() {
  return (
    <>
    <div id ="title">
        <h1>Thadee's Portfolio</h1>
     {/* <img src= "../Images/text_logo.png"></img> */}
    <img src= "../Images/Thadee Bear.png" className="logo"></img>
     </div>
      
      <nav className ="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>

            
        </ul>
        
      </nav>     
    </>
  );
}


