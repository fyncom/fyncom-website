// Importing necessary libraries and components
import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/about.css"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { useCombinedQuery } from "../components/useCombinedQuery"

// TODO: Add SMS Shield Video, remove placeholder logo gif
// import smsSheildMp4 from "../images/sms-shield-demo.mp4"
import fyncomWebm from "../images/fyncom-GIF-expanding-logo-cropped.webm"
import fyncomMp4 from "../images/fyncom-GIF-expanding-logo-cropped.mp4"
import smsShieldLogoDark from "../images/logos/SMSShield-logo-placeholder-white.png"
import smsShieldLogo from "../images/logos/SMSShield-logo-placeholder-black.png"

// Functional component for the SMS Shield page
const SMSShield = () => {
  // Destructuring data/images from the custom hook useCombinedQuery
  // TODO: Add SMS Shield Video, and logos
  const {
    filterImage,
    filterImageDark,
  } = useCombinedQuery()

  // State for dark mode detection
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to update dark mode state
    const checkDarkMode = () => {
      setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    };

    checkDarkMode(); // Initial check

    // Listen for changes
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    matcher.addEventListener('change', checkDarkMode);

    // Cleanup
    return () => {
      matcher.removeEventListener('change', checkDarkMode);
    };
  }, []);

  // Render the page content
  return (
    <div>
      {/* SEO component for setting page metadata */}
      <Seo
        title="SMS Shield"
        // TODO: Add description
        description="SMS Shield is a service that protects your phone number from unwanted texts."
      />
      <Header />
      <section className="header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {/* Dynamically switch logo based on color scheme */}
        <img
          src={isDarkMode ? smsShieldLogoDark : smsShieldLogo}
          alt="SMS Shield Logo"
          style={{ maxWidth: "25%", minWidth: "200px", height: "auto", margin: '0 auto', display: 'block' }}
        />
      </section>
      <div
        className="sms-shield-container"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 24px", marginTop: "16px" }}
      >
        {/* Video Section */}
        {/* TODO: Add video */}
        <div
          className="sms-shield-video-container"
          style={{ width: "100%", maxWidth: 640, aspectRatio: "16/9", position: "relative" }}
        >
          <iframe
            src="https://www.youtube.com/embed/VKuLB0CXzOM?color=white&fs=0&modestbranding=1&playsinline=1&rel=0"
            title="SMS Shield Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          ></iframe>
        </div>

        <div className="sms-shield-text-container" style={{ maxWidth: 640, marginTop: 16, textAlign: 'center' }}>
            <p style={{ textAlign: 'center' }}>
            SMS Shield is your phone's first line of defense against unwanted texts. It lets your contacts message you as usual, while keeping unknown numbers in check with a smart, pay-to-message system.
            </p>
            <p style={{ textAlign: 'center' }}>
            Here's how it works: If someone who's not in your contacts wants to text you, they'll need to send a small, refundable deposit. If you respond to them at least three times, the deposit is returned. But if it's spam or unwanted outreach and you ignore it, you keep the deposit.
            </p>
            <p style={{ textAlign: 'center' }}>
            This simple system makes it expensive and unprofitable for scammers, spammers, and AI-generated junk to reach you. Whether you're tired of marketing texts, phishing scams, or just too many unknown numbers, SMS Shield helps you filter the noise and keep your messages clean.
            </p>
            <b style={{ textAlign: 'center' }}>
            No more spam. No more stress. Just texts that matter.
            </b>
        </div>

      </div>
    </div>
  )
}

// Exporting the SMSShield component as the default export
export default SMSShield