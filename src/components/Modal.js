// Modal.js
import React from "react";
import "../components/contact.css";
import "../components/blocked-email.css";
import nanoQrCode from "../images/DepositNanoQRCode.jpg";
// should import all into modal.css later

export const SuccessModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Thank You!</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export const FailureModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-failure">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Submission Failed</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export const MakeADepositModal = ({ onClose }) => {
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
