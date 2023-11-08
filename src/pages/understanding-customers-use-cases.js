import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/sales-and-marketing-use-cases.css";
import sendgrid from "../images/logos/SG_Twilio_Lockup_RGBx1.png";
import slicktext from "../images/logos/SlickText_Logo-Transparent.png";
import zapier from "../images/logos/2560px-Zapier_logo.png";
import customerHeroImage from "../images/illustrations/marketing-mobile-survey.png";
import seamlessIntegrations from "../images/illustrations/seamless-integrations-comfy.png";
import loyalCustomers from "../images/illustrations/identifying-loyal-customers.png";
import driveAdoption from "../images/illustrations/customer-journey-optimization.png";

const UnderstandingCustomersUseCase = () => {
  return (
    <div className="understanding-customers-use-cases">
      <Header />
      <div className="hero-section">
        <img className="story-image" src={customerHeroImage} alt="use micro-rewards to keep customers moving down through their journey" />
        <div className="hero-content">
          <h1>Get to know your customers</h1>
          <p>Incentivize customers to complete their onboarding journey in order to understand product barriers </p>
          <a href="https://calendly.com/adrian-fyncom/30min">
            <button className="demo-button">Request Demo</button>
          </a>
        </div>
      </div>

      <div className="use-cases-sales-marketing-container">
        <div className="use-case">
          <img className="use-case-image" src={seamlessIntegrations} alt="integrate rewards into the hardest parts of your customer journey" />
          <h2>Seamless Integration</h2>
          <p>We work with you to provide rewards for customers completing type form surveys</p>
        </div>
        <div className="use-case">
          <img className="use-case-image" src={loyalCustomers} alt="find the traits of your most loyal customers more quickly" />
          <h2>Identify Loyal Customers</h2>
          <p>Reward your loyal customers and drive referrals </p>
        </div>
        <div className="use-case">
          <img className="use-case-image" src={driveAdoption} alt="using rewards at the hardest part of your product onboarding is key" />
          <h2>Drive Adoption & Onboarding</h2>
          <p>Properly timed incentives guide your customers' journeys and encourage long-term usage</p>
        </div>
      </div>

      <div className="integrations-section">
        <h2>INTEGRATIONS</h2>
        <div className="logos-container">
          <img src={sendgrid} alt="SendGrid" className="logo" />
          <img src={slicktext} alt="SlickText" className="logo" />
          <img src={zapier} alt="Zapier" className="logo" />
        </div>
      </div>

      <div className="call-to-action">
        <h2>Accelerate sales pipeline & hit revenue targets by using action-oriented rewards to guide prospects through your funnels</h2>
        <a href="https://calendly.com/adrian-fyncom/30min" className="cta-button">
          Request Demo
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default UnderstandingCustomersUseCase;
