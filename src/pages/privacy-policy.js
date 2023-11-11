import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/white-paper.css";
import privacyPolicy from "../../static/pdfs/FynCom- Privacy Policy - 20211221.pdf";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h1>FynCom's Privacy Policy</h1>
        <iframe src={privacyPolicy} width="100%" height="800px"></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
