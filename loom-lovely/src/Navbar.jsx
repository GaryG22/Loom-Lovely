import { useState } from "react"

function Navbar(){
    return (
        <nav>
        <div className ="navbar">
          <div className="container nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>  
            <div className="logo">
              <h1>Cloud Pouch</h1>
            </div>
            <div className="menu-items">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop!</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">contact</a></li>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar