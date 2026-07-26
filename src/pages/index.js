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
      const handleChange = e => {
        setFilterLogo(e.matches ? filterImageDark : filterImage)
        setKarmacallLogo(e.matches ? karmacallImageDark : karmacallImage)
      }
      handleChange(mediaQuery)
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
              <h1>Refundable Payments for Digital Trust</h1>
              <h2>Build trust with micro-commitments</h2>
              <p>Our MCP (Model Context Parameter) enables secure, refundable payments for any digital interaction</p>
            </div>
          </div>
        </div>

        <div className="AppText">
          <div className="social-media-container">
            <div className="text-block-left">
              <h2 className="text-wrapper-2">
                Transform your platform with <span className="underline-red">refundable deposits</span>
              </h2>
              <p>
                Our Model Context Parameter technology allows you to implement refundable deposits in your platform. Users can set micro-commitments for
                interactions, creating trust while maintaining flexibility. Perfect for any service requiring user verification or interaction quality.
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
                One solution, <span className="underline-red">endless applications</span>
              </h2>
              <p>
                From scam prevention to community management, our Model Context Parameter can be integrated into any platform. Users earn rewards for
                maintaining quality interactions, while platforms benefit from reduced abuse and increased engagement. Ready to implement?{" "}
                <span className="span">
                  <a href="mailto:support@fyncom.com?subject=MCP Integration">Contact us</a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <section className="why-fyncom">
          <h2 className="text-wrapper-2">Why Choose FynCom's Model Context Parameter?</h2>
          <p>
            Our Model Context Parameter revolutionizes digital trust by making every interaction valuable. Users can set their own terms for engagement,
            creating a self-regulating ecosystem where quality interactions are rewarded. <br />
            <Link to="/white-paper-original-scam-calls">Learn More About MCP</Link>
          </p>
        </section>

        <div className="AppText">
          <div className="social-media-container">
            <div className="text-block-left">
              <h2 className="text-wrapper-2">Ready to implement Model Context Parameter?</h2>
              <p>
                <p2 className="underline-red">Transform your platform today.</p2> Whether you're building a community, managing communications, or creating a
                marketplace, our Model Context Parameter can be integrated into your existing infrastructure. We provide the tools, support, and expertise to
                make implementation seamless.
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
          <h2 className="underline">Start Building Trust with Model Context Parameter</h2>
          <p>
            Join the growing number of platforms using FynCom's Model Context Parameter to create more valuable, trustworthy digital interactions. Our team is
            ready to help you implement and customize the solution for your specific needs. <br />
            <a href="https://calendly.com/adrian-fyncom/30min">
              <button className="learn-more-btn">Schedule a Demo</button>
            </a>
          </p>
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default BlockSpamEarnCash
