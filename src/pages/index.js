import React,  { useState, useEffect } from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import "../components/index.css"
import tinderLogo from "../images/logos/tinder-logo.png"
import discordLogo from "../images/logos/Discord-logo.png"
import telegramLogo from "../images/logos/telegram-logo.png"
import fyncomFilterGmail from "../images/fyncom_filters_gmail_edition_no_logo.png"
import fyncomFilterGmailDark from "../images/fyncom_filters_gmail_edition_no_logo-white.png"
import karmaCall from "../images/karmacall-logo.png"
import karmaCallDark from "../images/karmacall-logo-white.png"
import increaseResponseRates from "../images/increase-response=rates-across-any platform-and-channel.png"
import fyncomGif from "../images/fyncom-GIF-expanding-logo-cropped.gif"

const BlockSpamEarnCash = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if(typeof window !== 'undefined') {  // Check if window is defined (this means we're on the client-side)
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => setIsDarkMode(mediaQuery.matches);
      setIsDarkMode(mediaQuery.matches);  // Set the initial value based on the media query
      mediaQuery.addListener(handleChange);  // Add a listener for changes to the media query
      return () => mediaQuery.removeListener(handleChange);  // Return cleanup function to remove media query listener
    }
  }, []);

  return (
    <div>
      <Header />
      <section>
        <div className="AppText">
          <div className="social-media-container">
            <div className="logo-container">
              <div className="bottom-logo">
                <img src={fyncomGif} className="index-story-image" alt="Financial Communications cuts out noise and bring in trust"/>
              </div>
            </div>
            <div className="text-block">
              <h1>Profit from Scam Blocking</h1>
              <h2>Cash in effortlessly</h2>
              <p>Emails, direct messages, calls - we do it all!</p>
            </div>
          </div>
        </div>

        {/*fix the image / link issue here*/}
        <div className="AppText">
          <div className="social-media-container">
            <div className="text-block-left">
              <h2 className="text-wrapper-2">Are your customers getting{" "}
                <span className="text-wrapper-3-red">phished</span>?
              </h2>
              <p> Stop scams with refundable deposits. Our tech asks unknown senders
                to risk losing money to your audience before they can reach them.
                Click the images to learn more.
              </p>
            </div>
            <div className="logo-container">
              <div className="top-logos-left">
                <Link to="/fyncom-filters-email-edition" className="index-links">
                  <img src={isDarkMode ? fyncomFilterGmailDark : fyncomFilterGmail} alt="block bad emails automatically & get paid."
                       className="index-logo-discord" />
                </Link>
                <Link to="https://www.karmacall.com"  className="index-links">
                  <img src={isDarkMode ? karmaCallDark : karmaCall} alt="Get paid to block scam calls!"
                       className="index-logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="AppText">
          <div className="social-media-container">
            <div className="logo-container">
              <div className="top-logos">
                <img src={discordLogo} alt="Discord" className="index-logo-discord" />
                <img src={telegramLogo} alt="Telegram" className="index-logo-tg" />
              </div>
              <div className="bottom-logo">
                <img src={tinderLogo} alt="Tinder" className="index-logo" />
              </div>
            </div>
            <div className="text-block">
              <h2 className="text-wrapper-2">Too many {" "}
                <span className="text-wrapper-3">abusive DMs</span>{" "}in your communities?
              </h2>
              <p> Your community loves making connections, but not with scammers &amp; imposters. Help mods by adding
                FynCom&#39;s Direct Message tech into your Discord, Telegram, or other chat-based community. Bonus - your
                users make $$ for every blocked spam DM!{" "}
                <span className="span"><a href="mailto:support@fyncom.com?subject=FynCom DMs">Contact us</a></span>
              </p>
            </div>
          </div>
        </div>

        <section className="why-fyncom">
          <h3>Why FynCom?</h3>
          <p>
            Our company is built around refundable deposits as a tool to create
            trust between unknown parties in digital communications. Protect
            yourself from unwanted communications & get the power to put a
            monetary value to your time & data.{" "} <br/>
            <a href="path_to_read_more">Read More</a>
          </p>
        </section>

        <div className="use-case-section">
          <div className="use-case-image">
            <img
              src={increaseResponseRates}
              alt="Increase Customer Engagement"
            />
          </div>
          <div className="use-case-description">
            <h3>A scam blocking tool for some...</h3>
            <p>
              ...and a rewards engine for all. FynCom creates trust in online
              communications with its Refundable Deposits API. Any platform with
              communication between users can give cash-back to users for
              blocking scams. Bring a modern approach to cybersecurity that your
              customers will love & your revenue teams will love more.
            </p>
          </div>
        </div>

        <section>
          <h3>Give the Gift of Cash-Back for Scam Blocking</h3>
          <button>REQUEST A DEMO</button>
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default BlockSpamEarnCash
