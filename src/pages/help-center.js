import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/help-center.css";

const HelpCenter = () => {
  const helpItems = [
    { title: "Overview of Rewards Tools", description: "Learn more about our services", icon: "info-circle" },
    { title: "Zapier Setup", description: "Automate Rewards in Zapier", icon: "zap" },
    { title: "Simple Email Setup", description: "Set up your forwarding email No API key required. 1 Rewards Campaign at a time", icon: "envelope" },
    { title: "Sendgrid API Key", description: "Add your API key to FynCom", icon: "key" },
    { title: "Sendgrid Email Rewards", description: "Attach Rewards To Emails", icon: "mail-bulk" },
    { title: "Marketing & Basic Emails", description: "Set up your forwarding email Email API key required", icon: "chart-bar" },
    { title: "Sendgrid Drafts", description: "Prepare your Sendgrid draft for FynCom rewards", icon: "file-alt" },
    { title: "Account Balance", description: "Information about your balance", icon: "wallet" },
  ];

  return (
    <div>
      <Header />
      <div className="help-center">
        <h1 className="centered">Help Center</h1>
        <p className="centered">What do you need help with?</p>
        <a href="/user-help-center">Not a business? Click here for our User Help Center.</a>
        <div className="help-items">
          {helpItems.map(item => (
            <div key={item.title} className="help-item">
              <div className={`icon ${item.icon}`}></div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;