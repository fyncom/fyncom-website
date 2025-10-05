import React, { useEffect, useMemo, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import "../components/blocked-email.css"
import { MakeADepositModal } from "../components/Modal"
import { logEvent } from "../utils/analytics"

/**
 * MakeADepositV3 – a UX-focused redesign for your refundable deposit page.
 *
 * Highlights
 * - Clear hero + promise
 * - Smart empty-state (no backend data) with explainer + self-serve input
 * - Data-present state with rich summary, trust copy, and strong CTAs
 * - Inline FAQ and "How it works" with visual steps
 * - Subtle motion + modern card layout
 * - Handles loading, error, and edge cases
 */

const API_URL = process.env.GATSBY_API_URL

export default function MakeADepositV2() {
  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [manualId, setManualId] = useState("")

  // Parse depositId from URL on first load
  useEffect(() => {
    const search = new URLSearchParams(window.location.search)
    const id = search.get("depositId")
    if (id) fetchDetails(id)
    else setLoading(false)
  }, [])

  async function fetchDetails(id) {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}email/blocked/${id}`)
      if (!res.ok) throw new Error("Failed to fetch deposit details")
      const data = await res.json()
      setDetails(data)
      setError(null)
    } catch (e) {
      setError(e?.message ?? "Something went wrong")
      setDetails(null)
    } finally {
      setLoading(false)
    }
  }

  const stripeUrl = useMemo(() => {
    if (!details) return "https://buy.stripe.com/fZe5obgilbJa5lm001" // default checkout
    const email = encodeURIComponent(details.senderEmailRaw || details.senderEmail || "")
    const ref = encodeURIComponent(details.blockedEmailLogId || "")
    return `https://buy.stripe.com/fZe5obgilbJa5lm001?prefilled_email=${email}&client_reference_id=${ref}`
  }, [details])

  const minDeposit = details?.recipientMin ? Number(details.recipientMin).toFixed(2) : "0.00"
  const deadlineDays = details?.daysDeadline ?? 30
  const labelName = details?.labelName || "INBOX"
  const secondaryLabel = details?.emailLabel || "FynFiltered"

  function handleNano() {
    setIsModalOpen(true)
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
        <div className="hero-section">
          <h1>
            🎯 Get your email noticed with a <span style={{ color: "#4a90e2" }}>refundable deposit</span>
          </h1>
          <p className="hero-subtitle">
            Unknown senders stake a tiny deposit to reach the main inbox. If the recipient engages, the sender gets it back. If not, the user keeps it. Simple.
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <span className="badge">🛡️ Patent-backed</span>
            <span className="badge">⏱️ Time-based escrow</span>
            <span className="badge">💰 User‑rewarded</span>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="status-card">
            <h3>📧 Loading Email Details...</h3>
            <p>Fetching your deposit details…</p>
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="status-card">
            <h3>⚠️ We couldn't load that link</h3>
            <p>{error}</p>
          </div>
        )}

        {/* DATA PRESENT */}
        {!loading && !error && details && (
          <div>
            <div className="status-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <h2>
                    This message is waiting in <span style={{ color: "#4a90e2" }}>{secondaryLabel}</span>
                  </h2>
                  <p>
                    From <strong>{details.senderEmail}</strong> to <strong>{details.recipientEmail}</strong>
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>Minimum deposit</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>${minDeposit}</div>
                </div>
              </div>
            </div>

            <div className="how-it-works">
              <h3>How This Works</h3>
              <div className="steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div className="step-content">
                    <strong>📧 Move to main inbox</strong>
                    <p>Pay the deposit to move this email to the recipient's {labelName} immediately.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div className="step-content">
                    <strong>⏱️ Refund window</strong>
                    <p>
                      If they respond within <b>{deadlineDays} days</b>, your deposit is automatically refunded.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <div className="step-content">
                    <strong>💰 User gets paid if ignored</strong>
                    <p>If there's no response, the recipient keeps a portion as a reward for their time.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <h3>Choose Your Deposit Method</h3>
              <div className="cta-buttons">
                <a
                  href={stripeUrl}
                  className="learn-more-btn cash primary"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => logEvent("Deposit", "Click", "Stripe Deposit")}
                >
                  💳 Deposit cash
                </a>
                <button className="learn-more-btn xno secondary" onClick={handleNano}>
                  ⚡ Deposit Nano
                </button>
              </div>
              <p className="refund-reminder">
                <strong>Remember:</strong> Full refund if they respond within {deadlineDays} days
              </p>
              {isModalOpen && <MakeADepositModal onClose={() => setIsModalOpen(false)} />}
            </div>

            <div className="why-this-works">
              <h4>🔒 Why a deposit?</h4>
              <p>It's an economic good‑faith signal that discourages spam. If the recipient engages, you're refunded automatically.</p>
              <div style={{ marginTop: "1rem" }}>
                <div>🛡️ Patent‑backed, time‑based escrow</div>
                <div>⏱️ Response‑based, automatic refunds</div>
                <div>💰 Rewards recipients for attention</div>
              </div>
            </div>
          </div>
        )}

        {/* EMPTY STATE (NO DATA) */}
        {!loading && !error && !details && (
          <div>
            <div className="status-card">
              <h2>Got a FynCom PayCation email?</h2>
              <p>
                Paste your <strong>depositId</strong> from the link to see your sender/recipient details and complete a deposit. No worries—if they reply,
                you're refunded.
              </p>

              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <input
                  type="text"
                  placeholder="Paste depositId"
                  value={manualId}
                  onChange={e => setManualId(e.target.value)}
                  style={{ flex: 1, minWidth: "200px", padding: "0.75rem", borderRadius: "8px", border: "1px solid #ccc" }}
                />
                <button className="learn-more-btn primary" onClick={() => manualId && fetchDetails(manualId)} style={{ padding: "0.75rem 1.5rem" }}>
                  Lookup
                </button>
              </div>
            </div>

            <div className="how-it-works">
              <h3>How This Works (It's Simple!)</h3>
              <div className="steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div className="step-content">
                    <strong>💰 Make a tiny deposit</strong>
                    <p>Stake a small, refundable amount to signal good faith.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div className="step-content">
                    <strong>📧 Jump the queue</strong>
                    <p>Your email moves to the main inbox instantly.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <div className="step-content">
                    <strong>⏱️ Auto‑refund on reply</strong>
                    <p>If they respond within the window, you get it back.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-this-works">
              <h3>Why this works</h3>
              <p>
                Spam is cheap to send. A refundable deposit flips the economics—only serious senders stake it. If it's not useful, the user keeps a portion.
              </p>
              <div style={{ marginTop: "1rem" }}>
                <a href={stripeUrl} className="learn-more-btn primary" target="_blank" rel="noreferrer">
                  💰 Try a cash deposit
                </a>
              </div>
              <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.8 }}>Prefer crypto? Use Nano (XNO) via the app wallet.</p>
            </div>
          </div>
        )}

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

        <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f8f9fa", borderRadius: "8px" }}>
          <h3>FAQ</h3>
          <div style={{ marginTop: "1rem" }}>
            <details style={{ marginBottom: "1rem" }}>
              <summary style={{ fontWeight: "bold", cursor: "pointer" }}>Do I lose money if they never read it?</summary>
              <p style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
                If there's no response in the refund window, the recipient keeps a portion of the deposit as a reward for their time.
              </p>
            </details>
            <details style={{ marginBottom: "1rem" }}>
              <summary style={{ fontWeight: "bold", cursor: "pointer" }}>What if I'm an approved contact?</summary>
              <p style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>Known contacts are automatically whitelisted—no deposit needed.</p>
            </details>
            <details style={{ marginBottom: "1rem" }}>
              <summary style={{ fontWeight: "bold", cursor: "pointer" }}>Is this secure?</summary>
              <p style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}>
                Deposits are processed through trusted providers, and refunds are automatic based on recipient engagement.
              </p>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
