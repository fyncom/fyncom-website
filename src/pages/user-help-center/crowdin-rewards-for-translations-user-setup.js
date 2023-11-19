import React from "react";
import {useLocation} from "@reach/router";
import queryString from "query-string";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "../../components/help-center.css";
import MarkdownContent from "../../components/MarkdownContent";
import Breadcrumbs from "../../components/Breadcrumbs";
import {helpItemsUser} from "../../../static/help-items";

const RewardsOverview = () => {
  const { search } = useLocation();
  const { contentUrl } = queryString.parse(search);
  const title = helpItemsUser.find(item => decodeURIComponent(contentUrl) === item.url)?.title || "Help Article";

  return (
    <div>
      <Header />
      <Breadcrumbs link={"/user-help-center"} title={title} />
      <MarkdownContent url={decodeURIComponent(contentUrl)} />
      <Footer />
    </div>
  );
};

export default RewardsOverview;
