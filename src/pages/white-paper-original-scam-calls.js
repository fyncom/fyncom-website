import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Document, Page } from 'react-pdf';
import pdfFile from '../assets/FynCom-Original-White-Paper-For-KarmaCall-Update.pdf'; // replace with your pdf file path

const WhitePaperOriginalScamCalls = () => {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h2>Why Do Spam Calls Still Exist?</h2>
        <p>...and how can I stop scams, but let good callers reach me?</p>
        <Document file={pdfFile}>
          <Page pageNumber={1} />
        </Document>
        <p>Thanks for reading the whitepaper on stopping spam calls!</p>
      </div>
      <Footer />
    </div>
  )
}

export default WhitePaperOriginalScamCalls
