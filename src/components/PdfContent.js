import React, { useState, useEffect } from 'react';
import "./pdf.css";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfContent = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Set the initial page
  const [loading, setLoading] = useState(true);
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  return (
    <div className="pdf-viewer">
      <Document
        file={file}
        className={`pdf-document ${prefersDarkMode ? "dark-mode" : ""}`}
        onLoadSuccess={onDocumentLoadSuccess}
        onError={(error) => console.error('PDF failed to load: ', error.message)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      <button onClick={() => setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1))} disabled={pageNumber === 1}>
        Previous
      </button>
      <button onClick={() => setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages))} disabled={pageNumber === numPages}>
        Next
      </button>
    </div>
  );
};

export default PdfContent;
