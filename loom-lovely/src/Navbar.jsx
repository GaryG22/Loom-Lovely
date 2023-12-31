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
              <h1>lá álainn</h1>
              <div href = "#" className = "cart-container">
                <img className = "cart-icon" src = "https://i.postimg.cc/MHjFFHBC/bag-Photo-Room.png" />
                <h5 className = "cart-num">0</h5>
              </div>
              <div href = "#"  className = "login">
                <img className = "login-icon" src = "https://i.postimg.cc/N0xLzhrD/login-Photo-Room.png"/>
                <h3 className = "login-title">Log In</h3>
              </div>
          </div>
            <div className="menu-items">
              <li><a href="#">Home</a></li>
              <li><a href="#section1">Shop!</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar