import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import "../components/index.css"
import fyncomWebm from "../images/fyncom-GIF-expanding-logo-cropped.webm"
import fyncomMp4 from "../images/fyncom-GIF-expanding-logo-cropped.mp4"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { useCombinedQuery } from "../components/useCombinedQuery"

const BlockSpamEarnCash = () => {
  const {
    filterImage,
    filterImageDark,
    karmacallImage,
    karmacallImageDark,
    increaseCustomerResponse,
    tinderLogo,
    discordLogo,
    telegramLogo,
  } = useCombinedQuery()

  // Use state to keep track of the images for the current theme
  const [filterLogo, setFilterLogo] = useState(filterImage)
  const [karmacallLogo, setKarmacallLogo] = useState(karmacallImage)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      // const handleChange = () => setIsDarkMode(mediaQuery.matches);
      const handleChange = e => {
        setFilterLogo(e.matches ? filterImageDark : filterImage)
        setKarmacallLogo(e.matches ? karmacallImageDark : karmacallImage)
      }
      // setIsDarkMode(mediaQuery.matches);
      handleChange(mediaQuery) // Initial check
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [filterImage, filterImageDark, karmacallImage, karmacallImageDark])

  return (
    <div>
      <Seo title="FynCom" />
      <Header />
      <section>
        <div className="AppText">
          <div className="social-media-container">
            <div className="logo-container">
              <div className="bottom-logo">
                <video className="index-story-video" autoPlay loop muted playsInline>
                  <source src={fyncomWebm} type="video/webm" />
                  <source src={fyncomMp4} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            </div>
            <div className="text-block">
              <h1>Profit from Scam Blocking</h1>
              <h2>Cash in effortlessly</h2>
              <p>Emails, direct messages, calls - we do it all!</p>
            </div>
          </div>
        </div>

        <div className="AppText">
          <div className="social-media-container">
            <div className="text-block-left">
              <h2 className="text-wrapper-2">
                Are your customers getting <span className="underline-red">phished</span>?
              </h2>
              <p>
                {" "}
                Stop scams with refundable deposits. Our tech asks unknown senders to risk losing money to your audience before they can reach them. Click the
                images to learn more.
              </p>
            </div>
            <div className="logo-container">
              <div className="top-logos-left">
                <Link to="/fyncom-filters-email-edition" className="index-links">
                  <GatsbyImage image={filterLogo} alt="block bad emails automatically & get paid." />
                </Link>
                <a href="https://www.karmacall.com" className="index-links">
                  <GatsbyImage image={karmacallLogo} alt="Get paid to block scam calls!" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="AppText">
          <div className="social-media-container communities">
            <div className="logo-container">
              <div className="top-logos communities">
                <GatsbyImage image={discordLogo} alt="Discord" />
                <GatsbyImage image={telegramLogo} alt="Telegram" />
              </div>
              <div className="bottom-logo community">
                <GatsbyImage image={tinderLogo} alt="Tinder" />
              </div>
            </div>
            <div className="text-block">
              <h2 className="text-wrapper-2">
                Too many <span className="underline-red">abusive DMs</span> in your communities?
              </h2>
              <p>
                {" "}
                Your community loves making connections, but not with scammers &amp; imposters. Help mods by adding FynCom&#39;s Direct Message tech into your
                Discord, Telegram, or other chat-based community. Bonus - your users make $$ for every blocked spam DM!{" "}
                <span className="span">
                  <a href="mailto:support@fyncom.com?subject=FynCom DMs">Contact us</a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <section className="why-fyncom">
          <h2 className="text-wrapper-2">Why FynCom?</h2>
          <p>
            Our company is built around refundable deposits as a tool to create trust between unknown parties in digital communications. Protect yourself from
            unwanted communications & get the power to put a monetary value to your time & data. <br />
            <Link to="/white-paper-original-scam-calls">Read More</Link>
          </p>
        </section>

        <div className="AppText">
          <div className="social-media-container">
            <div className="text-block-left">
              <h2 className="text-wrapper-2">A scam blocking tool for some...</h2>
              <p>
                <p2 className="underline-red">...and a rewards engine for all.</p2> FynCom creates trust in online communications with its Refundable Deposits
                API. Any platform with communication between users can give cash-back to users for blocking scams. Bring a modern approach to cybersecurity that
                your customers will love & your revenue teams will love more.
              </p>
            </div>
            <div className="logo-container">
              <div className="bottom-logo">
                <GatsbyImage image={increaseCustomerResponse} alt="Increase Customer Engagement" />
              </div>
            </div>
          </div>
        </div>

        <section className="why-fyncom">
          <h2 className="underline">Give the Gift of Cash-Back for Scam Blocking</h2>
          <p>
            Our company is built around refundable deposits as a tool to create trust between unknown parties in digital communications. Protect yourself from
            unwanted communications & get the power to put a monetary value to your time & data. <br />
            <a href="https://calendly.com/adrian-fyncom/30min">
              <button className="learn-more-btn">Sieze The Day!</button>
            </a>
          </p>
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default BlockSpamEarnCash
