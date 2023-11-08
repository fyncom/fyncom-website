import * as React from "react"
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {MarkdownContent} from "../components/MarkdownContent";

const HelpItemTemplates = ({ pageContext }) => {
  return (
    <div>
      <Header />
      <div className="help-center">
        <h1>{pageContext.title}</h1>
        <p>{pageContext.description}</p>
        {pageContext.url && <MarkdownContent url={pageContext.url} />}
      </div>
      <Footer />
    </div>
  );
};

export default HelpItemTemplates;
