import React from "react"
import fyncomLogo from "../images/FynCom_Logo_New-LARGEST.png"
import "./header.css" // Importing the CSS file


const Header = () => {
  return (
    <header className="header-top">
      <div className="header-container">
        <a href="/">
          {/*<img src={fyncomLogo} alt="FynCom Logo" />*/}
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
              <a href="/rewards-for-emails-texts-and-more">Overview of Rewards Tools</a>
              <a href="/zapier-rewards">Zapier API Key Setup</a>
              <a href="/simple-email-rewards-setup">Simple Email Setup</a>
              <a href="/email-forwarding-setup-for-instant-rewards-delivery">Email Setup - Marketing/Basic</a>
              <a href="/sendgrid-integration-api-key">Sendgrid API Key</a>
              <a href="/help-center/add-fyncom-rewards-to-sendgrid-marketing-email">Sendgrid Rewards Emails</a>
              <a href="/sendgrid-drafts-preparation">Sendgrid Drafts - Setup</a>
              <a href="/help-article-content">Account Balance</a>
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
