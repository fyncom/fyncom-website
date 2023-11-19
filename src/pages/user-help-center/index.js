import React, { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "../../components/help-center.css"
import { helpItemsUser } from "../../../static/help-items"
import { Link, navigate } from "gatsby"
import MarkdownContent from "../../components/MarkdownContent"
import Seo from "../../components/seo"

const UserHelpCenter = () => {
  const [selectedItemUrl, setSelectedItemUrl] = useState(null)
  const handleClick = item => {
    console.log("URL Loaded:", item.url)
    setSelectedItemUrl(item.url)
    navigate(
      `/user-help-center/${item.topicUrl}?contentUrl=${encodeURIComponent(
        item.url
      )}`
    )
  }
  return (
    <div>
      <Seo
        title="User Help Center"
        description="For non-business users, this is the help center for you."
      />
      <Header />
      <div className="help-center">
        <h1 className="centered">User Help Center</h1>
        <p className="centered-p">What do you need help with?</p>
        Not here for personal help?{" "}
        <Link to="/help-center"> Click here for our Business Help Center.</Link>
        <div className="help-items">
          {helpItemsUser.map(item => (
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

export default UserHelpCenter
