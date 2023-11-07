import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import mobileMarketing from "../images/illustrations/marketing-mobile-survey.webp"
import phoneCalls from "../images/illustrations/sales-phone-calls.webp"
import closingDeals from "../images/close-deals-customers-engagement.webp"
import fyncomLogo from "../images/FynCom_Logo_New-LARGEST.png"
import "../components/use-cases.css"

const UseCases = () => {
  return (
    <div>
      <Header />
        <div className="use-cases-container">
          <h1>Drive the behavior you want</h1>
          <sub>Enhance your sales, marketing & customer feedback tools</sub>
          <br/>
          <br/>
          <p>Today's Attention Economy makes time spent with your brand increasingly valuable, yet people's attention span gets progressively worse!
            Use FynCom's interactive rewards to grow the attention span of their target audiences, creating engagement that would otherwise be lost.</p>

          <div className="use-case-section">
            <div className="use-case-image">
              <img src={mobileMarketing} alt="Understand your customers better" />
            </div>
            <div className="use-case-description">
              <h3>Understand your customers better</h3>
              <p>Treat each customer feedback survey as a reward campaign, reduce admin time, and generate trust with your contacts</p>
              <a href="/use-cases/understand-customers" className="learn-more-btn">LEARN MORE</a>
            </div>
          </div>

          <div className="use-case-section">
            <div className="use-case-description">
              <h3>Close more deals</h3>
              <p>Break large gift into strategic points on your customer journey to reduce your Cost Per Lead</p>
              <a href="/use-cases/close-deals" className="learn-more-btn">LEARN MORE</a>
            </div>
            <div className="use-case-image">
              <img src={phoneCalls} alt="Close more deals" />
            </div>
          </div>

          <div className="use-case-section">
            <div className="use-case-image">
              <img src={closingDeals} alt="Increase Customer Engagement" />
            </div>
            <div className="use-case-description">
              <h3>Increase Customer Engagement</h3>
              <p>Increase customer engagement and increase customer loyalty by offering incentivized rewards along the sales funnel to encourage your audience to learn more about your products and offerings</p>
              <a href="/use-cases/customer-engagement" className="learn-more-btn">LEARN MORE</a>
            </div>
          </div>

          <div className="demo-form">
            <h2>REQUEST A DEMO</h2>
            <p>Get in contact with us!</p>
            <form action="/submit-demo-request" method="post">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Type your message here..." required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          {/*Div holds the dark/light - src for fallback*/}
          <div className="fyncom-logo">
            <img src={fyncomLogo} alt="FynCom Logo" />
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default UseCases
