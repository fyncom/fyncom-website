import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/white-paper.css"
import "../components/blocked-email.css"
import "../components/contact.css"
import "../components/make-a-deposit.css"
import { useLocation } from "@reach/router"
import whitePaper from "../../static/pdfs/fyncom-Original-White-Paper-For-KarmaCall-Update.pdf"
import Seo from "../components/seo"
import PdfContent from "../components/PdfContent"
import { MakeADepositModal } from "../components/Modal"
import { logEvent } from "../utils/analytics"

const MakeADeposit = () => {
  const [blockedEmailDetails, setBlockedEmailDetails] = useState(null)
  const location = useLocation()
  const [dynamicMessage, setDynamicMessage] = useState("You're seeing this because you've gotten a \"PayCation\" email.")
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
        const secondaryLabel = data.emailLabel ? data.emailLabel : "FynFiltered"
        const fynMail = "FynMail"
        if (depositPaid) {
          // provide extra info - we'll handle this later as it's an edge case for now
        }
        setBlockedEmailDetails(data) // Update the state, which will re-render the component
        const newMessage = data.depositPaid
          ? `Thank you for your $${data.recipientMin} deposit... [rest of the message]`
          : `<p>Your email (<span class="emphasis">${data.senderEmail}</span>) to <span class="emphasis">${data.recipientEmail}</span> landed in their 
                <span class="emphasis">${data.labelName}</span>, but was moved to a secondary inbox, <span class="emphasis">${secondaryLabel}</span>, 
                because they don't know you.
              </p>
              <p><span class="emphasis">${data.recipientEmail}</span> requires a <span class="emphasis">$${data.recipientMin}</span> 
                refundable deposit for your email to move to their main inbox and be marked as <span class="emphasis">${fynMail}</span>. If you pay 
                this deposit, <span class="emphasis">${data.recipientEmail}</span> will be notified and they will immediately see your email. If 
                <span class="emphasis">${data.recipientEmail}</span> responds to your FynMail within <span class="emphasis">${data.daysDeadline}</span> days, 
                you will get your deposit back. Then you may manage your deposit refund by accessing <a href="https://app.fyncom.com">app.fyncom.com</a>.
              </p>`
        setDynamicMessage(newMessage)
      } else {
        throw new Error("Failed to fetch email details")
      }
    } catch (error) {
      console.error("ERROR", error)
    }
  }

  // Function to render the payment button or any other elements based on the blocked email details
  function renderPaymentButton() {
    if (blockedEmailDetails) {
      console.log("data is here from {}", blockedEmailDetails)
      // Render your button and use the details from blockedEmailDetails
      const stripeUrl = `https://buy.stripe.com/fZe5obgilbJa5lm001?prefilled_email=${blockedEmailDetails.senderEmailRaw}&client_reference_id=${blockedEmailDetails.blockedEmailLogId}`
      // todo - only use this if you plan to show a button to everyone that visits this page.
      const stripeUrlDefault = `https://buy.stripe.com/fZe5obgilbJa5lm001`
      return (
        <>
          <a
            href={stripeUrl}
            className="payment-btn cash"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent("Deposit", "Click", "Stripe Deposit")}
          >
            <span className="payment-btn-icon">💳</span>
            Deposit with Card
          </a>
          <button className="payment-btn xno" onClick={toggleModal}>
            <span className="payment-btn-icon">Ӿ</span>
            Deposit with Nano
          </button>
          {isModalOpen && <MakeADepositModal onClose={toggleModal} />}
        </>
      )
    } else {
      console.log("no data present")
    }
  }

  return (
    <div className="deposit-page">
      <Seo
        title="Make a Deposit - Get Your Email Noticed"
        description="Pay a small, refundable deposit to get your email to the top of your recipient's inbox & get their immediate attention. If they respond, you get your deposit back. Simple, secure, and revolutionary!"
      />
      <Header />

      {/* Hero Section */}
      <div className="deposit-hero">
        <h1>💌 Get Your Email Noticed</h1>
        <p className="deposit-hero-subtitle">
          Your message deserves attention. Make a small, refundable deposit to reach the top of their inbox instantly.
        </p>
      </div>

      {/* Dynamic Status Card */}
      {blockedEmailDetails ? (
        <div className="deposit-status-card">
          <div className="status-header">
            <div className="status-icon">📧</div>
            <h2>Your Email Status</h2>
          </div>
          <div className="deposit-message" dangerouslySetInnerHTML={{ __html: dynamicMessage }}></div>
          <div className="payment-options">
            {renderPaymentButton()}
          </div>
        </div>
      ) : (
        <div className="loading-skeleton"></div>
      )}

      {/* How It Works */}
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Make a Deposit</h3>
            <p>Choose your preferred payment method (cash or nano cryptocurrency) and make a small, refundable deposit.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Email Gets Priority</h3>
            <p>Your email instantly moves to their main inbox with a FynMail badge, ensuring they see your message immediately.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Get Refunded</h3>
            <p>If they respond within the deadline, your deposit is automatically refunded. It's risk-free communication!</p>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="trust-section">
        <div className="trust-badges">
          <div className="trust-badge">
            <div className="trust-badge-icon">🔒</div>
            <h4>100% Refundable</h4>
            <p>Get your deposit back when they respond. No risk, all reward.</p>
          </div>
          <div className="trust-badge">
            <div className="trust-badge-icon">⚡</div>
            <h4>Instant Priority</h4>
            <p>Your email moves to their main inbox immediately after deposit.</p>
          </div>
          <div className="trust-badge">
            <div className="trust-badge-icon">🛡️</div>
            <h4>Secure & Private</h4>
            <p>Bank-level encryption and data protection for all transactions.</p>
          </div>
        </div>
      </div>

      {/* White Paper Section */}
      <div className="whitepaper-section">
        <div className="whitepaper-intro">
          <h2>The Technology Behind Trust</h2>
          <p>
            Ever wonder why spam still exists? We asked the same question. Our solution combines communications with
            micropayments to create trust between strangers with shared interests.
          </p>
          <p>
            This idea became <a href="https://patents.google.com/patent/US11310368B2" target="_blank" rel="noopener noreferrer">our first patent</a>,
            our <a href="https://karmacall.com/" target="_blank" rel="noopener noreferrer">KarmaCall app</a>, and the foundation of FynCom.
          </p>
          <p style={{ marginTop: '1.5rem', fontStyle: 'italic', fontSize: '1rem' }}>
            - Team FynCom
          </p>
        </div>
        <PdfContent file={whitePaper} />
      </div>

      <Footer />
    </div>
  )
}

export default MakeADeposit
