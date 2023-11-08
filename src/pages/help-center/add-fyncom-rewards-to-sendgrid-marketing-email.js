import React, {useState} from "react";
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import Header from "../../components/header";
import Footer from "../../components/footer";
import "../../components/help-center.css";
import MarkdownContent from "../../components/MarkdownContent";

const SendgridEmailRewardsHelp = () => {
  // const markdownUrl = "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Attaching-FynCom-Rewards-To-Sendgrid-Emails.md";
  const { search } = useLocation();
  const { contentUrl } = queryString.parse(search);

  return (
    <div>
      <Header />
      <MarkdownContent url={decodeURIComponent(contentUrl)} />
      {/*<MarkdownContent url={markdownUrl} />*/}
      <Footer />
    </div>
  );
};

export default SendgridEmailRewardsHelp;
