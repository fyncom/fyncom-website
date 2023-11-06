import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/marketing-use-cases.css"
import sendgrid from "../images/logos/SG_Twilio_Lockup_RGBx1.png"
import slicktext from "../images/logos/SlickText_Logo-Transparent.png"
import zapier from "../images/logos/2560px-Zapier_logo.png"
import pageImage from "../images/illustrations/handshake.png"

const MarketingUseCases = () => {
  return (
    <div className="marketing-use-cases">
      <Header />
      <div className="image-section">
      </div>
      {/* Main Content */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>INCREASE CUSTOMER ENGAGEMENT</h1>
          <p>Guide your customers along the customer journey and support the sales team by finding qualified leads</p>
          <button className="demo-button">REQUEST A DEMO</button>
        </div>
      </div>

      <div className="use-cases-container">
        <div className="use-case">
          <h2>Seamless Integration</h2>
          <p>We work with you to integrate FynCom to your web page and marketing communications</p>
        </div>
        <div className="use-case">
          <h2>Encourage Learning</h2>
          <p>Encourage your customers to learn more about your product and offerings by providing incentives along the way</p>
        </div>
        <div className="use-case">
          <h2>Minimize Spend</h2>
          <p>Only pay for rewards when your customers move to the next phase of your customer journey</p>
        </div>
      </div>

      <div className="integrations-section">
        <h2>INTEGRATIONS</h2>
        <div className="logos-container">
          {/* Logos can be <img> elements with src set to the logo images */}
          <img src={sendgrid} alt="Twilio" className="logo" />
          <img src={slicktext} alt="SlickText" className="logo" />
          <img src={zapier} alt="Zapier" className="logo" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MarketingUseCases
