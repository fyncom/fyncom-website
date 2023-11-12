import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Seo from "../components/seo";

const Contact = () => {
  return (
    <div>
      <Seo
        title="Contact Us"
        description="Send a contact request to Team FynCom and we'll get back to you shortly"
      />
      <Header />
      {/* main content should go here*/}
      <Footer />
    </div>
  );
}

export default Contact;
