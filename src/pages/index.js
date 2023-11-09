import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import "../components/use-cases.css"
import tinderLogo from "../images/logos/tinder-logo.png"
import discordLogo from "../images/logos/Discord-logo.png"
import telegramLogo from "../images/logos/telegram-logo.png"
import fyncomFilterGmail from "../images/fyncom_filters_gmail_edition_no_logo.png"
import karmaCall from "../images/karmacall-logo.png"
import increaseResponseRates from "../images/increase-response=rates-across-any platform-and-channel.png"
import fyncomGif from "../images/fyncom-GIF-expanding-logo-enlarged.gif"

const BlockSpamEarnCash = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="hero-section">
          <img
            className="story-image"
            src={fyncomGif}
            alt="Financial Communications cuts out noise and bring in trust"
          />
          <div className="hero-content">
            <h1>Profit from Scam Blocking</h1>
            <h2>Cash in effortlessly</h2>
            <p>Emails, direct messages, calls - we do it all!</p>
          </div>
        </div>
        <br />

        <div className="use-case-section">
          <div className="use-case-description">
            <h3>Are your customers getting phished?</h3>
            <p>
              Stop scams with refundable deposits. Our tech asks unknown senders
              to risk losing money to your audience before they can reach them.
              Click the images learn more.
            </p>
          </div>
          <div className="use-case-image">
            <Link to="/fyncom-filters-email-edition" className="learn-more-btn">
              <img
                src={fyncomFilterGmail}
                alt="block bad emails automatically & get paid."
              />
            </Link>
            <a href="https://www.karmacall.com/" className="learn-more-btn">
              <img src={karmaCall} alt="Get paid to block scam calls!" />
            </a>
          </div>
        </div>

        <div className="use-case-section">
          <h3>Too many scam DMs in chats?</h3>
          <div className="use-case-image">
            <img src={discordLogo} alt="Discord Logo" />
            <img src={tinderLogo} alt="Tinder Logo" />
            <img src={telegramLogo} alt="Telegram Logo" />
          </div>
          <div className="use-case-description">
            <p>
              Your community loves making connections, but not with scammers &
              imposters. Help mods by adding FynCom's Direct Message tech into
              your Discord, Telegram, or other chat-based community. Bonus -
              your users make $$ for every blocked spam DM!{" "}
              <a href="path_to_contact_page">Contact us</a>
            </p>
          </div>
        </div>

        <section>
          <h3>Why FynCom?</h3>
          <p>
            Our company is built around refundable deposits as a tool to create
            trust between unknown parties in digital communications. Protect
            yourself from unwanted communications & get the power to put a
            monetary value to your time & data.{" "}
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
