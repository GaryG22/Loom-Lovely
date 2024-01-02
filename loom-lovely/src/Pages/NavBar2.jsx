function NavBar2(){

    return (
        <nav>
        <div className ="navbar2">
          <div className="container2 nav-container2">
              <input className="checkbox2" type="checkbox" name="" id="" />
              <div className="hamburger-lines2">
                <span className="line line12"></span>
                <span className="line line22"></span>
                <span className="line line32"></span>
              </div>
          <div className="logo2">
              <h1>lá álainn</h1>
              <div href = "#" className = "cart-container2">
                <img className = "cart-icon2" src = "https://i.postimg.cc/MHjFFHBC/bag-Photo-Room.png" />
                <h5 className = "cart-num2">0</h5>
              </div>
              <div href = "#"  className = "login2">
                <img className = "login-icon2" src = "https://i.postimg.cc/N0xLzhrD/login-Photo-Room.png"/>
                <h3 className = "login-title2">Log In</h3>
              </div>
          </div>
            <div className="menu-items2">
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

export default NavBar2