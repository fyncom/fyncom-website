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
//import smsSheildMp4 from "../images/sms-shield-demo.mp4"
import fyncomWebm from "../images/fyncom-GIF-expanding-logo-cropped.webm"
import fyncomMp4 from "../images/fyncom-GIF-expanding-logo-cropped.mp4"

// Functional component for the SMS Shield page
const SMSShield = () => {

    // Destructuring data/images from the custom hook useCombinedQuery
    // TODO: Add SMS Shield Video, and logos
    const {
        filterImage,
        filterImageDark,
    } = useCombinedQuery()

    // Render the page content
    return (

        // Main container div
        <div>
            {/* SEO component for setting page metadata */}
            <Seo
            title="SMS Shield"
            // TODO: Add description
            description="SMS Sheild is a service that protects your phone number from unwanted texts."
          />
          <Header />
          <section className="mission-section">
          <h1>SMS Shield</h1>
          </section>
          {/* TODO: Add video, autoplay? */}
          <div className="sms-shield-video-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <video className="sms-shield-video" autoPlay loop muted playsInline>
                <source src={fyncomWebm} type="video/webm" />
                <source src={fyncomMp4} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
    )

}

// Exporting the SMSShield component as the default export
export default SMSShield