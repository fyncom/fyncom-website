// Importing necessary libraries and components
import React from "react"
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
    <div>
      {/* SEO component for setting page metadata */}
      <Seo
        title="SMS Shield"
        // TODO: Add description
        description="SMS Shield is a service that protects your phone number from unwanted texts."
      />
      <Header />
      <section className="header">
        <h1 style={{ textAlign: "center" }}>SMS Shield</h1>
      </section>
      <div
        className="sms-shield-container"
        style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0 24px", marginTop: "32px" }}
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
      </div>
    </div>
  )
}

// Exporting the SMSShield component as the default export
export default SMSShield