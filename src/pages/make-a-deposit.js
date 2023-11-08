import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/white-paper.css";
import { useLocation } from "@reach/router";

const MakeADeposit = () => {
    let newUrl = `${process.env.GATSBY_API_URL}email/blocked/${blockedEmailId}`;
    const [blockedEmailDetails, setBlockedEmailDetails] = useState(null);
    const location = useLocation(); // This is to access the query parameters

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const blockedEmailId = searchParams.get("depositId");
        if (blockedEmailId) {
            getBlockedEmailDetails(blockedEmailId);
        }
    }, [location]);

    function getBlockedEmailDetails(blockedEmailId) {
        let newUrl = `https://server.fyncom.com/v2/email/blocked/${blockedEmailId}`;
        // Headers and fetch logic as you had in your Wix code
        // Remember to use the useState hook to set the response data
    }

    // Function to render the payment button or any other elements based on the blocked email details
    function renderPaymentButton() {
        if (blockedEmailDetails) {
            // Render your button and use the details from blockedEmailDetails
        }
        // else, render default content or loading state
    }
  return (
    <div>
      <Header />
      <div className="content-container">
        <h1>Get Your Email Noticed. Make a Deposit. </h1>
        <sub>Pay a small, refundable deposit to get your email to my main inbox & get my immediate attention. If I respond, you get your deposit back. Simple!</sub>
        <p className="html5"> You're seeing this because you've gotten a "PayCation" email. </p>
        {/*  some text / image manipulation has to happen here*/}
        <p>Still here? Why not read something interesting? Ever get annoying calls? Emails? DMs? Read below to find out how we're helping fix that problem by
            getting people paid to block scam / spam and respond to good messages.</p>
        <h2>Why Do Spam Calls Still Exist?</h2>
        <p>...and how can I stop scams, but get useful outreach?</p>
        <p>That's the thought that started FynCom on a journey of exploring an emerging market based in "communications + currency". Here's our paper we wrote
            to record our intents - it later became
            <a href="https://patents.google.com/patent/US11310368B2">our 1st patent</a>,
            <a href="https://karmacall.com/">app</a>, and is the basis for how we came to be.
            Thanks for reading!
        </p>
          - Team Fyncom
        <iframe src="https://drive.google.com/file/d/1nHVoFPQMUuin5MOU7nGEWt6nseNzI_Kf/preview" allow="autoplay"></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default MakeADeposit;
