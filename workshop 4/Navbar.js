import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Workshop</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;