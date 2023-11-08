import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const MarkdownContent = ({ url }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const sanitizedContent = DOMPurify.sanitize(marked(text));
        setContent(sanitizedContent);
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

  return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: content }} />;
};

export default MarkdownContent;
