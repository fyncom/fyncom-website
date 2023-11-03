import React from "react"
import "./footer.css" // Importing the CSS file
import gatsbyImage from "../images/gatsby-icon.png"
import fbLogo from "../images/facebook-logo.webp"
import linkedInlogo from "../images/linkedin-logo.webp"
import xLogo from "../images/twitter-logo-change-x-elon-musk-designboom-500.webp"
import fyncomLogoWhite from "../images/fyncom-logo-white.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
        <div className="info-container">
          <a href="https://www.linkedin.com/company/fyncom">
            <img src={fyncomLogoWhite} alt="FynCom Logo" />
          </a>
          <p>
            <a href="mailto:info@fyncom.com">info@fyncom.com</a> | We are located
            in Irvine, CA, focused in the USA & operate globally.
          </p>
        </div>
      </div>

      <div className="footer-links-container">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/company/fyncom">
            <img src={linkedInlogo} alt="FynCom's Linkedin Page" />
          </a>
          <a href="https://twitter.com/Fyn_Com">
            <img
              src={xLogo}
              alt="FynCom's X (formally known as Twitter) logo"
            />
          </a>
          <a href="https://www.facebook.com/FynCom/">
            <img src={fbLogo} alt="FynCom's Facebook page" />
          </a>
        </div>
        <ul className="footer-links">
          <li>
            <a href="https://www.fyncom.com/use-cases">Product</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/use-cases">Reward Campaigns</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/about">About</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/pricing">Pricing</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/help-center">Help</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/blog">Blog</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <a href="https://www.fyncom.com/contact">Contact Us</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/terms-of-service">Terms of Use</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/sitemap">Sitemap</a>
          </li>
          <li>
            <a href="https://www.fyncom.com/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
