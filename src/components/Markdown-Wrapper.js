import React from 'react'
import "../components/markdown.css"

export const Wrapper = ({ children }) => (
  <div className="gatsby-focus-wrapper">{children}</div>
);

export default ({ children }) => <Wrapper>{children}</Wrapper>;
