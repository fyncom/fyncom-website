import React from "react"
import "./footer.css"
import fbLogo from "../images/logos/facebook-logo.webp"
import linkedInlogo from "../images/logos/linkedin-logo.webp"
import xLogo from "../images/logos/twitter-logo-change-x-elon-musk-designboom-500.webp"
import fyncomLogoWhite from "../images/fyncom-logo-white.png"
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div>
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
            We are located in Merced, CA, focused in the USA & operate globally.
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
            <Link to="/use-cases">Product</Link>
          </li>
          <li>
            <Link to="/use-cases">Reward Campaigns</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/help-center">Help</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/terms-of-service">Terms of Use</Link>
          </li>
          <li>
            <Link to="/sitemap">Sitemap</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
    </div>
  )
}

export default Footer
