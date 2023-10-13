// 1. Importing Components and Dependencies
import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"


// 2. Main Component
const BlockSpamEarnCash = () => {
  return (
    <div>
      <Header /> {/* Using the Header component */}
      {/* Main Content */}
      <section>
        <h1>Profit from Scam Blocking</h1>
        <h2>Cash in effortlessly</h2>
        <p>Emails, direct messages, calls - we do it all!</p>

        <section>
          <h2>Are your customers getting phished?</h2>
          <p>
            Stop scams with refundable deposits. Our tech asks unknown senders
            to risk losing money to your audience before they can reach them.
            Learn more.
          </p>
        </section>

        <section>
          <h2>Too many scam DMs in chats?</h2>
          <div>
            <img src="path_to_discord_logo.png" alt="Discord Logo" />
            <img src="path_to_tinder_logo.png" alt="Tinder Logo" />
            <p>
              Your community loves making connections, but not with scammers &
              imposters. Help mods by adding FynCom's Direct Message tech into
              your Discord, Telegram, or other chat-based community. Bonus -
              your users make $$ for every blocked spam DM!{" "}
              <a href="path_to_contact_page">Contact us</a>
            </p>
          </div>
        </section>

        <section>
          <h2>Why FynCom?</h2>
          <p>
            Our company is built around refundable deposits as a tool to create
            trust between unknown parties in digital communications. Protect
            yourself from unwanted communications & get the power to put a
            monetary value to your time & data.{" "}
            <a href="path_to_read_more">Read More</a>
          </p>
        </section>

        <section>
          <h2>A scam blocking tool for some...</h2>
          <p>
            ...and a rewards engine for all. FynCom creates trust in online
            communications with its Refundable Deposits API. Any platform with
            communication between users can give cash-back to users for blocking
            scams. Bring a modern approach to cybersecurity that your customers
            will love & your revenue teams will love more.
          </p>
        </section>

        <section>
          <h2>Give the Gift of Cash-Back for Scam Blocking</h2>
          <button>REQUEST A DEMO</button>
        </section>
      </section>
      <Footer /> {/* Using the Footer component */}
    </div>
  )
}

// 3. Exporting the Main Component
export default BlockSpamEarnCash
