import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/white-paper.css";
import termsOfService from "../images/pdfs/FynCom- Platform Terms of Service _CLEAN_ - 20220117.pdf";

const TermsOfService = () => {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h1>FynCom's Terms of Service</h1>
        <iframe src={termsOfService} width="100%" height="800px"></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfService;
