import React from "react"
import "./footer.css" // Importing the CSS file
import fbLogo from "../images/facebook-logo.webp"
import linkedInlogo from "../images/linkedin-logo.webp"
import xLogo from "../images/twitter-logo-change-x-elon-musk-designboom-500.webp"
import fyncomLogoWhite from "../images/fyncom-logo-white.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
        <a href="https://www.linkedin.com/company/fyncom">
          <img src={fyncomLogoWhite} alt="FynCom Logo" />
        </a>
        <div className="info-container">
          <p>
            <a href="mailto:info@fyncom.com">info@fyncom.com</a>
          </p>
          <p>
            We are located in Irvine, CA, focused in the USA & operate globally.
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
          {/*todo set this up so that only 1 is visble*/}
          <li>
            <a href="/use-cases">Product</a>
          </li>
          <li>
            <a href="/use-cases">Reward Campaigns</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/help-center">Help</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Use</a>
          </li>
          <li>
            <a href="/sitemap">Sitemap</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
