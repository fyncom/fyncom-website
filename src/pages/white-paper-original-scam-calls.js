import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const WhitePaperOriginalScamCalls = () => {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h2>Why Do Spam Calls Still Exist?</h2>
        <p>...and how can I stop scams, but let good callers reach me?</p>
        <Document file="/FynCom-Original-White-Paper-For-KarmaCall-Update.pdf" loading={<span>Loading...</span>}>
          <Page pageNumber={1} />
        </Document>
        <p>Thanks for reading the whitepaper on stopping spam calls!</p>
      </div>
      <Footer />
    </div>
  )
}

export default WhitePaperOriginalScamCalls
