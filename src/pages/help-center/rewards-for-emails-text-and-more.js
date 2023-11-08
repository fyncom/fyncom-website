import React, {useState} from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "../../components/help-center.css";
import MarkdownContent from "../../components/MarkdownContent";

const SendgridEmailRewardsHelp = () => {
  const markdownUrl = "https://raw.githubusercontent.com/fyncom/fyncom-help/main/Attaching-FynCom-Rewards-To-Sendgrid-Emails.md";

  return (
    <div>
      <Header />
      <MarkdownContent url={markdownUrl} />
      <Footer />
    </div>
  );
};

export default SendgridEmailRewardsHelp;
