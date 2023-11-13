import React, { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/help-center.css"
import { navigate, Link } from 'gatsby';
import MarkdownContent from "../components/MarkdownContent"
import { helpItems } from "../../static/help-items";
import Seo from "../components/seo";

const HelpCenter = () => {
  const [selectedItemUrl, setSelectedItemUrl] = useState(null)
  const handleClick = (item) => {
      // console.log("URL Loaded:", item.url);
      setSelectedItemUrl(item.url);
      navigate(`/help-center/${item.topicUrl}?contentUrl=${encodeURIComponent(item.url)}`);
  };
  return (
    <div>
      <Seo
        title="Help Center"
        description="Setting up FynCom tools can be a challenge. We're here to help!"
      />
      <Header />
      <div className="help-center">
        <h1 className="centered">Help Center</h1>
        <p className="centered-p">What do you need help with?</p>
        Not a business? {" "}
        <Link to="/user-help-center">
          Click here for our User Help Center.
        </Link>
        <div className="help-items">
            {helpItems.map((item) => (
                <div
                    key={item.title}
                    className="help-item"
                    onClick={() => item.url && handleClick(item)}
                    data-has-url={!!item.url}
                >
                  <div className="icon">{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
            ))}
        </div>
          {selectedItemUrl && <MarkdownContent url={selectedItemUrl} />}
      </div>
      <Footer />
    </div>
  )
}

export default HelpCenter
