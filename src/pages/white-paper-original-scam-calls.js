import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/white-paper.css";
import whitePaper from "../../static/pdfs/fyncom-Original-White-Paper-For-KarmaCall-Update.pdf"
import Seo from "../components/seo";

const WhitePaperOriginalScamCalls = () => {
  return (
    <div>
      <Seo
        title="The Dream of a Spam-Free World"
        description="It started with endless scam / spam phone calls and evolved into a financial communications layer for the internet."
      />
      <Header />
      <div className="content-container">
        <h2>Why Do Spam Calls Still Exist?</h2>
        <p>...and how can I stop scams, but let good callers reach me?</p>
        <iframe src={whitePaper} width="100%" height="800px"></iframe>
        <p>Thanks for reading our White Paper on stopping spam across the world, starting with scam calls!</p>
      </div>
      <Footer />
    </div>
  );
}

export default WhitePaperOriginalScamCalls;
