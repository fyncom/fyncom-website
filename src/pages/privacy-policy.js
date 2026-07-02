import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/white-paper.css"
import privacyPolicy from "../../static/pdfs/FynCom- Privacy Policy - 20211221.pdf"
import Seo from "../components/seo"
import PdfContent from "../components/PdfContent"

const PrivacyPolicy = () => {
  return (
    <div>
      <Seo
        title="Privacy Policy"
        description="FynCom's Privacy Policy is designed with you in mind. For a better future where our privacy is respected and enforced through personal paywalls!"
      />
      <Header />
      <div className="content-container">
        <h1>FynCom's Privacy Policy</h1>

        <section id="sms-text-messaging">
          <h2>SMS / Text Messaging Privacy &amp; Terms</h2>
          <p>
            <em>Last updated: July 2, 2026.</em> This section describes how
            RoboCash Inc., DBA FynCom ("FynCom," "we," or "us") handles mobile
            phone numbers and text-messaging consent. It supplements the Privacy
            Policy below and applies to text messages sent to or from our
            business and application phone numbers (including www.fyncom.com and
            www.karmacall.com). In the event of any conflict between this section
            and the rest of this Privacy Policy with respect to mobile or SMS
            information, this section controls.
          </p>

          <h3>No sharing of mobile information</h3>
          <p>
            No mobile information — including your phone number, SMS opt-in, or
            consent to receive text messages — will be shared with, sold to, or
            rented to any third parties or affiliates for marketing or
            promotional purposes. Information sharing with the subcontractors who
            directly support our messaging services (for example, our SMS
            delivery provider) is limited to what is necessary to deliver the
            messaging service and is never for marketing purposes.
          </p>

          <h3>Types of messages</h3>
          <p>Depending on how you engage with us, our text messages may include:</p>
          <ul>
            <li>Conversational replies to messages you send to our business number.</li>
            <li>Account, transaction, and one-time passcode (verification) messages.</li>
            <li>Customer-care and support communications.</li>
          </ul>

          <h3>Consent and opt-in</h3>
          <p>
            We send text messages only to individuals who have provided their
            mobile number and consent — for example, by texting our published
            business number first, by entering a phone number and agreeing to
            receive texts within one of our apps or forms, or by otherwise
            requesting messages from us. We do not text individuals who have not
            opted in.
          </p>

          <h3>Frequency, rates, opt-out, and help</h3>
          <ul>
            <li>Message frequency varies based on your interactions with us.</li>
            <li>Message and data rates may apply.</li>
            <li>
              You can opt out at any time by replying <strong>STOP</strong> to
              any message; we will send one confirmation and stop sending
              non-essential messages.
            </li>
            <li>
              For help, reply <strong>HELP</strong> to any message or email{" "}
              <a href="mailto:support@fyncom.com">support@fyncom.com</a>.
            </li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>
        </section>

        <PdfContent file={privacyPolicy} />
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
