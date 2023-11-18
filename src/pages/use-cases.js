import React, {useState} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import mobileMarketing from "../images/illustrations/marketing-mobile-survey.webp"
import phoneCalls from "../images/illustrations/sales-phone-calls.webp"
import closingDeals from "../images/close-deals-customers-engagement.webp"
import fyncomLogo from "../images/fyncom-logo.png"
import "../components/use-cases.css"
import { Link } from "gatsby";
import Seo from "../components/seo";
import { SuccessModal, FailureModal } from "../components/Modal";

const UseCases = () => {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isFailureModalOpen, setFailureModalOpen] = useState(false);
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    let newUrl = `${process.env.GATSBY_API_URL}api/public/contact`;
    e.preventDefault();
    try {
      // You can send the data to your backend API endpoint
      const response = await fetch(newUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log('Email sent successfully');
        setModalMessage('Your message has been sent.');
        setSuccessModalOpen(true);
      } else {
        console.error('Failed to send email');
        setModalMessage(data.message || 'Failed to send your message.');
        setFailureModalOpen(true);
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <Seo
        title="Use Cases"
        description="Discover how FynCom enhances customer engagement through innovative use cases."
      />
      <Header />
        <div className="use-cases-container">
          <h1>Drive the behavior you want</h1>
          <sub>Enhance your sales, marketing & customer feedback tools</sub>
          <br/>
          <br/>
          <p>Today's Attention Economy makes time spent with your brand increasingly valuable, yet people's attention span gets progressively worse!
            Use FynCom's interactive rewards to grow the attention span of their target audiences, creating engagement that would otherwise be lost.</p>

          <div className="use-case-section">
            <div className="use-case-image">
              <img src={mobileMarketing} alt="Understand your customers better" />
            </div>
            <div className="use-case-description">
              <h3>Understand your customers better</h3>
              <p>Treat each customer feedback survey as a reward campaign, reduce admin time, and generate trust with your contacts</p>
              <Link to="/understanding-customers-use-cases" className="learn-more-btn">LEARN MORE</Link>
            </div>
          </div>

          <div className="use-case-section">
            <div className="use-case-description">
              <h3>Close more deals</h3>
              <p>Break large gift into strategic points on your customer journey to reduce your Cost Per Lead</p>
              <Link to="/sales-use-cases" className="learn-more-btn">LEARN MORE</Link>
            </div>
            <div className="use-case-image">
              <img src={phoneCalls} alt="Close more deals" />
            </div>
          </div>

          <div className="use-case-section">
            <div className="use-case-image">
              <img src={closingDeals} alt="Increase Customer Engagement" />
            </div>
            <div className="use-case-description">
              <h3>Increase Customer Engagement</h3>
              <p>Increase customer engagement and increase customer loyalty by offering incentivized rewards along the sales funnel to encourage your audience to learn more about your products and offerings</p>
              <Link to="/marketing-use-cases" className="learn-more-btn">LEARN MORE</Link>
            </div>
          </div>
          <div className="demo-form">
            <h2>REQUEST A DEMO</h2>
            <p>Get in contact with us!</p>
            <form onSubmit={handleSubmit}>
              <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
              <textarea id="message" name="message" placeholder="Type your message here..." value={formData.message} onChange={handleChange} required />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="fyncom-logo">
            <img src={fyncomLogo} alt="FynCom Logo" />
          </div>
        </div>
      <Footer />
      <SuccessModal isOpen={isSuccessModalOpen} message={modalMessage} onClose={() => setSuccessModalOpen(false)} />
      <FailureModal isOpen={isFailureModalOpen} message={modalMessage} onClose={() => setFailureModalOpen(false)} />
    </div>
  )
}

export default UseCases
