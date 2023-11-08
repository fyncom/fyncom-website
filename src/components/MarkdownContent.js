import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const MarkdownContent = ({ url }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        setContent(marked(text));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching markdown content:', error);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // This will sanitize the HTML before setting it, Ensure a safe method to prevent XSS. use a library like DOMPurify to sanitize your HTML
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default MarkdownContent;
