import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/white-paper.css"
import privacyPolicy from "../../static/pdfs/FynCom- Privacy Policy - 20211221.pdf"
import Seo from "../components/seo"
import PdfContent from "../components/PdfContent"

const PrivacyPolicy = () => {
  return (
    <div>
      <Seo
        title="Privacy Policy"
        description="FynCom's Privacy Policy is designed with you in mind. For a better future where our privacy is respected and enforced through personal paywalls!"
      />
      <Header />
      {/* <div className="content-container">
        <h1>FynCom's Privacy Policy</h1>
        <PdfContent file={privacyPolicy} />
      </div> */}
      <div className="AppText">
        <div className="legal-container">
          <h1 id="-fyncom-privacy-policy-">
            <strong>FynCom Privacy Policy</strong>
          </h1>
          <p id="date-updated">
            <em>Last modified: February 21th, 2023</em>
          </p>
          <h2 id="-introduction-">
            <strong>Introduction</strong>
          </h2>
          <p>
            RoboCash Inc., DBA FynCom ( <strong>&quot;Company&quot;</strong> or <strong>&quot;We&quot;</strong> ) respects your privacy and are committed to
            protecting it through our compliance with this policy.{" "}
          </p>
          <p>
            This policy describes the types of information we may collect from you or that you may provide when you visit the websites www.fyncom.com,
            www.karmacall.com, www.robocashapp.com and their sub-pages, or through any of our mobile or desktop applications (our &quot; <strong>Apps</strong>
            &quot;) that we provide (collectively, our &quot; <strong>Services</strong>&quot;) and our practices for collecting, using, maintaining, protecting,
            and disclosing that information.{" "}
          </p>
          <p>This policy applies to information we collect:</p>
          <ul>
            <li>On our Services.</li>
            <li>In email, text, and other electronic messages between you and our Services.</li>
            <li>Through our Apps.</li>
            <li>
              When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links
              to this policy.
            </li>
            <li>When you interact or communicate with any third party who utilizes our Services.</li>
          </ul>
          <p>It does not apply to information collected by:</p>
          <ul>
            <li>Us offline or through any other means, including on any other website operated by the Company or any third party.</li>
          </ul>
          <p>
            Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree
            with our policies and practices, your choice is not to use our Services. By accessing or using our Services, you agree to this privacy policy. This
            policy may change from time to time (see <strong>Changes to Our Privacy Policy</strong>). Your continued use of our Services after we make changes
            is deemed to be acceptance of those changes, so please check the policy periodically for updates.{" "}
          </p>
          <h2 id="-children-under-the-age-of-18-">
            <strong>Children Under the Age of 18</strong>
          </h2>
          <p>
            Our Services are not intended for children under 18 years of age. No one under age 18 may provide any information to or on our Services. We do not
            knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on our Services or through
            any of their features, register on our Services, make any purchases or payments through our Services, or provide any information about yourself to
            us, including your name, address, telephone number, email address, or any screen name or username you may use. If we learn we have collected or
            received personal information from a child under 18 without verification of parental consent, we will delete that information. If you believe we
            might have any information from or about a child under 18, please contact us at support@fyncom.com.
          </p>
          <h2 id="-information-we-collect-about-you-and-how-we-collect-it-">
            <strong>Information We Collect About You and How We Collect It</strong>
          </h2>
          <p>We collect several types of information from and about users of our Services, including information:</p>
          <ul>
            <li>
              By which you may be personally identified, such as name, postal address, e-mail address, telephone number, payment information, or any identifier
              by which you may be contacted online or offline (&quot; <strong>personal information</strong>&quot;);{" "}
            </li>
            <li>
              That is about you but individually does not identify you but may be directly or indirectly associated or linked to you, such as IP Address,
              blockchain information (such as public address), or information automatically generated about you by your device; and/or
            </li>
            <li>About your internet connection, the equipment you use to access our Services, and usage details.</li>
          </ul>
          <p>We collect this information:</p>
          <ul>
            <li>Directly from you when you provide it to us.</li>
            <li>
              Automatically as you navigate through or otherwise use our Services. Information collected automatically may include usage details, IP addresses,
              device information, and information collected through cookies, and web beacons.
            </li>
            <li>From third parties, for example, our business partners, including through their use of our services.</li>
          </ul>
          <p>
            <strong>
              <em>Information You Provide to Us</em>
            </strong>
          </p>
          <p>The information we collect on or through our Services may include:</p>
          <ul>
            <li>
              Information that you provide by filling in forms on our Services. This includes information provided at the time of registering to use our
              Services, signing up for an email list through our Services, or requesting further services. We may also ask you for information when you enter a
              contest or promotion sponsored by us, and when you report a problem with our Services.
            </li>
            <li>
              Records and copies of your correspondence (including email addresses), if you contact us or if you engage with a business partner who is using our
              Services.
            </li>
            <li>Your responses to surveys that we might ask you to complete for research purposes.</li>
            <li>
              Details of transactions you conduct through our Services and of the fulfillment of your orders. You may be required to provide financial
              information before placing an order through our Services.
            </li>
          </ul>
          <p>
            <strong>
              <em>Information We Collect Through Automatic Data Collection Technologies</em>
            </strong>
          </p>
          <p>
            As you navigate through and interact with our Services, we may use automatic data collection technologies to collect certain information about your
            equipment, browsing actions, and patterns, including:
          </p>
          <ul>
            <li>
              Details of your visits to our Services, including traffic data, logs, and other communication data and the resources that you access and use of
              our Services.
            </li>
            <li>Information about your computer and internet connection, including your IP address, operating system, and browser type.</li>
          </ul>
          <p>
            If you interact or communicate with a business partner using our services, we may collect information about such interactions or communications,
            such as length and time of those interactions or communications and content of the communication. It helps us to improve our Services and to deliver
            a better and more personalized service, including by enabling us to:
          </p>
          <ul>
            <li>Estimate our audience size and usage patterns.</li>
            <li>Store information about your preferences, allowing us to customize our Services according to your individual interests.</li>
            <li>Speed up your searches.</li>
            <li>Recognize you when you return to our Services.</li>
            <li>Provide effective services to our business partners and you.</li>
          </ul>
          <p>The technologies we use for this automatic data collection may include:</p>
          <ul>
            <li>
              <strong>Cookies (or browser cookies).</strong> A cookie is a small file placed on the hard drive of your computer. You may refuse to accept
              browser cookies by activating the appropriate setting on your browser. However, if you select this setting, you may be unable to access certain
              parts of our Services. Unless you have adjusted your browser or device setting so that it will refuse cookies, our system will issue cookies when
              you use or visit our Services.
            </li>
            <li>
              <strong>Web Beacons.</strong> Pages of our Services and our e-mails may contain small electronic files known as web beacons (also referred to as
              clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an
              email and for other related statistics (for example, recording the popularity of certain website or application content and verifying system and
              server integrity).
            </li>
          </ul>
          <p>
            We do not collect personal information automatically, but we may tie this information to personal information about you that we collect from other
            sources or that you provide to us.
          </p>
          <h2 id="-third-party-use-of-cookies-and-other-tracking-technologies-">
            <strong>Third-Party Use of Cookies and Other Tracking Technologies</strong>
          </h2>
          <p>
            Some content or applications, including advertisements, on our Services are served by third-parties, including advertisers, other users of our
            Services, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with
            web beacons or other tracking technologies to collect information about you when you use our Services. The information they collect may be
            associated with your personal information or they may collect information, including personal information, about your online activities over time
            and across different websites and other online services. They may use this information to provide you with interest-based (behavioral) advertising
            or other targeted content.
          </p>
          <p>
            We do not control these third parties&#39; tracking technologies or how they may be used. If you have any questions about an advertisement or other
            targeted content, you should contact the responsible provider directly. For information about how you can opt out of receiving targeted advertising
            from many providers, see <strong>Choices About How We Use and Disclose Your Information</strong>.{" "}
          </p>
          <h2 id="-how-we-use-your-information-">
            <strong>How We Use Your Information</strong>
          </h2>
          <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
          <ul>
            <li>To present our Services and their contents to you.</li>
            <li>To provide you with information, products, or services that you request from us.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>
              To provide you with notices about your account, including expiration, renewal, or billing notices, or to make payments to you via blockchain
              technologies.
            </li>
            <li>
              To carry out our obligations and enforce our rights arising from any contracts entered into between you and us or between us and any third party
              (including without limitation business partners), including for billing and collection.
            </li>
            <li>To notify you about changes to our Services or any products or services we offer or provide though them.</li>
            <li>
              To provide our services to you or any business partner.{" "}
              <ul>
                <li>
                  In regards to emails, we request metadata access for &lt;Reply-To&gt;, &lt;sender&gt;, &lt;recipient&gt; and &lt;x-fyncom-campaign-id&gt;
                  headers. This helps us determine whether FynCom rewards should be distributed to an email address and/or filter emails accordingly. Services
                  such as Sendgrid, Google Cloud and AWS are used for this.{" "}
                </li>
                <li>
                  In cases where we do not have direct access to an email inbox, we may request email forwarding to a FynCom email address, so we can access the
                  metadata.
                </li>
                <li>
                  In cases where we have permissions to access the email inbox, such as for FynCom Filters: Email Edition, we may request the following
                  permissions to create labels and send automated notification emails (as you) in response to senders whom you do not trust and/or have not left
                  a FynCom Deposit for you. <br />
                  <a href="https://www.googleapis.com/auth/gmail.labels">https://www.googleapis.com/auth/gmail.labels</a>
                  <br />
                  <a href="https://www.googleapis.com/auth/gmail.settings.basic">https://www.googleapis.com/auth/gmail.settings.basic</a>
                  <br />
                  <a href="https://www.googleapis.com/auth/gmail.metadata">https://www.googleapis.com/auth/gmail.metadata</a>
                  <br />
                  <a href="https://www.googleapis.com/auth/gmail.send">https://www.googleapis.com/auth/gmail.send</a>
                </li>
              </ul>
            </li>
            <li>In any other way we may describe when you provide the information.</li>
            <li>For any other purpose with your consent.</li>
          </ul>
          <p>
            We may also use your information to contact you about our own and third-parties&#39; goods and services that may be of interest to you. If you do
            not want us to use your information in this way, please email us at support@fyncom.com. For more information, see{" "}
            <strong>Choices About How We Use and Disclose Your Information</strong>.{" "}
          </p>
          <h2 id="-disclosure-of-your-information-">
            <strong>Disclosure of Your Information</strong>
          </h2>
          <p>
            We may disclose aggregated information about our users, and information that does not identify any individual and cannot be directly or indirectly
            linked with personal information, without restriction.
          </p>
          <p>We may disclose personal information that we collect or that you provide as described in this privacy policy:</p>
          <ul>
            <li>To contractors, service providers, and other third parties we use to support our business.</li>
            <li>
              To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some
              or all of the Company&#39;s assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal
              information held by us about our Services users or other individuals is among the assets transferred.
            </li>
            <li>
              To third parties to market their products or services to you if you have engaged with those third parties about their products or services via our
              Services. For more information, see <strong>Choices About How We Use and Disclose Your Information</strong>.{" "}
            </li>
            <li>To fulfill the purpose for which you provide it.</li>
            <li>For any other purpose disclosed by us when you provide the information.</li>
            <li>With your consent.</li>
          </ul>
          <p>We may also disclose your personal information:</p>
          <ul>
            <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
            <li>To enforce or apply agreements with you, including without limitation for billing, collection, or payment purposes.</li>
            <li>
              If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, our users, or
              others.
            </li>
          </ul>
          <p>
            We utilize the services of third-party payment processors to conduct our Services. We do not collect or store certain aspects of your payment
            information (such as full credit card numbers or CVV numbers) and such information is transmitted directly to those third-party processors when you
            provide it. Information provided to such third-party payment processors may be subject to their own privacy policies.
          </p>
          <h2 id="-choices-about-how-we-use-and-disclose-your-information-">
            <strong>Choices About How We Use and Disclose Your Information</strong>
          </h2>
          <p>
            We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the
            following control over your information:
          </p>
          <ul>
            <li>
              <strong>Tracking Technologies and Advertising.</strong> You can set your browser or device to refuse all or some browser cookies, or to alert you
              when cookies are being sent. If you disable or refuse cookies, please note that some parts of our Services may then be inaccessible or not
              function properly.
            </li>
            <li>
              <strong>Promotional Offers from the Company.</strong> If you do not wish to have your contact information used by the Company to promote our own
              or third parties&#39; products or services, you can opt-out by sending us an email stating your request to support@fyncom.com. If we have sent you
              a promotional email, you may unsubscribe following the unsubscribe link at the bottom or by sending us an email asking to be omitted from future
              email distributions. This opt out does not apply to information provided to the Company as a result of a product purchase, product service
              experience, or transactions involving our Services.
            </li>
          </ul>
          <p>
            We do not control third parties&#39; collection or use of your information to serve interest-based advertising. However these third parties may
            provide you with ways to choose not to have your information collected or used in this way. You can opt out of receiving targeted ads from members
            of the Network Advertising Initiative (&quot; <strong>NAI</strong>&quot;) on the NAI&#39;s website.{" "}
          </p>
          <p>
            <strong>Accessing and Correcting Your Information</strong>
          </p>
          <p>
            You can review and change your personal information and certain other information about or relating to you by logging into our Services and visiting
            your account profile page.
          </p>
          <h2 id="-data-security-">
            <strong>Data Security</strong>
          </h2>
          <p>
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and
            disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions, account authentication and
            credentialing, and personal information you enter related to your account will be encrypted using SSL technology.
          </p>
          <p>
            The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain
            parts of our Services, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
          </p>
          <p>
            Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal
            information, we cannot guarantee the security of your personal information transmitted to our Services. Any transmission of personal information is
            at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on our Services.
          </p>
          <h2 id="-privacy-the-blockchain-">
            <strong>Privacy &amp; The Blockchain:</strong>
          </h2>
          <p>
            A key feature of many blockchain technologies is the transparency and public accessibility of on-chain transactions. This includes, without
            limitation, your public account address (&quot; <strong>public key</strong>&quot;) and certain associated information. Some of our Services allow
            users to send crypto-assets from our Services to their own public keys, which we may collect to conduct such transactions. Information stored
            on-chain (including without limitation that generated when using the Services) may be public, immutable, and, in many cases, cannot be deleted or
            amended. Your public addresses may reveal information about you and this information can potentially be correlated now or in the future by any party
            who chooses to do so, including law enforcement. If you are unfamiliar with blockchain technology and its transparent and public nature, we strongly
            encourage you to study how information is stored on blockchain technology before electing to use our Services that interact with public blockchains.{" "}
          </p>
          <h2 id="-changes-to-our-privacy-policy-">
            <strong>Changes to Our Privacy Policy</strong>
          </h2>
          <p>
            It is our policy to post any changes we make to our privacy policy on this page with a notice that the privacy policy has been updated on applicable
            interfaces or pages of our Services. If we make material changes to how we treat our users&#39; personal information, we will notify you by email to
            the primary email address specified in your account. The date the privacy policy was last revised is identified at the top of the page. You are
            responsible for ensuring we have an up-to-date active and deliverable email address and contact information for you, and for periodically visiting
            our Services and this privacy policy to check for any changes.
          </p>
          <h2 id="-contact-information-">
            <strong>Contact Information</strong>
          </h2>
          <p>
            To ask questions or comment about this privacy policy and our privacy practices, or to register a complaint or concern, please email us at
            support@fyncom.com
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
