import React, { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "../../components/help-center.css"
import {helpItems, helpItemsUser} from "../../../static/help-items"
import { Link, navigate } from "gatsby"
import Seo from "../../components/seo"

const UserHelpCenter = () => {
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
        <Link to="/user-help-center">Click here for our User Help Center.</Link>
        <div className="help-items">
          {helpItems.map(item => (
            <Link to={`/help-center/${item.topicUrl}`} key={item.title} className="help-item">
              <div className="icon">{item.icon}</div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UserHelpCenter
