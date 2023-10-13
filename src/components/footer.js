import React from "react"
import "./footer.css" // Importing the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
        <h2>FynCom</h2>
        <p>
          <a href="mailto:info@fyncom.com">info@fyncom.com</a> | We are located
          in Irvine, CA, focused in the USA & operate globally.
        </p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/company/fyncom">LinkedIn Pic</a>
          <a href="https://twitter.com/Fyn_Com">Twitter Pic</a>
          <a href="https://www.facebook.com/FynCom/">FB PIc</a>
        </div>
      </div>
      <div className="footer-links-container">
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
