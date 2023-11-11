import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/sales-and-marketing-use-cases.css"
import sendgrid from "../images/logos/SG_Twilio_Lockup_RGBx1.png"
import slicktext from "../images/logos/SlickText_Logo-Transparent.png"
import zapier from "../images/logos/2560px-Zapier_logo.png"
import handshake from "../images/illustrations/handshake.png"
import collaborate from "../images/illustrations/collaborating-with-others.png"
import effectiveSpend from "../images/illustrations/create-efficient-costs.png"
import integrations from "../images/illustrations/integrate-with-emails-and-more.png"
import Seo from "../components/seo";

const MarketingUseCases = () => {
  return (
    <div className="marketing-use-cases">
      <Seo
        title="Marketing Use Cases"
        description="FynCom helps you increase customer engagement and increase customer loyalty by offering incentivized rewards along the sales funnel to
        encourage your audience to learn more about your products and offerings"
      />
      <Header />
      <div className="hero-section">
        <img className="story-image" src={handshake} alt="Close deals more quickly with FynCom Rewards" />
        <div className="hero-content">
          <h1>Increase Customer Engagement</h1>
          <p>Guide your customers along the customer journey and support the sales team by finding qualified leads</p>
          <a href="https://calendly.com/adrian-fyncom/30min">
            <button className="demo-button">Request Demo</button>
          </a>
        </div>
      </div>

      <div className="use-cases-sales-marketing-container">
        <div className="use-case">
          <img className="use-case-image" src={integrations} alt="integrate into your basis digital tools" />
          <h2>Seamless Integration</h2>
          <p>We work with you to integrate FynCom to your web page and marketing communications</p>
        </div>
        <div className="use-case">
          <img className="use-case-image" src={collaborate} alt="work on revenue goals more effectively with your team" />
          <h2>Encourage Learning</h2>
          <p>Encourage your customers to learn more about your product and offerings by providing incentives along the way</p>
        </div>
        <div className="use-case">
          <img className="use-case-image" src={effectiveSpend} alt="easily see your costs per response" />
          <h2>Minimize Spend</h2>
          <p>Only pay for rewards when your customers move to the next phase of your customer journey</p>
        </div>
      </div>

      <div className="integrations-section">
        <h2 className="background-stripe">Popular Integrations</h2>
        <div className="logos-container">
          <img src={sendgrid} alt="Twilio" className="logo" />
          <img src={slicktext} alt="SlickText" className="logo" />
          <img src={zapier} alt="Zapier" className="logo" />
        </div>
      </div>

      <div className="use-cases-sales-marketing-container">
        <div className="call-to-action">
          <h2>Drive engagement and convert MQLs into SQLs by nudging leads to respond to emails, book meetings, & express intent with FynCom's action-oriented rewards</h2>
          <a href="https://calendly.com/adrian-fyncom/30min" className="cta-button">
            Request Demo
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MarketingUseCases
