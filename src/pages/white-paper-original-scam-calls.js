import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/white-paper.css";

const WhitePaperOriginalScamCalls = () => {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h2>Why Do Spam Calls Still Exist?</h2>
        <p>...and how can I stop scams, but let good callers reach me?</p>
        <iframe
          src="https://drive.google.com/file/d/1nHVoFPQMUuin5MOU7nGEWt6nseNzI_Kf/preview"
          allow="autoplay"
        ></iframe>
        <p>Thanks for reading the whitepaper on stopping spam calls!</p>
      </div>
      <Footer />
    </div>
  );
}

export default WhitePaperOriginalScamCalls;
