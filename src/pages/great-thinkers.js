import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { useCombinedQuery } from "../components/useCombinedQuery"
import { Link } from "gatsby"
import "../components/great-thinkers.css"

const GreatThinkers = () => {
  // Use the combined query hook to get image assets
  const { fyncomLogo } = useCombinedQuery()

  return (
    <div>
      <Seo
        title="Great Thinkers | FynCom"
        description="Explore insights from great thinkers that have influenced FynCom's approach to revolutionizing digital communication and trust."
      />
      <Header />
      <section className="great-thinkers-hero">
        <div className="hero-content">
          <h1>Great Thinkers</h1>
          <p className="subtitle">Insights that have shaped FynCom's approach to revolutionizing digital communication</p>
        </div>
      </section>

      <section className="thinkers-intro">
        <div className="container">
          <h2>Inspired by Visionaries</h2>
          <p>
            At FynCom, we've drawn inspiration from some of the world's greatest thinkers to develop our 
            revolutionary approach to digital communication. Our solutions for creating trust between unknown 
            parties are built on principles developed by innovators across various disciplines.
          </p>
        </div>
      </section>

      <section className="thinkers-grid">
        <div className="container">
          {/* This section will contain the screen grabs in a grid layout */}
          
          {/* Example of a thinker card - repeat this pattern for each thinker */}
          <div className="thinker-card">
            <div className="thinker-image">
              {/* Replace with actual screen grab */}
              <div className="placeholder-image">Image Placeholder</div>
            </div>
            <div className="thinker-content">
              <h3>Thinker Name</h3>
              <p className="thinker-quote">"A powerful quote from this thinker that relates to FynCom's mission."</p>
              <p className="thinker-description">
                Description of how this thinker's ideas have influenced FynCom's approach to solving
                communication problems and creating trust through refundable deposits.
              </p>
            </div>
          </div>
          
          {/* Add more thinker cards here based on your PDF content */}
        </div>
      </section>

      <section className="connection-section">
        <div className="container">
          <h2>The FynCom Connection</h2>
          <p>
            These pioneering ideas have been instrumental in developing FynCom's unique approach to creating 
            trust in digital communications. By applying these principles to modern challenges, we've created 
            solutions that protect users from unwanted communications while rewarding them for blocking scams.
          </p>
          <div className="cta-buttons">
            <Link to="/about" className="btn btn-primary">Learn More About Our Story</Link>
            <a href="https://calendly.com/adrian-fyncom/30min" className="btn btn-secondary">Schedule a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GreatThinkers
