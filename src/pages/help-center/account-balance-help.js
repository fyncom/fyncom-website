import React from "react";
import {useLocation} from "@reach/router";
import queryString from "query-string";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "../../components/help-center.css";
import MarkdownContent from "../../components/MarkdownContent";

const AccountBalanceHelp = () => {
  const { search } = useLocation();
  const { contentUrl } = queryString.parse(search);

  return (
    <div>
      <Header />
      <MarkdownContent url={decodeURIComponent(contentUrl)} />
      <Footer />
    </div>
  );
};

export default AccountBalanceHelp;
