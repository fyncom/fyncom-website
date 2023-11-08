import React, { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/help-center.css"
import { navigate } from 'gatsby';
import slugify from 'slugify';
import MarkdownContent from "../components/MarkdownContent"

const HelpCenter = () => {
  const [selectedItemUrl, setSelectedItemUrl] = useState(null)

  const helpItems = [
    {
      title: "Overview of Rewards Tools", description: "Learn more about our services", icon: "info-circle",
        topicUrl: "rewards-for-emails-text-and-more", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Overview-Of-FynCom-Tools.md",
    },
    {
      title: "Zapier Setup", description: "Automate Rewards in Zapier", icon: "zap",
        topicUrl: "zapier-rewards", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Zapier-Setup-FynCom.md",
    },
      // todo add the Zapier Info page which has a nice gif
    //   {
    //   title: "Zapier Info", description: "Automate Rewards in Zapier", icon: "zap",
    //     topicUrl: "zapier-rewards", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Zapier-Info.md",
    // },
    {
      title: "Simple Email Setup", description: "Set up your forwarding email No API key required. 1 Rewards Campaign at a time", icon: "envelope",
        topicUrl: "simple-email-rewards-setup", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Emails-Simple-Connection-With-FynCom.md",
    },
    {
      title: "Sendgrid API Key", description: "Add your API key to FynCom", icon: "key",
        topicUrl: "sendgrid-integration-api-key", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Sendgrid-API-Key-Integration.md",
    },
    {
      title: "Sendgrid Email Rewards", description: "Attach Rewards To Emails", icon: "mail-bulk",
        topicUrl: "add-fyncom-rewards-to-sendgrid-marketing-email", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Attaching-FynCom-Rewards-To-Sendgrid-Emails.md",
    },
    {
      title: "Marketing & Basic Emails", description: "Set up your forwarding email Email API key required", icon: "chart-bar",
        topicUrl: "email-forwarding-setup-for-instant-rewards-delivery", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Connecting-Email-Address-With-FynCom.md",
    },
    {
      title: "Sendgrid Drafts", description: "Prepare your Sendgrid draft for FynCom rewards", icon: "file-alt",
        topicUrl: "sendgrid-drafts-preparation", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Setting-Up-Sendgrid-Drafts.md",
    },
    {
      title: "Account Balance", description: "Information about your balance", icon: "wallet",
        topicUrl: "account-balance-help", url: "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Account-Balance.md",
    },
  ]

  const handleClick = item => {
    console.log("URL Loaded:", item.url) // This will print the URL to the console
    console.log("tpoic URL Loaded:", item.topicUrl) // This will print the URL to the console
    const titleSlug = slugify(item.title).toLowerCase()
    navigate(
      `/help-center/${slugify(item.topicUrl)}?contentUrl=${encodeURIComponent(
        item.url
      )}`
    )

    // setSelectedItemUrl(url);
  }
  // const handleClick = (url) => {
  //   console.log('URL Loaded:', url); // This will print the URL to the console
  //   setSelectedItemUrl(url);
  // };

  return (
    <div>
      <Header />
      <div className="help-center">
        <h1 className="centered">Help Center</h1>
        <p className="centered">What do you need help with?</p>
        <a href="/user-help-center">
          Not a business? Click here for our User Help Center.
        </a>
        <div className="help-items">
          {helpItems.map(item => (
            <div
              key={item.title}
              className="help-item"
              onClick={() => item.url && handleClick(item)}
              data-has-url={!!item.url}
            >
              {" "}
              {/* This will add the attribute if the item has a URL */}
              <div className={`icon ${item.icon}`}></div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        {selectedItemUrl && <MarkdownContent url={selectedItemUrl} />}
      </div>
      <Footer />
    </div>
  )
}

export default HelpCenter
