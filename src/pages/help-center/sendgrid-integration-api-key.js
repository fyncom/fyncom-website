import React from "react";
import {useLocation} from "@reach/router";
import queryString from "query-string";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "../../components/help-center.css";
import MarkdownContent from "../../components/MarkdownContent";
import Breadcrumbs from "../../components/Breadcrumbs";
import { helpItems } from "../../../static/help-items";

const SendgridIntegrationApiKey = () => {
  const { search } = useLocation();
  const { contentUrl } = queryString.parse(search);
  const title = helpItems.find(item => decodeURIComponent(contentUrl) === item.url)?.title || "Help Article";

  return (
    <div>
      <Header />
      <Breadcrumbs link={"/help-center"} title={title} />
      <MarkdownContent url={decodeURIComponent(contentUrl)} />
      <Footer />
    </div>
  );
};

export default SendgridIntegrationApiKey;
