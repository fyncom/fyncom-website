// Importing necessary libraries and components
import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/about.css"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { useCombinedQuery } from "../components/useCombinedQuery"

// Functional component for the SMS Shield page
const SMSShield = () => {

    // Destructuring data/images from the custom hook useCombinedQuery
    const {
        innovation,
        collaboration,
        transparency,
        teamMeeting,
        customerFocus,
        continuousImprovement,
        oneMillionCups,
        disruptionBanking,
        evonexus,
        evonexusDark,
        nanoFoundation,
        goaheadVentures,
        title3funds,
        westcliffUniversity,
        westcliffUniversityDark,
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
            <sub>
              SMS Shield is a service that protects your phone number from unwanted texts.
            </sub>
          </section>
        </div>
    )

}

// Exporting the SMSShield component as the default export
export default SMSShield