import React from "react";
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import Header from "../../components/header";
import Footer from "../../components/footer";
import "../../components/help-center.css";
import MarkdownContent from "../../components/MarkdownContent";

const SendgridEmailRewardsHelp = () => {
  const { search } = useLocation();
  const { contentUrl } = queryString.parse(search);
  console.log('URL Loaded:', contentUrl); // This will print the URL to the console

  return (
    <div>
      <Header />
      <MarkdownContent url={decodeURIComponent(contentUrl)} />
      <Footer />
    </div>
  );
};

export default SendgridEmailRewardsHelp;
