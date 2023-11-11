import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/white-paper.css";
import termsOfUse from "../images/pdfs/Fyncom - Terms of Use (general) - 20211221.pdf"

const Terms = () => {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h1>FynCom's Terms of Use</h1>
        <iframe src={termsOfUse} width="100%" height="800px"></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
