import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Seo from "../components/seo";
import "../components/contact.css"; // Make sure to create this CSS file for styles


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
        <p>FynCom is a financial communications layer for the internet. We help you stop spam and scams, while making money for yourself or your organization.</p>
        <p>FynCom is a tech company whose primary product is a Rewards Add-on that rewards people when they respond. Now, your EXISTING tools
          (emails, forms, texts, calls, Zapier, etc.) can be enhanced with instant rewards. Automaically reward people when they respond or engage with
          your marketing / sales processes.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
