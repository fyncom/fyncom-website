import React from "react";
import fyncomLogo from "../images/FynCom_Logo_New-LARGEST.png";
import "./header.css";
import {Link} from "gatsby";
import helpItems from "../../static/help-items";

const Header = () => {
    return (
    <header className="header-top">
      <div className="header-container">
        <Link to="/">
          <div className="fyncom-logo-header">
            <img src={fyncomLogo} alt="FynCom Logo" />
          </div>
        </Link>
        <ul className="nav-links">
          <li className="dropdown">
            <Link to="/use-cases" className="dropbtn">Use Cases</Link>
            <div className="dropdown-content">
              <Link to="/marketing-use-cases">Marketing</Link>
              <Link to="/sales-use-cases">Sales</Link>
              <Link to="/understanding-customers-use-cases">Understanding Customers</Link>
            </div>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li className="dropdown">
            <Link to="/help-center" className="dropbtn">Help</Link>
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
