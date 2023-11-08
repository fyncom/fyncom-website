import React from "react"
import fyncomLogo from "../images/FynCom_Logo_New-LARGEST.png"
import "./header.css" // Importing the CSS file
import {Link} from "gatsby";
import helpItems from "../../static/help-items";


const Header = () => {
    return (
    <header className="header-top">
      <div className="header-container">
        <a href="/">
          <div className="fyncom-logo-header">
            <img src={fyncomLogo} alt="FynCom Logo" />
          </div>
        </a>
        <ul className="nav-links">
          <li className="dropdown">
            <a href="/use-cases" className="dropbtn">Use Cases</a>
            <div className="dropdown-content">
              <a href="/marketing-use-cases">Marketing</a>
              <a href="/sales-use-cases">Sales</a>
              <a href="/understanding-customers-use-cases">Understanding Customers</a>
            </div>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li className="dropdown">
            <a href="/help-center" className="dropbtn">Help</a>
            <div className="dropdown-content">
              {helpItems.map((item) => (
                <Link to={`/help-center/${item.topicUrl}?contentUrl=${encodeURIComponent(item.url)}`} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
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
