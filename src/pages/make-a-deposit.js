import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import nanoQrCode from "../images/DepositNanoQRCode.jpg"
import "../components/white-paper.css";
import "../components/blocked-email.css";
import { useLocation } from "@reach/router";
import whitePaper from "../images/pdfs/fyncom-Original-White-Paper-For-KarmaCall-Update.pdf";

const MakeADeposit = () => {
    const [blockedEmailDetails, setBlockedEmailDetails] = useState(null);
    const location = useLocation();
    const [isModalOpen, setModalOpen] = useState(false);

    // Function to toggle the modal visibility
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };
    // Modal component
    const Modal = ({ onClose }) => {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h2>Got nano?</h2>
                    <p>Use "nano"-transactions!</p>
                    <p>Deposit 0.1 nano to</p>
                    <p className="nano-address">nano_1bf3r8pqfsutekxunazj895an8h84ai3ao1ftqyejqiul65p3xsb9k99kc1</p>
                    <div className="qr-code-container">
                        <img src={nanoQrCode} alt="QR Code of the nano address you should send your deposit to" />
                    </div>
                </div>
            </div>
        );
    };


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const blockedEmailId = searchParams.get("depositId");
        console.log("deposit ID is %s", blockedEmailId);
        if (blockedEmailId) {
            getBlockedEmailDetails(blockedEmailId);
        }
    }, [location]);

    const getBlockedEmailDetails = async (blockedEmailId) => {
        let newUrl = `${process.env.GATSBY_API_URL}email/blocked/${blockedEmailId}`;
        try {
            const response = await fetch(newUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                const depositPaid = data.depositPaid;
                console.log("deposit paid status: " + depositPaid);
                if (depositPaid) {
                    // provide extra info - we'll handle this later as it's an edge case for now
                }
                setBlockedEmailDetails(data); // Update the state, which will re-render the component
                // todo Handle other logic with the data here
            } else {
                throw new Error('Failed to fetch email details');
            }
        } catch (error) {
            console.error('ERROR', error);
        }
    }

    // Function to render the payment button or any other elements based on the blocked email details
    function renderPaymentButton() {
        if (blockedEmailDetails) {
            console.log("data is here from {}", blockedEmailDetails);
            // Render your button and use the details from blockedEmailDetails
            const stripeUrl = `https://buy.stripe.com/fZe5obgilbJa5lm001?prefilled_email=${blockedEmailDetails.senderEmailRaw}&client_reference_id=${blockedEmailDetails.blockedEmailLogId}`;
            const stripeUrlDefault = `https://buy.stripe.com/fZe5obgilbJa5lm001`;
            return (
                <>
                    <a href={stripeUrl} className="button button1" role="button" target="_blank" rel="noopener noreferrer">Deposit cash</a>
                    <button className="button button2" onClick={toggleModal}>Deposit nano</button>
                    {isModalOpen && <Modal onClose={toggleModal} />}
                </>
            );
        } else {
            console.log("no data present")
        }
    }
  return (
    <div>
      <Header />
      <div className="content-container">
        <h1>Get Your Email Noticed. Make a Deposit. </h1>
        <sub>Pay a small, refundable deposit to get your email to my main inbox & get my immediate attention. If I respond, you get your deposit back. Simple!</sub>
        <p className="html5"> You're seeing this because you've gotten a "PayCation" email. </p>
          {renderPaymentButton()}
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
        <iframe src={whitePaper} width="100%" height="800px"></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default MakeADeposit;
