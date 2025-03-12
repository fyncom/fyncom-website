import React, { useState, useEffect } from "react"
import "./pdf.css"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { logEvent } from "../utils/analytics"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const PdfContent = ({ file }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1) // Set the initial page
  const [prefersDarkMode, setPrefersDarkMode] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check initial preference
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      setPrefersDarkMode(darkModeMediaQuery.matches)

      // Add listener for changes
      const handleDarkModeChange = e => {
        setPrefersDarkMode(e.matches)
      }

      darkModeMediaQuery.addEventListener("change", handleDarkModeChange)

      // Clean up
      return () => {
        darkModeMediaQuery.removeEventListener("change", handleDarkModeChange)
      }
    }
  }, [])

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    logEvent("PDF", "Document Loaded", file)
  }

  const handleDownload = () => {
    logEvent("PDF", "Download", file)
    window.open(file, "_blank")
  }

  const handlePrevPage = () => {
    const newPage = Math.max(pageNumber - 1, 1)
    setPageNumber(newPage)
    logEvent("PDF", "Navigate", `Previous to page ${newPage}`)
  }

  const handleNextPage = () => {
    const newPage = Math.min(pageNumber + 1, numPages)
    setPageNumber(newPage)
    logEvent("PDF", "Navigate", `Next to page ${newPage}`)
  }

  return (
    <div className="pdf-viewer">
      <div className="pdf-container">
        <div className="pdf-navigation previous" onClick={handlePrevPage}>
          <FaArrowCircleLeft />
        </div>
        <Document
          file={file}
          className={`pdf-document ${prefersDarkMode ? "dark-mode" : ""}`}
          onLoadSuccess={onDocumentLoadSuccess}
          onError={error => console.error("PDF failed to load: ", error.message)}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="pdf-navigation next" onClick={handleNextPage}>
          <FaArrowCircleRight />
        </div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={handlePrevPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={pageNumber === numPages}>
          Next
        </button>
        <button className="pdf-download" onClick={handleDownload}>
          Download PDF
        </button>
      </div>
    </div>
  )
}

export default PdfContent
