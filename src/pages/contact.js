import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Seo from "../components/seo";
import "../components/contact.css";
import googlePlayBadge from "../images/google-play-en.png";
import appStoreBadge from "../images/apple-en.png";
import fyncomFilters from "../images/fyncom-filters.png"; // Make sure to create this CSS file for styles


const Contact = () => {
  return (
    <div>
      <Seo
        title="Contact Us"
        description="Send a contact request to Team FynCom and we'll get back to you shortly"
      />
      <Header />
      <main className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out to us.</p>
        <form className="contact-form" action="/submit-form" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <h2>What is FynCom?</h2>
        <p>FynCom helps you stop spam and scams, while making money for yourself or your organization.</p>
        <p>We build "money layers" on top of communications platforms / protocols & enforce escrow between unknown parties while rewarding people who block spam.</p>
        <p>We're a tech company that help people trust emails, calls, direct messages and any sort of inbound communication.</p>
        <p>We do this by integrating refundable transactions into the tools we use everyday.</p>

        <i><p>Sometimes our tools like consumer products as shown towards the page bottom...</p></i>

        <p>But, most of our focus is on helping businesses create trust in their communications. Whether that's in helping prevent business imposters
          or government imposters from reducing your brand affinity or by giving revenue operations teams the tools to enhance sales & marketing efforts by rewarding
          people to respond / engage with outbound messages</p>

        <i><p className="centered">Examples of our consumer tools</p></i>
        <h1 className="centered">Spam Sucks!</h1>
        <h2 className="centered">Get instantly paid to block bad emails & calls with...</h2>
        <div className="fyncom-filters-words">
          <img src={fyncomFilters} alt="FynCom Filters" />
        </div>
        <div className="info-section">
          <p>
            Save time & let us pay you to ignore those scam emails & calls! Be
            the first to know when our text / SMS blocking tech is ready by
            signing up to one of our apps today!
          </p>
          <ul className="info-list">
            <li>Calls</li>
            <ul className="calls-list">
              <li>
                Android.{" "}<a href="https://play.google.com/store/apps/details?id=com.fyncom.robocash">Free.</a>
                <a href="https://play.google.com/store/apps/details?id=com.fyncom.robocash" className="store-badges">
                  <img className="app-img" src={googlePlayBadge} alt="Get KarmaCall on Google Play" />
                </a>
              </li>
              <li>
                iOS.{" "}<a href="https://apps.apple.com/us/app/karmacall/id1574524278">$1.99 with 1 month trial.</a>
                <a href="https://apps.apple.com/us/app/karmacall/id1574524278" className="store-badges">
                  <img className="app-img" src={appStoreBadge} alt="Download KarmaCall on the App Store" />
                </a>
              </li>
            </ul>
            <li>Emails</li>
            <ul className="emails-list">
              <li>Gmail.{" "}<Link to="/fyncom-filters-email-edition">Free for 1st 100 blocked emails per month.</Link>
              </li>
            </ul>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
