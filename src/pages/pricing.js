import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/pricing.css"

const Pricing = () => {
  // set the HTML content here.
  const htmlContent = `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FynCom Pricing Page</title>
  </head>
  <body>
    <h1 id="pricing">Pricing</h1>
    <p> <span>A part of your monthly subscription is usable for Rewards.</span> <span>This does not roll over at the end of the month.</span> <span>Account top-ups roll over indefinitely.</span></p>
    <table>
      <thead>
        <tr>
          <th align="center"><img src="https://fyncom-static-files.s3.us-west-1.amazonaws.com/pricing/Pricing+Graphic+A1.png" alt="Pricing"></th>
          <th align="center"><img src="https://fyncom-static-files.s3.us-west-1.amazonaws.com/pricing/Pricing+Standard+A2_50.png" alt="Standard Pricing" onMouseOver="this.style.cursor='pointer'" onclick="window.open('https://fyncom.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=standard-USD-Monthly&amp;subscription_items[quantity][0]=1'), 'target=_blank', 'rel=noopener noreferrer';"></th>
          <th align="center"><img src="https://fyncom-static-files.s3.us-west-1.amazonaws.com/pricing/Pricing+Pro+A3_.png" alt="Pro Pricing" onMouseOver="this.style.cursor='pointer'" onclick="window.open('https://fyncom.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=pro-USD-Monthly&amp;subscription_items[quantity][0]=1'), 'target=_blank', 'rel=noopener noreferrer';"></th>
          <th align="center"><img src="https://fyncom-static-files.s3.us-west-1.amazonaws.com/pricing/Pricing+Enterprise+A4.png" alt="Enterprise Pricing" onMouseOver="this.style.cursor='pointer'" onclick="window.open('https://www.fyncom.com/contact'), 'target=_blank';"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td align="center">"Use It or Lose It" Credits*</td>
            <td align="center">$20</td>
            <td align="center">$50</td>
            <td align="center">Custom</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Sender Accounts</td>
            <td align="center">3</td>
            <td align="center">10</td>
            <td align="center">100+</td>
        </tr>
        <tr>
            <td align="center">Rewards Campaigns<sup>1</sup></td>
            <td align="center">5</td>
            <td align="center">20</td>
            <td align="center">Unlimited</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Commission<sup>2</sup></td>
            <td align="center">30%</td>
            <td align="center">15%</td>
            <td align="center">5%</td>
        </tr>
        <tr>
            <td align="center">Support</td>
            <td align="center">Email</td>
            <td align="center">Priority, Email &amp; Phone</td>
            <td align="center">Dedicated Manager</td>
        </tr>
        <tr class="intellij-row-even">
            <td colspan="4" align="center">User Experience When Receiving Rewards + Cashing Out</td>
        </tr>
        <tr>
            <td align="center">User Dashboard to Manage Funds</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">User Gift Card Cashout</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td align="center">"1 Click Redeem" Email Notification</td>
            <td align="center">❌</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Branded Email Notifications</td>
            <td align="center">❌</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td colspan="4" align="center" >Ways You Can Reward Responses (Reward Integrations)</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Google Calendar Rewards</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td align="center">Calendly Rewards</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Google Forms Rewards</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td align="center">Typeform Rewards</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Zapier Rewards</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td align="center">Email Rewards</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Text Rewards</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td align="center">Call Rewards</td>
            <td align="center">❌</td>
            <td align="center">❌</td>
            <td align="center">✅</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Salesforce Rewards</td>
            <td align="center">❌</td>
            <td align="center">❌</td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td align="center">Custom Integrations</td>
            <td align="center">❌</td>
            <td align="center">1</td>
            <td align="center">As needed</td>
        </tr>
        <tr class="intellij-row-even">
            <td colspan="4" align="center">Developer Tools</td>
        </tr>
        <tr>
            <td align="center" >API Access</td>
            <td align="center" >❌</td>
            <td align="center" >✅</td>
            <td align="center" >✅</td>
        </tr>
        <tr class="intellij-row-even" >
            <td colspan="4" align="center">Admin Tools</td>
        </tr>
        <tr>
            <td align="center">Rewards Campaign Dashboard</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Data Analytics Dashboard</td>
            <td align="center">❌</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td align="center">Min Value / Max Engagement Tips</td>
            <td align="center">❌</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr class="intellij-row-even">
            <td align="center">Optimal Rewards Data Insight</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td align="center">Advanced Data Insights<sup>3</sup></td>
            <td align="center">❌</td>
            <td align="center">❌</td>
            <td align="center">✅</td>
        </tr>
    
        <tr class="intellij-row-even">
            <td align="center"></td>
            <td align="center"><button name="button" style="background-color:#4A90E2;color:white" onMouseOver="this.style.cursor='pointer'" onclick="window.open('https://fyncom.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=standard-USD-Monthly&amp;subscription_items[quantity][0]=1'), 'target=_blank', 'rel=noopener noreferrer';">Get Standard</button></td>
            <td align="center"><button name="button" style="background-color:#4A90E2;color:white" onMouseOver="this.style.cursor='pointer'" onclick="window.open('https://fyncom.chargebee.com/hosted_pages/checkout?subscription_items[item_price_id][0]=pro-USD-Monthly&amp;subscription_items[quantity][0]=1'), 'target=_blank', 'rel=noopener noreferrer';">Get Pro</button></td>
            <td align="center"><button name="button" style="background-color:#4A90E2;color:white" onMouseOver="this.style.cursor='pointer'" onclick="window.open('https://www.fyncom.com/contact'), 'target=_blank';">Contact Us</button></td>
        </tr>
       </tbody>
    </table>
    <p><sup>*</sup><strong>Use It or Lose It for Standard & Pro Plans</strong> <br> <span>Your subscription gives you</span> <span>FynCom credit to use as Rewards each month, inclusive of commission. No roll overs.</span> </p>
    <p><sup>1</sup><strong>Rewards Campaigns</strong> <br> <span>The number of active Rewards Campaigns your plan can have at a time.</span></p>
    <p><sup>2</sup><strong>Commission</strong> <br> <span>The commission is based on reward size and is only paid to FynCom when a response is received or desired action completed.</span> <br> <span>Here is an example for Standard plans.</span> <br> <span>You create a Rewards Campaign of</span> <span>$1.00 and attach it to a Calendly booking so that anyone who books get rewarded.</span> <br></p>
    <ul>
      <li>jamie@bestFakeCompany.com books an event.</li>
      <li>$1.15 total is deducted from your Account Balance.</li>
      <li>Jamie instantly receives $1.00 from your Account Balance and is notified by email.
        <ul>
          <li>FynCom receives $0.15 from your Account Balance.</li>
          <li>Jamie is not charged any fees to withdraw funds or purchase gift cards.</li>
        </ul>
      </li>
    </ul>
    <p><span>Here is the same sample for all plans.</span> <br></p>
    <table class="small">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Reward To Recipient</td>
          <td>$1.00</td>
          <td>$1.00</td>
          <td>$1.00</td>
        </tr>
        <tr class="intellij-row-even">
          <td>Commission to FynCom</td>
          <td>$0.30</td>
          <td>$0.15</td>
          <td>$0.05</td>
        </tr>
        <tr>
          <td>Amount deducted from your FynCom balance</td>
          <td>$1.30</td>
          <td>$1.15</td>
          <td>$1.05</td>
        </tr>
      </tbody>
    </table>
    <p><sup>3</sup><strong>Advanced Data Insights</strong> <br> <span>Be the first to know the optimal rewards sizes to deliver to certain demographics and at which point of the journey to deliver said rewards.</span></p>
  </body>
</html>`;

  return (
    // <ReactMarkdown skipHtml={false}>{markdownContent}</ReactMarkdown>
    <div>
      <Header />
      <div className="html-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <Footer />
    </div>

  )
}

export default Pricing
