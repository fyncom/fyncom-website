// Modal.js
import React from "react";
import "../components/contact.css";
import "../components/blocked-email.css";
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
