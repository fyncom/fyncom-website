import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/white-paper.css"
import "../components/blocked-email.css"
import "../components/contact.css"
import { useLocation } from "@reach/router"
import whitePaper from "../../static/pdfs/fyncom-Original-White-Paper-For-KarmaCall-Update.pdf"
import Seo from "../components/seo"
import PdfContent from "../components/PdfContent"
import { MakeADepositModal } from "../components/Modal"
import { logEvent } from "../utils/analytics"

const MakeADeposit = () => {
  const [blockedEmailDetails, setBlockedEmailDetails] = useState(null)
  const location = useLocation()
  const [dynamicMessage, setDynamicMessage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [urlToExecute, setUrlToExecute] = useState(null)
  const [stripeUrl, setStripeUrl] = useState("")

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    logEvent("Deposit", "Toggle Nano Deposit Modal", isModalOpen ? "Close" : "Open")
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const blockedEmailId = searchParams.get("depositId")
    console.log("deposit ID is %s", blockedEmailId)
    if (blockedEmailId) {
      getBlockedEmailDetails(blockedEmailId)
    }
  }, [location])

  useEffect(() => {
    if (urlToExecute) {
      window.location.href = urlToExecute
    }
  }, [urlToExecute])

  const getBlockedEmailDetails = async blockedEmailId => {
    let newUrl = `${process.env.GATSBY_API_URL}email/blocked/${blockedEmailId}`
    try {
      const response = await fetch(newUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (response.ok) {
        const data = await response.json()
        const depositPaid = data.depositPaid
        console.log("deposit paid status: " + depositPaid)

        if (depositPaid) {
          // provide extra info - we'll handle this later as it's an edge case for now
        }
        setBlockedEmailDetails(data)

        // Format the deposit amount properly (avoiding scientific notation)
        const formattedAmount = formatDepositAmount(data.recipientMin)

        const newMessage = data.depositPaid
          ? `<div class="success-message">
              <h3>✓ Deposit Received!</h3>
              <p>Thank you for your ${formattedAmount} deposit. ${data.recipientEmail} has been notified and will see your email in their main
inbox.</p>
            </div>`
          : `<div class="deposit-explanation">
              <div class="status-card">
                <h3>📧 Your Email Status</h3>
                <p>Your email from <strong>${data.senderEmail}</strong> to <strong>${data.recipientEmail}</strong> was automatically filtered.</p>
              </div>

              <div class="how-it-works">
                <h3>How This Works (It's Simple!)</h3>
                <div class="steps">
                  <div class="step">
                    <span class="step-number">1</span>
                    <div class="step-content">
                      <strong>Make a tiny deposit of ${formattedAmount}</strong>
                      <p>This moves your email to their main inbox instantly</p>
                    </div>
                  </div>
                  <div class="step">
                    <span class="step-number">2</span>
                    <div class="step-content">
                      <strong>${data.recipientEmail} gets notified immediately</strong>
                      <p>Your message goes to the top of their inbox</p>
                    </div>
                  </div>
                  <div class="step">
                    <span class="step-number">3</span>
                    <div class="step-content">
                      <strong>Get your full refund when they reply</strong>
                      <p>If they respond within ${data.daysDeadline} days, you pay nothing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="guarantee-box">
                <h4>💯 100% Money-Back Guarantee</h4>
                <p>You only pay if <strong>${data.recipientEmail}</strong> doesn't respond within <strong>${data.daysDeadline} days</strong>.
                Most people respond within 24-48 hours, so you'll likely get your full deposit back.</p>
              </div>

              <div class="why-this-works">
                <h4>Why does this work?</h4>
                <p>This micro-deposit proves you're a real person with a genuine message, not spam. It helps ${data.recipientEmail}
                prioritize legitimate emails while earning a small reward for managing their inbox effectively.</p>
              </div>
            </div>`
        setDynamicMessage(newMessage)
      } else {
        throw new Error("Failed to fetch email details")
      }
    } catch (error) {
      console.error("ERROR", error)
    }
  }

  // Format deposit amount to avoid scientific notation and add context
  const formatDepositAmount = amount => {
    const numAmount = parseFloat(amount)

    // Format with appropriate decimals
    let formatted = numAmount.toFixed(8).replace(/\.?0+$/, "")

    // Add context for very small amounts
    if (numAmount <= 0.0001) {
      const emailsPer1Cent = 0.01 / numAmount
      if (emailsPer1Cent >= 1000) {
        const thousands = Math.round(emailsPer1Cent / 1000)
        return `$${formatted} (just 1¢ per ${thousands}k emails!)`
      } else {
        return `$${formatted} (just 1¢ per ${Math.round(emailsPer1Cent)} emails!)`
      }
    }

    return `$${formatted}`
  }

  // Function to render the payment button or any other elements based on the blocked email details
  function renderPaymentButton() {
    if (blockedEmailDetails) {
      console.log("data is here from {}", blockedEmailDetails)
      const stripeUrl = `https://buy.stripe.com/fZe5obgilbJa5lm001?prefilled_email=${blockedEmailDetails.senderEmailRaw}&client_reference_id=${blockedEmailDetails.blockedEmailLogId}`

      return (
        <div className="cta-section">
          <h3>Choose Your Deposit Method</h3>
          <div className="cta-buttons">
            <a
              href={stripeUrl}
              className="learn-more-btn cash primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logEvent("Deposit", "Click", "Stripe Deposit")}
            >
              💳 Deposit with Card
            </a>
            <button className="learn-more-btn xno secondary" onClick={toggleModal}>
              ⚡ Deposit with Nano (Crypto)
            </button>
          </div>
          <p className="refund-reminder">
            <strong>Remember:</strong> Full refund if they respond within {blockedEmailDetails.daysDeadline} days
          </p>
          {isModalOpen && <MakeADepositModal onClose={toggleModal} />}
        </div>
      )
    } else {
      return (
        <div className="loading-state">
          <p>Loading email details...</p>
        </div>
      )
    }
  }

  return (
    <div>
      <Seo
        title="Guarantee Your Email Gets Read - 100% Refundable Deposit"
        description="Your email was filtered. Make a tiny, refundable deposit to move it to their main inbox and get immediate attention.
        If they respond, you get your full deposit back. It's that simple."
      />
      <Header />
      <div className="content-container deposit-page">
        <div className="hero-section" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ flex: 1 }}>
            <h1>🎯 Get Your Email to the Top of Their Inbox</h1>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p className="hero-subtitle" style={{ margin: 0, marginBottom: "0.5rem", textAlign: "right" }}>
              Make a tiny deposit. Get immediate attention. <strong>Pay nothing if they respond.</strong>
            </p>
            <div style={{ display: "flex", alignItems: "flex-center", gap: "0.75rem", flexWrap: "wrap" }}>
              <span className="badge">🛡️ Patent-backed</span>
              <span className="badge">⏱️ Time-based escrow</span>
              <span className="badge">💰 User‑rewarded</span>
            </div>
          </div>
        </div>

        {dynamicMessage ? (
          <div className="html-dynamic" dangerouslySetInnerHTML={{ __html: dynamicMessage }}></div>
        ) : (
          <div className="default-explanation">
            <div className="status-card">
              <h3>📧 Your Email Was Filtered</h3>
              <p>
                You're here because someone is using FynCom's email filtering system. Your message was automatically moved to a secondary folder, but you can
                get it prioritized!
              </p>
            </div>

            <div className="how-it-works">
              <h3>How This Works (It's Simple!)</h3>
              <div className="steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div className="step-content">
                    <strong>Make a tiny refundable deposit</strong>
                    <p>This moves your email to their main inbox instantly</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div className="step-content">
                    <strong>Recipient gets notified immediately</strong>
                    <p>Your message goes to the top of their inbox</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <div className="step-content">
                    <strong>Get your full refund when they reply</strong>
                    <p>If they respond within their deadline, you pay nothing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="guarantee-box">
              <h4>💯 100% Money-Back Guarantee</h4>
              <p>
                You only pay if the recipient doesn't respond within their specified timeframe. Most people respond within 24-48 hours, so you'll likely get
                your full deposit back.
              </p>
            </div>

            <div className="why-this-works">
              <h4>Why does this work?</h4>
              <p>
                This micro-deposit proves you're a real person with a genuine message, not spam. It helps email recipients prioritize legitimate messages while
                earning a small reward for managing their inbox effectively.
              </p>
            </div>
          </div>
        )}

        {renderPaymentButton()}

        <div className="trust-section">
          <h3>Why Trust This System?</h3>
          <div className="trust-points">
            <div className="trust-point">
              <span className="icon">🔒</span>
              <strong>Secure Payments</strong>
              <p>Processed through Stripe & Nano crypto</p>
            </div>
            <div className="trust-point">
              <span className="icon">⚡</span>
              <strong>Instant Results</strong>
              <p>Your email moves to their inbox immediately</p>
            </div>
            <div className="trust-point">
              <span className="icon">💰</span>
              <strong>Fair Pricing</strong>
              <p>Tiny amounts that prove you're real</p>
            </div>
          </div>
        </div>

        <div className="inspiration-section">
          <h3>💡 Like This Idea?</h3>
          <p>
            Tired of spam in your own inbox? <strong>You can use this same system!</strong> Sign up at <a href="https://app.fyncom.com">app.fyncom.com</a> to
            filter your emails and earn rewards when genuine senders reach out to you.
          </p>
        </div>

        <div className="educational-section">
          <h2>Why Do Spam Calls & Emails Still Exist?</h2>
          <p className="section-intro">We asked ourselves this question and built a solution. Here's how we're fixing communication for everyone.</p>
          <p>
            Our approach creates trust between strangers with shared interests using tiny "proof-of-intent" deposits. Read our original white paper that became{" "}
            <a href="https://patents.google.com/patent/US11310368B2">our first patent</a>, powers <a href="https://karmacall.com/">our KarmaCall app</a>, and
            forms the foundation of FynCom.
          </p>
          <PdfContent file={whitePaper} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MakeADeposit
