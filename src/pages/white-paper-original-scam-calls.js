import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/white-paper.css";
import whitePaper from "../../static/pdfs/fyncom-Original-White-Paper-For-KarmaCall-Update.pdf"
import Seo from "../components/seo";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const WhitePaperOriginalScamCalls = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Set the initial page
  const [loading, setLoading] = useState(true);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
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
        <div className="pdf-viewer">
          <Document
            file={whitePaper}
            className="pdf-page"
            onLoadSuccess={onDocumentLoadSuccess}
            onError={(error) => console.error('PDF failed to load: ', error.message)}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          >
            <Page pageNumber={pageNumber}/>
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
          {/*this is an issue, but can potentailly be resolved by following a MarkdownContent appraoch where this goes into a component*/}
          {loading && <div>Loading PDF...</div>}

          <button onClick={() => setPageNumber(prevPageNumber => prevPageNumber - 1)} disabled={pageNumber === 1}>Previous</button>
          <button onClick={() => setPageNumber(prevPageNumber => prevPageNumber + 1)} disabled={pageNumber === numPages}>Next</button>
        </div>
        <p>Thanks for reading our White Paper on stopping spam across the world, starting with scam calls!</p>
      </div>
      <Footer />
    </div>
  );
}

export default WhitePaperOriginalScamCalls;
