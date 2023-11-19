import React from "react"
import { marked } from "marked"
import DOMPurify from "dompurify"

const MarkdownContent = ({ content }) => {
  // Ensure content is not null or undefined before proceeding.
  if (typeof content !== "string") {
    console.error("MarkdownContent received undefined content");
    return <div>Error loading content. Please try again later.</div>
  }

  // Log the first 200 characters of the content for debugging purposes.
  console.log("Markdown content received: ", content.slice(0, 200));

  // Convert markdown to HTML and sanitize it.
  const sanitizedContent = DOMPurify.sanitize(marked(content));

  // Safe to set HTML after sanitizing.
  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  )
}

export default MarkdownContent
