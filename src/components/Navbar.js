import React from "react";

function Navbar(){
    return(
        <>
          <nav>
            <div className="logo">My Portfolio</div>
            <div>
              <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          
        </>
    )
}

export default Navbar