import React from "react"
import fyncomLogo from "../images/FynCom_Logo_New-LARGEST.png"
import "./header.css" // Importing the CSS file


const Header = () => {
  return (
    <header className="header-top">
      <div className="header-container">
        <a href="https://www.fyncom.com">
          <img src={fyncomLogo} alt="FynCom Logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="https://www.fyncom.com/use-cases">Use Cases</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/about">About</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/pricing">Pricing</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/blog">Blog</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/help-center">Help</a>
          </li>
        </ul>
        <div className="login-buttons">
          <a href="https://dashboard.fyncom.com/">
            <button className="business">Business Login</button>
          </a>
          <a href="https://app.fyncom.com/">
            <button className="user">User Login</button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
