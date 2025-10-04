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

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/fZe5obgilbJa5lm001"

const MakeADeposit = () => {
  const [blockedEmailDetails, setBlockedEmailDetails] = useState(null)
  const location = useLocation()
  const [dynamicMessage, setDynamicMessage] = useState(
    `<p>You're here because someone you're emailing protects their inbox with <span class="emphasis">FynCom refundable deposits</span>.</p>
     <p>Send a quick, fully refundable deposit to fast-track your note into their main inbox. When they reply, every cent comes right back to you.</p>`
  )
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    logEvent("Deposit", "Toggle Nano Deposit Modal", isModalOpen ? "Close" : "Open")
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const blockedEmailId = searchParams.get("depositId")
    if (blockedEmailId) {
      getBlockedEmailDetails(blockedEmailId)
    }
  }, [location])

  const getBlockedEmailDetails = async blockedEmailId => {
    const apiUrl = `${process.env.GATSBY_API_URL}email/blocked/${blockedEmailId}`
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch email details")
      }

      const data = await response.json()
      const depositPaid = data.depositPaid
      const secondaryLabel = data.emailLabel ? data.emailLabel : "FynFiltered"
      const fynMail = "FynMail"

      setBlockedEmailDetails(data)

      const senderEmail = data.senderEmail || data.senderEmailRaw || "you"
      const thankYouMessage = `<p>Thanks for sending the <span class="emphasis">$${data.recipientMin}</span> deposit for <span class="emphasis">${data.recipientEmail}</span>.</p>
        <p>We're alerting them now so they can reply and release your refund. You can manage everything inside <a href="https://app.fyncom.com">app.fyncom.com</a>.</p>`

      const invitationMessage = `<p>Your message from <span class="emphasis">${senderEmail}</span> is ready for <span class="emphasis">${data.recipientEmail}</span>, but it's waiting in <span class="emphasis">${secondaryLabel}</span>.</p>
        <p>Send a fully refundable <span class="emphasis">$${data.recipientMin}</span> deposit to move it to their main inbox with a verified <span class="emphasis">${fynMail}</span> badge. If they reply within <span class="emphasis">${data.daysDeadline}</span> days, the funds return to you instantly.</p>`

      setDynamicMessage(depositPaid ? thankYouMessage : invitationMessage)
    } catch (error) {
      console.error("ERROR", error)
    }
  }

  const buildStripeUrl = () => {
    if (!blockedEmailDetails) {
      return STRIPE_CHECKOUT_URL
    }

    const queryParts = []

    if (blockedEmailDetails.senderEmailRaw) {
      queryParts.push(`prefilled_email=${encodeURIComponent(blockedEmailDetails.senderEmailRaw)}`)
    }

    if (blockedEmailDetails.blockedEmailLogId) {
      queryParts.push(`client_reference_id=${encodeURIComponent(blockedEmailDetails.blockedEmailLogId)}`)
    }

    const queryString = queryParts.join("&")
    return queryString ? `${STRIPE_CHECKOUT_URL}?${queryString}` : STRIPE_CHECKOUT_URL
  }

  const renderPaymentButton = () => {
    const stripeUrl = buildStripeUrl()

    return (
      <>
        <div className="deposit-actions">
          <a
            href={stripeUrl}
            className="learn-more-btn cash"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent("Deposit", "Click", "Stripe Deposit")}
          >
            Deposit cash
          </a>
          <button className="learn-more-btn xno" onClick={toggleModal}>
            Deposit nano
          </button>
        </div>
        {isModalOpen && <MakeADepositModal onClose={toggleModal} />}
      </>
    )
  }

  const heroTitle = blockedEmailDetails?.recipientEmail
    ? `Guarantee ${blockedEmailDetails.recipientEmail} sees your email`
    : "Make your email impossible to ignore"

  const recipientInboxLabel = blockedEmailDetails?.recipientEmail ? `${blockedEmailDetails.recipientEmail}'s inbox` : "the inbox you're trying to reach"

  const depositAmountDisplay = blockedEmailDetails?.recipientMin ? `$${blockedEmailDetails.recipientMin}` : "a small, refundable deposit"

  const responseDeadlineText = blockedEmailDetails?.daysDeadline
    ? `${blockedEmailDetails.daysDeadline} day${blockedEmailDetails.daysDeadline === 1 ? "" : "s"}`
    : "the response window"

  const recipientDisplay = blockedEmailDetails?.recipientEmail || "the recipient"
  const recipientPossessive = blockedEmailDetails ? "their" : "the recipient's"
  const senderDisplay = blockedEmailDetails?.senderEmail || blockedEmailDetails?.senderEmailRaw || "you"
  const heroSubtitleText = blockedEmailDetails
    ? `You're emailing ${recipientDisplay} from ${senderDisplay}. They ask new contacts to post ${depositAmountDisplay} so serious conversations rise above the noise.`
    : `Use ${depositAmountDisplay} to move your message to ${recipientInboxLabel} and prove you value their time. Get every cent back the moment they reply.`

  return (
    <div className="deposit-page">
      <Seo
        title="Deposits Refundable"
        description="Looks like you got a PayCation email from FynCom. Pay a small, refundable deposit to get your email to the top of your recipient's inbox & get their immediate attention. If they respond, you get your deposit back. Simple!"
      />
      <Header />
      <main className="deposit-main">
        <section className="deposit-hero">
          <div className="hero-copy">
            <p className="hero-eyebrow">Refundable deposits powered by FynCom</p>
            <h1 className="hero-title">{heroTitle}</h1>
            <p className="hero-subtitle">{heroSubtitleText}</p>
            {blockedEmailDetails && (
              <div className="hero-personalization">
                <span className="hero-pill">Recipient: {recipientDisplay}</span>
                <span className="hero-pill">You: {senderDisplay}</span>
                <span className="hero-pill">Deposit: {depositAmountDisplay}</span>
                <span className="hero-pill">Refund window: {responseDeadlineText}</span>
              </div>
            )}
            {renderPaymentButton()}
            <p className="deposit-assurance">
              Deposits stay in secure escrow until the conversation moves forward. No reply? You decide what happens next inside <a href="https://app.fyncom.com">app.fyncom.com</a>.
            </p>
            <div className="deposit-trust-bar">
              <span className="deposit-trust-badge">Backed by U.S. Patent 11,310,368</span>
              <span className="deposit-trust-badge">Automatic refunds when your recipient responds</span>
              <span className="deposit-trust-badge">Built for founders, investors, and elite teams</span>
            </div>
          </div>
          <div className="hero-card">
            <h3>What happens when you deposit</h3>
            <div className="hero-card-body">
              <div className="html-dynamic" dangerouslySetInnerHTML={{ __html: dynamicMessage }}></div>
              {(blockedEmailDetails?.recipientMin || blockedEmailDetails?.recipientEmail || blockedEmailDetails?.daysDeadline) && (
                <div className="hero-card-stats">
                  {blockedEmailDetails?.recipientMin && (
                    <div className="hero-card-stat">
                      <span className="hero-card-stat-label">Refundable deposit</span>
                      <span className="hero-card-stat-value">${blockedEmailDetails.recipientMin}</span>
                    </div>
                  )}
                  {blockedEmailDetails?.recipientEmail && (
                    <div className="hero-card-stat">
                      <span className="hero-card-stat-label">Recipient</span>
                      <span className="hero-card-stat-value">{blockedEmailDetails.recipientEmail}</span>
                    </div>
                  )}
                  {blockedEmailDetails?.daysDeadline && (
                    <div className="hero-card-stat">
                      <span className="hero-card-stat-label">Refund window</span>
                      <span className="hero-card-stat-value">
                        {blockedEmailDetails.daysDeadline} day{blockedEmailDetails.daysDeadline === 1 ? "" : "s"}
                      </span>
                    </div>
                  )}
                </div>
              )}
              <ul className="hero-checklist">
                <li>Your message is elevated to {recipientPossessive} main inbox with a verified FynMail badge.</li>
                <li>We notify {recipientDisplay} that a serious, refundable deposit is waiting for them.</li>
                <li>If they reply within {responseDeadlineText}, the deposit snaps right back to you.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="deposit-section">
          <header>
            <h2>Lead with trust, not noise</h2>
            <p>Refundable deposits flip outreach from interruption to invitation. Show you respect their focus and they'll reciprocate.</p>
          </header>
          <div className="deposit-info-grid">
            <article className="deposit-info-card">
              <h3>Signal real intent</h3>
              <p>Your deposit proves this isn't another spray-and-pray blast. You're demonstrating that the conversation is worth pursuing.</p>
            </article>
            <article className="deposit-info-card">
              <h3>Respect their timeline</h3>
              <p>Busy people filter ruthlessly. A refundable deposit switches the frame from "stranger" to "partner" and earns a thoughtful read.</p>
            </article>
            <article className="deposit-info-card">
              <h3>Create shared upside</h3>
              <p>When they reply, you get your money back. If they decline, they can keep the deposit as a fair trade for their time and attention.</p>
            </article>
          </div>
        </section>

        <section className="deposit-section">
          <header>
            <h2>How it works</h2>
            <p>Three simple steps move your message from the sidelines to the spotlight.</p>
          </header>
          <div className="deposit-steps-grid">
            <article className="deposit-step-card">
              <span className="deposit-step-number">1</span>
              <h3>Send your deposit</h3>
              <p>Use Stripe or Nano to post the refundable deposit. We secure the funds and attach the verified FynMail badge to your message.</p>
            </article>
            <article className="deposit-step-card">
              <span className="deposit-step-number">2</span>
              <h3>We elevate your email</h3>
              <p>Your note leaps to the top of {recipientPossessive} inbox, and we notify {recipientDisplay} that a serious sender is waiting.</p>
            </article>
            <article className="deposit-step-card">
              <span className="deposit-step-number">3</span>
              <h3>Get refunded on reply</h3>
              <p>If they respond within {responseDeadlineText}, the deposit returns to you instantly. Manage every step from <a href="https://app.fyncom.com">app.fyncom.com</a>.</p>
            </article>
          </div>
        </section>

        <section className="deposit-testimonial">
          <blockquote>
            "Inboxes finally feel balanced. People who value our time reach us instantly, and the rest learn to respect the process."
            <cite>- Team FynCom</cite>
          </blockquote>
        </section>

        <section className="deposit-cta-card">
          <h2>Want refundable deposits inside your product?</h2>
          <p>
            Use the same trust engine to protect your community, marketplace, or sales outreach program. We'll help you launch in days, not months.
          </p>
          <div className="deposit-cta-actions">
            <a
              className="learn-more-btn"
              href="https://calendly.com/adrian-fyncom/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logEvent("Deposit", "Click", "Book Strategy Session")}
            >
              Book a strategy session
            </a>
            <a className="cta-link-secondary" href="mailto:support@fyncom.com?subject=Refundable Deposit Platform Inquiry">
              Start a conversation
            </a>
          </div>
        </section>

        <section className="deposit-section deposit-whitepaper">
          <h2>Explore the economics behind PayCation</h2>
          <p>
            Ever wonder why spam persists? Our original whitepaper breaks down the incentives and shows how refundable deposits make legitimate outreach win.
            Take a peek and imagine this framework inside your own product.
          </p>
          <PdfContent file={whitePaper} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default MakeADeposit
