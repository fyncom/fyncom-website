import React, {useState} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import heroImageFilter from "../images/email-filter-gmail.png"
import emailFilterFyncom from "../images/email-filter-fyncom.png"
import getPaidToBlockSpamEmails from "../images/get-paid-to-block-spam-emails.png"
import cleanInboxCleanMind from "../images/a-clean-inbox-and-a-focused-mind.png"
import nanoQrCode from "../images/qr-code-fyncom-filter-email-edition-nano.png";
import "../components/use-cases.css"
import { Link } from "gatsby";
import Seo from "../components/seo";

const FyncomFiltersEmailEdition = () => {
  return (
    <div className="fyncom-email-filter">
      <Seo
        title="Email Cash Back"
        description="FynCom Filters for GMail let you decide the value an email should have before it hits your inbox. Works right in your GMail app"
      />
      <Header />
      <div className="hero-section">
        <img className="story-image" src={heroImageFilter} alt="Get paid to block spam emails with FynCom!" />
        <div className="hero-content">
          <h1>Block Spam Emails. Get Instantly Paid.</h1>
          <p>Save time. Only see unknown emails that are so important, <b>senders are willing to lose money (to you)</b> if you don't respond.
            Block 100 emails / month, free.
          </p>
          {/*link this to anchor 1*/}
          <a href="https://calendly.com/adrian-fyncom/30min">
            <button className="demo-button">Start now</button>
          </a>
        </div>
      </div>

        <div className="use-cases-container">
          <h2>Get Paid to Block Spam Emails</h2>
          <sub>Save time. Only see unknown emails that are so important, senders are willing to lose money (to you) if you don't respond.</sub>
          <br/>
          <br/>

          <div className="use-case-section">
            <div className="use-case-image">
              <img src={getPaidToBlockSpamEmails} alt="Understand your customers better" />
              <p className="centered">Spam emails go into a "FynFiltered" folder and you get paid each time.</p>
            </div>
            <div className="use-case-image">
              <img src={cleanInboxCleanMind} alt="Understand your customers better" />
              <p className="centered">Keep your inbox for known contacts & people willing to put their $$ where their email is.</p>
            </div>
          </div>

          <div className="use-case-section">
            <div className="use-case-image">
              <img src={emailFilterFyncom} alt="Understand your customers better" />
            </div>
            <div className="use-case-description">
              <h3>Reduce unwanted emails by 100%</h3>
              <p>...for less than $15 / year. Get paid for each blocked spam email. Get your FynCom Filter today!</p>
              <Link to="/understanding-customers-use-cases" className="learn-more-btn">LEARN MORE</Link>
            </div>
          </div>

          {/* pricing table should go here */}

          <p className="centered">Block less than 100 email per month? <Link to="/user-help-center/email-filters-and-rewards">Try it for free!</Link></p>

          <div className="use-case-section">
            <div className="use-case-description">
              <h3>Want to reserve your spot with nano?</h3>
              <p>Send us the USD equivalent of nano, then email us. Try the QR code or use the nano address below.</p>
              <sub>pay to: nano_3fi1tert5344eh9w5u33349rogs7dyaq3twg71fqsw7rupno3hj7c6wj7k4j</sub> <br/><br/>
              <sub>email to: support@fyncom.com</sub>
            </div>
            <div className="use-case-image">
              <img src={nanoQrCode} alt="Close more deals" />
            </div>
          </div>

          <div className="fyncom-logo"></div>
        </div>
      <Footer />
    </div>
  )
}

export default FyncomFiltersEmailEdition
