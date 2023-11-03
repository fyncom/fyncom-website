import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import mobileMarketing from "../images/marketing-mobile-survey.webp"
// import mobileMarketing from "../images/marketing-mobile-survey.png"
import "../components/use-cases.css"

const UseCases = () => {
  return (
    <div className="use-cases-container">
      <Header />
      <h1>Drive the behavior you want</h1>
      <p>Enhance your sales, marketing & customer feedback tools</p>
      <p>Today's Attention Economy makes time spent with your brand increasingly valuable, yet people's attention span gets progressively worse!</p>
      <p>Use FynCom's interactive rewards to grow the attention span of their target audiences, creating engagement that would otherwise be lost.</p>

      <div className="use-case-section">
        <div className="use-case-image">
          {/* Placeholder Image */}
          <img src={mobileMarketing} alt="Understand your customers better" />
        </div>
        <div className="use-case-description">
          <h2>01</h2>
          <h3>Understand your customers better</h3>
          <p>Treat each customer feedback survey as a reward campaign, reduce admin time, and generate trust with your contacts</p>
          <a href="/use-cases/understand-customers" className="learn-more-btn">LEARN MORE</a>
        </div>
      </div>

      <div className="use-case-section">
        <div className="use-case-image">
          {/* Placeholder Image */}
          <img src="/path/to/image2.png" alt="Close more deals" />
        </div>
        <div className="use-case-description">
          <h2>02</h2>
          <h3>Close more deals</h3>
          <p>Break large gift into strategic points on your customer journey to reduce your Cost Per Lead</p>
          <a href="/use-cases/close-deals" className="learn-more-btn">LEARN MORE</a>
        </div>
      </div>

      <div className="use-case-section">
        <div className="use-case-image">
          {/* Placeholder Image */}
          <img src="/path/to/image3.png" alt="Increase Customer Engagement" />
        </div>
        <div className="use-case-description">
          <h2>03</h2>
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

      <div className="fyncom-logo">
        {/* Placeholder Logo */}
        <img src="/path/to/fyncom-logo.png" alt="FynCom" />
      </div>
      <Footer />
    </div>
  )
}

export default UseCases
