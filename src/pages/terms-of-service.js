import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import "../components/legal.css"

const TermsOfService = () => {
  return (
    <div>
      <Seo title="Terms of Service" description="FynComs Terms of Service are listed here." />
      <Header />
      <div className="AppText">
        <div className="legal-container">
          <h1 id="fyncom-dashboard-services-agreement">FynCom Dashboard Services Agreement</h1>
          <p>
            This Dashboard Services Agreement (this “Agreement”) is entered into by and between You and RoboCash Inc., DBA FynCom (“Company,” “we,” or “us”).
            This Agreement supplements our Terms of Use and our Privacy Policy, all of which govern your access to and use of dashboard.fyncom.com, including
            any content, functionality, and services, or their related transactions, offered on or through dashboard.fyncom.com (the “Dashboard”), whether as a
            guest or a registered user. The Company and you may be referred to herein collectively as the “Parties” or individually as a “Party.” Your
            registration for an account on, or use of, the Dashboard, and your checking any box next to language where this Agreement is presented, signifies
            your (continued) express agreement to this terms and provisions of this Agreement.
          </p>
          <p>WHEREAS, Company provides access to the Services to its customers; and</p>
          <p>
            WHEREAS, you desire to access the Services, and Company desires to provide you access to the Services, subject to the terms and conditions of this
            Agreement.
          </p>
          <p>
            NOW, THEREFORE, in consideration of the mutual covenants, terms, and conditions set forth herein, and for other good and valuable consideration, the
            receipt and sufficiency of which are hereby acknowledged, the Parties agree as follows:
          </p>
          <ol>
            <li>
              Item 1
              <ol type="a">
                <li>
                  Subitem a
                  <ol type="i">
                    <li>Sub-subitem i</li>
                    <li>Sub-subitem ii</li>
                  </ol>
                </li>
                <li>Subitem b</li>
              </ol>
            </li>
            <li>Item 2</li>
          </ol>

          {/*  */}
          {/*  */}
          <div className="legal-text-container">
            <ol start="1" id="section-1">
              <li>
                <strong>Definitions</strong>
                <ol type="a">
                  <li>
                    “<strong>Aggregated Statistics</strong>" means data and information related to your use of the Services that are used by Company in an
                    aggregate and anonymized manner, including to compile statistical and performance information related to the provision and operation of the
                    Services.
                  </li>
                  <li>
                    <strong>“Authorized User</strong>” means your employees, consultants, contractors, and agents
                    <ol type="i">
                      <li>who are authorized by you to access and use the Services under the rights granted to you pursuant to this Agreement;</li>
                      <li>whose access rights may be revoked by you according to your account and the provisions herein; and </li>
                      <li>for whom access to the Services shall be paid by you according to the provisions hereunder.</li>
                    </ol>
                  </li>
                  <li>
                    “<strong>Company IP</strong>” means the Services, the Documentation, and any and all intellectual property provided to you or any Authorized
                    User in connection with the foregoing. For the avoidance of doubt, Company IP includes Aggregated Statistics and any information, data, or
                    other content derived from Company&#39;s monitoring of your access to or use of the Services, but does not include Your Data.
                  </li>
                  <li>
                    “<strong>Creative</strong>” means all creative and substantive materials required for any messages distributed using the Services, including
                    but not limited to: text, images, web pages, links, html emails, text emails, “Subject” lines, “From” lines, and any other components
                    required by applicable law.
                  </li>
                  <li>
                    “<strong>Dashboard Account</strong>” means your account’s interface on the Dashboard before or after you or an Authorized User have logged
                    in.
                  </li>
                </ol>
              </li>
            </ol>

            <p>
              (f) “Documentation” means Company&#39;s user manuals, handbooks, and guides relating to the Services provided by Company to you either
              electronically or in hard copy form/end user documentation relating to the Services available at dashboard.fyncom.com/help.
            </p>
            <pre>
              <li>(g) “Fees” has the meaning provided in Section 4(b).</li>
            </pre>
            <pre>
              <li>(h) “Pre-Funded Amount” has the meaning provided in Section 4(a).</li>
            </pre>
            <pre>
              <li>(i) “Recipient Rewards” has the meaning provided in Section 4(a).</li>
            </pre>
            <pre>
              <li>(j) “Services” has the meaning provided in Section 2(a).</li>
            </pre>
            <pre>
              <li>(k) “Third-Party Products” has the meaning provided in Section 2(a).</li>
            </pre>
            <pre>
              <li>(l) “Your Crypto Balance” has the meaning provided in Section 4(a).</li>
            </pre>
            <p>
              (m) “Your Data” means, other than Aggregated Statistics, information, data, and other content, in any form or medium, that is submitted, posted,
              or otherwise transmitted by or on behalf of you or an Authorized User through the Services.
            </p>
          </div>
          <ol start="2">
            <li>Services, Access, and Use.</li>
          </ol>
          <p>
            (a) Services. The Company shall provide software-as-a-service functionalities and capabilities that integrate certain products or services provided
            by third-parties (“Third-Party Products”) as described in this Section (collectively, the “Services”). You may incorporate the Services into your
            use of those Products to offer your customers and users rewards that use certain blockchain and crypto-asset technology to facilitate payment rails.
            You are responsible for the use of the Services in compliance with all applicable laws and the terms of this Agreement. Specific instructions and
            suggested uses for the Services are provided on their respective pages on your Dashboard Account page. If you do not agree to abide by the
            applicable terms for any such Third-Party Products, then you should not install or use such Third-Party Products. You must create an account with
            each of the relevant Third-Party Products and supply the Company via the Dashboard an API key associated with such an account. You are solely
            responsible for protecting the API key or any other credential or authentication information related to your Third-Party Product account and the
            Company shall not be responsible for any harms or injuries related to your use of the Third Products (including without limitation the interactions
            or communications between the Dashboard and any Third-Party Product). You are responsible for any and all fees that may be payable by you to any
            Third-Party Product for your use of the Services. The Company may revoke or suspend your and any Authorized User’s access to the Services if it
            believes (in its sole and absolute discretion) that you have not complied with the terms applicable to any Third-Party Products, if it believes your
            credentials and/or API keys relevant to your account pertaining to a Third- Party Product have been compromised, or at the request of the providers
            of an applicable
          </p>
          <p>Third-Party Product. Terms applicable to each of the functionalities and capabilities currently offered via the Services are as follows:</p>
          <pre>
            <li>
              (i) FynMail – You may use FynMail to incentivize individuals who read, respond to, or otherwise engage in certain interactions with your email
              communications or mailers. The Company incorporates SendGrid into the FynMail functionality, subject to the terms herein. The current Terms of
              Service applicable to SendGrid may be found at https://www.twilio.com/legal/tos.
            </li>
          </pre>
          <pre>
            <li>
              (ii) FynText – You may use FynText to incentivize individuals who read, respond to, or otherwise engage in certain interactions with your SMS text
              message communications. The Company incorporates SlickText into the FynText functionality, subject to the terms herein. The current Terms of Use
              applicable to SlickText may be found at https://www.slicktext.com/termsofuse.php.
            </li>
          </pre>
          <p>
            (b) Provision of Access. You are required to create an account with us for yourself in order for your use of and access to the Services via a
            Dashboard Account. We reserve the right to pre-screen any creation or registration request in any manner we see fit (including by collecting
            information about you or your company) and we may deny use and/or access to any registrant for any reason or no reason at all in our sole
            discretion. Once approved, your full use of and access to the Services will be provided via a Dashboard Account. Company shall provide to you the
            necessary passwords and network links or connections to allow you to access your Dashboard Account and the Services. Via your Dashboard Account you
            will be able to issue sub-accounts for each of your Authorized Users, including access credential information. You will be responsible for
            monitoring each of your Authorized User’s use of the Services and must take steps to restrict or prevent any of your Authorized User’s use of the
            Services in violation of the provisions of this Agreement or any applicable laws. Each of your Authorized Users must be issued a separate
            sub-account particular to them and you warrant and represent that they shall not share credentials or security/access information between each
            other. Subject to and conditioned on the Company’s grant of access to you of the Services, your payment of Fees, and your compliance with all other
            terms and conditions of this Agreement, Company hereby grants you a non-exclusive, non-transferable (except in compliance with Section 11(g)) right
            to access and use the Services during the Term, solely for use by Authorized Users in accordance with the terms and conditions herein. Such use is
            limited to your internal use.
          </p>
          <p>
            (c) Documentation License. Subject to the terms and conditions contained in this Agreement, Company hereby grants to you a non-exclusive,
            non-sublicensable, non- transferable (except in compliance with Section 11(g)) license to use the Documentation during the Term solely for your
            internal business purposes in connection with its use of the Services.
          </p>
          <p>
            (d) Use Restrictions. You shall not use the Services for any purposes beyond the scope of the access granted in this Agreement. You shall not at any
            time, directly or indirectly, and shall not permit any Authorized Users to: (i) copy, modify, or create
          </p>
          <p>
            derivative works of the Services or Documentation, in whole or in part; (ii) rent, lease, lend, sell, license, sublicense, assign, distribute,
            publish, transfer, or otherwise make available the Services or Documentation; (iii) reverse engineer, disassemble, decompile, decode, adapt, or
            otherwise attempt to derive or gain access to any software component of the Services, in whole or in part; (iv) remove any proprietary notices from
            the Services or Documentation; (v) use the Services or Documentation in any manner or for any purpose that infringes, misappropriates, or otherwise
            violates any intellectual property right or other right of any person, or that violates any applicable law; (vi) violate the applicable terms and
            conditions of any Third Party Product; (vii) use the Services to violate any applicable law; or (viii) use the Services to harass, annoy, threaten,
            exploit, or otherwise contact any individual in any way that is not welcome and wanted by that individual.
          </p>
          <p>
            (e) Reservation of Rights. Company reserves all rights not expressly granted to you in this Agreement. Except for the limited rights and licenses
            expressly granted under this Agreement, nothing in this Agreement grants, by implication, waiver, estoppel, or otherwise, to you or any third party
            any intellectual property rights or other right, title, or interest in or to the Company IP.
          </p>
          <p>
            (f) Suspension. Notwithstanding anything to the contrary in this Agreement, Company may temporarily suspend your and any Authorized User&#39;s
            access to any portion or all of the Services for any reason or no reason at all, including without limitation if: (i) Company reasonably determines
            that (A) there is a threat or attack on any of the Company IP; (B) your or any Authorized User&#39;s use of the Company IP disrupt or pose a
            security risk to the Company IP or to any other customer or vendor of Company; (C) you, or any Authorized User, are using the Company IP for
            fraudulent or illegal activities; (D) subject to applicable law, you have ceased to continue your business in the ordinary course, made an
            assignment for the benefit of creditors or similar disposition of its assets, or become the subject of any bankruptcy, reorganization, liquidation,
            dissolution, or similar proceeding; or (E) Company&#39;s provision of the Services to you or any Authorized User is prohibited by applicable law; or
            (ii) the Company’s access to or use of any Third- Party Products for the provision of the Services terminated, suspended, or endures an outage of
            any kind (any such suspension described in subclause (i) or (ii) a “Service Suspension”). Company shall use commercially reasonable efforts to
            provide written notice of any Service Suspension to you and to provide updates regarding resumption of access to the Services following any Service
            Suspension. Company shall use commercially reasonable efforts to resume providing access to the Services as soon as reasonably possible after the
            event giving rise to the Service Suspension is cured. Company will have no liability for any damage, liabilities, losses (including any loss of data
            or profits), or any other consequences that you or any Authorized User may incur as a result of a Service Suspension. Further, Company reserves the
            right to terminate your access to or use of the Services as a resolution to any Service Suspension.
          </p>
          <p>
            (g) Aggregated Statistics. Notwithstanding anything to the contrary in this Agreement, Company may monitor your use of the Services and collect and
            compile Aggregated Statistics. As between Company and you, all right, title, and interest in
          </p>
          <p>
            Aggregated Statistics, and all intellectual property rights therein, belong to and are retained solely by Company. you acknowledge that Company may
            compile Aggregated Statistics based on Your Data input into the Services. you agree that Company may (i) make Aggregated Statistics publicly
            available in compliance with applicable law, and (ii) use Aggregated Statistics to the extent and in the manner permitted under applicable law.
          </p>
          <ol start="3">
            <li>Your Responsibilities.</li>
          </ol>
          <p>
            (a) General. You are responsible and liable for all uses of the Services and Documentation resulting from access provided by you, directly or
            indirectly, whether such access or use is permitted by or in violation of this Agreement. Without limiting the generality of the foregoing, You are
            responsible for all acts and omissions of Authorized Users, and any act or omission by an Authorized User that would constitute a breach of this
            Agreement if taken by you would be deemed a breach of this Agreement. You shall ensure all Authorized Users aware of this Agreement&#39;s provisions
            as applicable to such Authorized User&#39;s use of the Services, and shall cause Authorized Users to comply with such provisions. Nothing contained
            herein will release you from any obligation or liability hereunder or under our Terms of Use and Privacy Policy, and the Company may look to you for
            performance of all such obligations.
          </p>
          <p>(b) Creatives. You shall create and provide all Creatives, and are solely responsible for any Creatives.</p>
          <pre>
            <li>
              (i) You shall ensure that each Creative that may be distributed via email contains: (i) clear and conspicuous identification of the message as an
              advertisement (if so required); (ii) a valid, physical postal address for the “sender,” as the term is defined in the CAN-SPAM Act of 2003
              (“Sender”); (iii) an internet-based opt-out mechanism for the Sender with continued functionality for at least thirty (30) days after the email
              transmission; and (iv) when provided, accurate “Subject” and “From” lines that are not deceptive or misleading or in violation of the FTC Act or
              California Business and Professions Code, and in the case of “From” lines, include the Sender’s legal name, trade name, or Sender’s properly
              registered fictitious name, or are labeled as “generic”. All “From” lines used in email messages sent via the Services must include the Sender’s
              legal name, trade name, or your properly registered fictitious name, or must be identified as “generic.” You agree that the Company shall not be
              responsible or liable for any claim that the “From” line (including any “Friendly From” and/or mailing domain) does not properly identify an
              applicable Sender. You shall ensure that any Sender: (i) allows recipients to opt-out without requiring payment, information besides a recipient’s
              email address, or any other requirement to comply with a recipient’s opt-out request, including but not limited to requiring a recipient to visit
              more than one web page; (ii) complies with any valid opt-out request within ten (10) business days that it is received; and (iii) does not sell,
              lease, exchange, or otherwise transfer or release any email address for which it has received an opt-out request for any purpose other than
              compliance with the CAN-SPAM Act of 2003 or another provision of law. The Sender shall maintain a
            </li>
          </pre>
          <pre>
            <li>
              suppression list that includes the email addresses of all recipients that have validly engaged an opt-out mechanism or have otherwise asked to for
              removal from the Sender’s email list(s). You shall ensure you do not use the Services to send any email to a recipient who has opted-out or
              otherwise asked to be removed from a Sender’s email list(s).
            </li>
          </pre>
          <pre>
            <li>
              (ii) You shall ensure that each Creative that may be distributed via SMS text message complies with all applicable rules and requirements of the
              Telephone Consumer Privacy Act (TCPA), the Federal Communications Commission (FCC), and any other applicable laws, rules, or requirements. You
              shall ensure that any SMS text message distributed using the Services: (i) is only sent to a recipient who you can demonstrate has provided prior,
              written consent to receive such SMS text message(s), and that such recipient received clear and conspicuous disclosure of what SMS text message(s)
              they would receive; (ii) provides a clearly articulated method for the recipient to opt-out of receiving further SMS text messages by replying
              directly to the SMS text message, and that any such opt-out requests are processed and complied with as required by law; (iii) includes the
              accurate and legal identity of the entity sending the SMS text message; (iv) is only sent between the hours of 8 AM and 9 PM of the local time of
              the recipient; (v) is only sent to recipients who received a confirmation SMS text message at the time of signing up to receive your SMS text
              messages that includes the name of your business, the types of SMS text messages you will be sending, the amount of SMS text messages you will
              send each month, a warning that standard message and data rates apply, and clear instructions to opt-out.
            </li>
          </pre>
          <pre>
            <li>
              (iii) To the extent you incorporate any Creative into your use of the Services, you hereby grant the Company and any of its affiliates or vendors
              a nonexclusive, limited, worldwide, royalty-free, revocable license to display, perform, copy, transmit, distribute, and promote the Creative in
              connection with the provision of the Services and the performance of any other obligations hereunder.
            </li>
          </pre>
          <p>
            (c) Representations and Warranties. You represent and warrant that (i) you hold all necessary ownership or licensing rights to permit the use of all
            Creatives and to comply with the provisions of this Agreement; (ii) all Creatives and any materials to which recipients may access via a link, and
            any products or services made available through any Creative do not and will not infringe any patent, trademark, trade secret, copyright, or other
            intellectual or proprietary right of any third party; constitute, assist or encourage a criminal offense or otherwise create liability; or violate
            any local, state, national, or international law, rule, regulation, or FCC or FTC guideline; (iii) you or any end advertiser (if applicable) have a
            reasonable basis for every claim made within any Creative and possess appropriate documentation to substantiate such claims; (iv) the Services shall
            be used in compliance with all applicable laws, rules and regulations and pursuant to any applicable privacy policy(ies), which shall be clearly and
            conspicuously provided to consumers including adequate notice, disclosure and choices to consumers regarding the collection, use and disclosure of
            their information; (v) you or the end
          </p>
          <p>
            advertiser (if applicable) fulfill all commitments made to consumers in a timely manner in compliance with all applicable laws, rules and
            regulations; (vi) the price point for any advertised product(s) or service(s) is within reasonable fair market value for such product(s) or
            service(s); (vii) you or the end advertiser (if applicable) follow the refund and/or cancellation policies communicated to purchasers; (viii) your
            or the end advertiser (if applicable) provide reasonable and effective customer support practices; (ix) no messages transmitted using the Services
            are targeted to children under the age of thirteen (13); and (x) neither you nor any end advertiser (if applicable) will load any computer program
            onto an individual’s computer without that individual’s express consent and only after receiving clear and conspicuous notice about the nature of
            the software or program to be downloaded.
          </p>
          <ol start="4">
            <li>Fees and Payment.</li>
          </ol>
          <p>
            (a) Funding your Dashboard Account. To use the Services, you must pre-fund your Dashboard Account as described therein (the “Pre-Funded Amount”). If
            you use another service or product provide your Pre-Funded Amount, such transactions may be subject to that service’s or product’s terms and
            conditions and/or privacy policies. Only if there is a remaining Pre-Funded Amount displayed on your Dashboard Account, you may convert your
            Pre-Funded Amount into the type of crypto-asset displayed on your Dashboard Account in increments up to five (5) United States dollars per day
            subject to the applicable exchange rate for that crypto-asset at the time of the conversion. Any crypto-assets associated with your Dashboard
            Account will be displayed on your Dashboard Account (“Your Crypto Balance”). As you use the Services to communicate with your users, customers, or
            other intended recipients, a corresponding amount representing any rewards or incentives that may become due to them (“Recipient Rewards”). If a
            recipient acts in a way that entitles them to receive Recipient Rewards, that amount will be deducted from Your Crypto Balance and transferred to
            that customer or user.
          </p>
          <p>
            (b) Fees. In addition to any Recipient Rewards deducted from your Crypto Balance, you shall pay Company the fees (“Fees”) as stated on your
            Dashboard interface associated with your use of the Services. If for any reason Your Crypto Balance is insufficient to cover all Recipient Rewards
            and Fees due, you shall pay any remaining balance to the Company within ten (10) business days in either US dollars or a relevant crypto-asset (to
            be determined in the Company’s sole and absolute discretion). If you fail to make any payment within this timeframe, without limiting Company&#39;s
            other rights and remedies: (i) Company may convert any Pre-Funded Amount into Your Crypto Balance, which may then be used to cover such outstanding
            Recipient Rewards and/or Fees; (ii) Company may charge interest on the past due amount at the rate of 1.5% per month calculated daily and compounded
            monthly or, if lower, the highest rate permitted under applicable law; (iii) you shall reimburse Company for all reasonable costs incurred by
            Company in collecting any late payments or interest, including attorneys&#39; fees, court costs, and collection agency fees; (iv) Company may
            suspend your and your Authorized Users&#39; access to any portion or all of the Services until such amounts are paid in full.
          </p>
          <p>
            (c) Taxes. All Fees and other amounts payable by you under this Agreement are exclusive of taxes and similar assessments. you are responsible for
            all sales, use, and excise taxes, and any other similar taxes, duties, and charges of any kind imposed by any federal, state, or local governmental
            or regulatory authority on any amounts payable by you hereunder, other than any taxes imposed on Company&#39;s income.
          </p>
          <p>
            (d) Refunds. You may request a refund of any remaining Pre-Funded Amount associated with your Dashboard Account at any time by contacting us at
            <a href="mailto:&#115;&#117;&#x70;&#112;&#x6f;&#114;&#x74;&#x40;&#x66;&#121;&#110;&#99;&#x6f;&#x6d;&#46;&#99;&#x6f;&#109;">
              &#115;&#117;&#x70;&#112;&#x6f;&#114;&#x74;&#x40;&#x66;&#121;&#110;&#99;&#x6f;&#x6d;&#46;&#99;&#x6f;&#109;
            </a>{" "}
            or as otherwise instructed on your Dashboard Account. Please allow up to thirty (30) days for such refund to be processed and returned according to
            your payment information we have on file. You acknowledge and agree that you are not entitled to a refund to all or any portion of Your Crypto
            Balance for any reason. Further, once any Recipient Rewards or Fees are deducted from Your Crypto Balance due to your use of the Services, you
            acknowledge and agree that such amounts may be irrecoverable, and we may or may not replenish any amounts subject to such deductions at our sole and
            absolute discretion.
          </p>
          <p>
            (e) Terms Applicable to Crypto-Assets and Your Crypto Balance. Blockchains, crypto-assets, and their related technologies and functionalities are
            still emerging innovations that carry a relatively high amount of foreseeable and unforeseeable risk from security, financial, technical, political,
            social, and personal safety standpoints. The mere access to and interaction with blockchains requires high degrees of skill and knowledge to operate
            with a relative degree of safety and proficiency. Crypto- assets are highly volatile in nature due to many diverse factors, including, without
            limitation, use and adoption, speculation, manipulation, technology, security, and legal and regulatory developments and application. Further, the
            speed and cost of transacting with cryptographic technologies, such as blockchains like those that facilitate the Services, as well as the values of
            crypto-assets are considered variable and highly volatile, and it is entirely possible that the value of Your Crypto Balance may fluctuate severely
            at any time. Moreover, the transparent nature of many blockchains means that any interactions you have with crypto-assets and any blockchain may be
            publicly visible and readable in human form. By accessing and using the Services, you acknowledge the foregoing, and agrees and represents that it
            understands and assumes such and other risks involved with blockchains, crypto-assets, and related technologies (including, without limitation, any
            specific technical language used in this Agreement). You further represent that you have all knowledge sufficient to work, and are informed of all
            foreseeable risks, and the possibility of unforeseeable risks, associated with blockchains, crypto-assets, and the Services. You further
            acknowledge, and assume all risk related to the possibility, that any information presented via the Dashboard or Services may be inaccurate,
            possibly due to another party’s malicious activities and possibly to your harm or detriment. You acknowledge and agree that the Company makes no
            guarantees that any crypto-assets held in Your Crypto Balance or distributed as Recipient Rewards will (i) reach their intended destination, (ii)
            will hold value relevant to the United States dollar or any other benchmark, or (iii) will not subject you to any additional laws or requirements
            under any competent jurisdiction or authority. You further agree we are not responsible for any of
          </p>
          <pre>
            <li>
              these or related risks, do not own or control any blockchain or crypto-asset, cannot guarantee the safe or accurate functioning of the Services as
              they pertain to crypto-assets, and shall not be held liable for any resulting harms, damages, or losses incurred by or against you for using the
              Services. Accordingly, you acknowledge the foregoing, represents your understanding of the foregoing, and agree to assume full responsibility for
              all of the risks of accessing and using the Services to the extent they incorporate crypto-assets or blockchain technologies generally, whether
              mentioned in this Section or otherwise. You further expressly waive and release us from any and all liability, claims, causes of action, or
              damages arising from or in any way relating to your use of the Services as it pertains to crypto-assets and blockchain technology.
            </li>
          </pre>
          <ol start="5">
            <li>
              Confidential Information. From time to time during the Term, either Party may disclose or make available to the other Party information about its
              business affairs, products, confidential intellectual property, trade secrets, third-party confidential information, and other sensitive or
              proprietary information, whether orally or in written, electronic, or other form or media/in written or electronic form or media, and whether or
              not marked, designated, or otherwise identified as “confidential” (collectively, “Confidential Information”). Confidential Information does not
              include information that, at the time of disclosure is: (a) in the public domain; (b) known to the receiving Party at the time of disclosure; (c)
              rightfully obtained by the receiving Party on a non-confidential basis from a third party; or (d) independently developed by the receiving Party.
              The receiving Party shall not disclose the disclosing Party&#39;s Confidential Information to any person or entity, except to the receiving
              Party&#39;s employees who have a need to know the Confidential Information for the receiving Party to exercise its rights or perform its
              obligations hereunder. Notwithstanding the foregoing, each Party may disclose Confidential Information to the limited extent required (i) in order
              to comply with the order of a court or other governmental body, or as otherwise necessary to comply with applicable law, provided that the Party
              making the disclosure pursuant to the order shall first have given written notice to the other Party and made a reasonable effort to obtain a
              protective order; or (ii) to establish a Party&#39;s rights under this Agreement, including to make required court filings. On the expiration or
              termination of the Agreement, the receiving Party shall promptly return to the disclosing Party all copies, whether in written, electronic, or
              other form or media, of the disclosing Party&#39;s Confidential Information, or destroy all such copies and upon the disclosing Party’s request
              certify in writing to the disclosing Party that such Confidential Information has been destroyed. Each Party&#39;s obligations of non-disclosure
              with regard to Confidential Information are effective as of the Effective Date and will expire five years from the date first disclosed to the
              receiving Party; provided, however, with respect to any Confidential Information that constitutes a trade secret (as determined under applicable
              law), such obligations of non-disclosure will survive the termination or expiration of this Agreement for as long as such Confidential Information
              remains subject to trade secret protection under applicable law.
            </li>
            <li>Intellectual Property Ownership; Feedback</li>
          </ol>
          <pre>
            <li>
              (a) Company IP. You acknowledge that, as between you and Company, Company owns all right, title, and interest, including all intellectual property
              rights, in and to the Company IP and, with respect to Third-Party Products, the applicable third-
            </li>
          </pre>
          <p>party providers own all right, title, and interest, including all intellectual property rights, in and to the Third-Party Products.</p>
          <p>
            (b) Your Data. Company acknowledges that, as between Company and you, you own all right, title, and interest, including all intellectual property
            rights, in and to Your Data. You hereby grant to Company a non-exclusive, royalty-free, worldwide license to reproduce, distribute, and otherwise
            use and display Your Data and perform all acts with respect to Your Data as may be necessary for Company to provide the Services to you, and a
            non-exclusive, perpetual, irrevocable, royalty-free, worldwide license to reproduce, distribute, modify, and otherwise use and display Your Data
            incorporated within the Aggregated Statistics.
          </p>
          <p>
            (c) Feedback. If you or any of your employees or contractors sends or transmits any communications or materials to Company by mail, email,
            telephone, or otherwise, suggesting or recommending changes to the Company IP, including without limitation, new features or functionality relating
            thereto, or any comments, questions, suggestions, or the like (“Feedback”), Company is free to use such Feedback irrespective of any other
            obligation or limitation between the Parties governing such Feedback. You hereby assigns to Company on your behalf, and on behalf of your employees,
            contractors and/or agents, all right, title, and interest in, and Company is free to use, without any attribution or compensation to any party, any
            ideas, know-how, concepts, techniques, or other intellectual property rights contained in the Feedback, for any purpose whatsoever, although Company
            is not required to use any Feedback.
          </p>
          <ol start="7">
            <li>Limited Warranty and Warranty Disclaimer.</li>
          </ol>
          <p>
            (a) Company does not make any representations or guarantees regarding uptime or availability of the Services or to the safety, availability, or
            security of Your Crypto Balance. THE COMPANY STRICTLY DISCLAIMS ALL WARRANTIES WITH RESPECT TO ANY THIRD-PARTY PRODUCTS.
          </p>
          <p>
            (b) THE COMPANY IP IS PROVIDED “AS IS” AND COMPANY HEREBY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. COMPANY
            SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ALL WARRANTIES
            ARISING FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE. COMPANY MAKES NO WARRANTY OF ANY KIND THAT THE COMPANY IP, OR ANY PRODUCTS OR RESULTS OF
            THE USE THEREOF, WILL MEET CUSTOMER&#39;S OR ANY OTHER PERSON&#39;S REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, ACHIEVE ANY INTENDED RESULT, BE
            COMPATIBLE OR WORK WITH ANY SOFTWARE, SYSTEM, OR OTHER SERVICES, OR BE SECURE, ACCURATE, COMPLETE, FREE OF HARMFUL CODE, OR ERROR FREE.
          </p>
          <ol start="8">
            <li>
              Your Indemnification. You shall indemnify, hold harmless, and, at Company&#39;s option, defend Company from and against any and all losses,
              damages, liabilities, costs (including attorneys&#39; fees) resulting from incurred by Company resulting from any third-party claim, suit, action,
              or proceeding (“Third-Party Claim”) that arises due to: (i) Your Data, or any use of Your Data in accordance with this Agreement, infringing on or
              misappropriating any third party&#39;s intellectual property rights; (ii) any Creative or your use of the Services that causes violation of any
              law, statute, rule, or regulation, including without limitation false advertising or unfair competition, the TCPA, the CAN-SPAM Act, or any rule
              enforced by the FCC, FTC, or any other state or federal authority of competent jurisdiction; (iii) your failure to maintain Your Crypto Balance
              sufficient to payout any Recipient Rewards that become due; or (iv) your or any Authorized User&#39;s (w) negligence or willful misconduct; (x)
              use of the Services in combination with data, software, hardware, equipment, or technology not provided by Company; (y) modifications to the
              Services not made by Company; or (z) related to your use of the Services as they pertain to the sending of crypto-assets or incorporation of
              blockchain technology generally. You may not settle any Third-Party Claim against Company unless Company consents to such settlement, and Company
              will have the right, at its option, to defend itself against any such Third-Party Claim or to participate in the defense thereof by counsel of its
              own choice.
            </li>
            <li>
              Limitations of Liability. IN NO EVENT WILL COMPANY BE LIABLE UNDER OR IN CONNECTION WITH THIS AGREEMENT UNDER ANY LEGAL OR EQUITABLE THEORY,
              INCLUDING BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, AND OTHERWISE, FOR ANY: (a) CONSEQUENTIAL, INCIDENTAL, INDIRECT,
              EXEMPLARY, SPECIAL, ENHANCED, OR PUNITIVE DAMAGES; (b) INCREASED COSTS, DIMINUTION IN VALUE OR LOST BUSINESS, PRODUCTION, REVENUES, OR PROFITS;
              (c) LOSS OF GOODWILL OR REPUTATION; (d) USE, INABILITY TO USE, LOSS, INTERRUPTION, DELAY, OR RECOVERY OF ANY DATA, OR BREACH OF DATA OR SYSTEM
              SECURITY; OR (e) COST OF REPLACEMENT GOODS OR SERVICES, IN EACH CASE REGARDLESS OF WHETHER PROVIDER WAS ADVISED OF THE POSSIBILITY OF SUCH LOSSES
              OR DAMAGES OR SUCH LOSSES OR DAMAGES WERE OTHERWISE FORESEEABLE. IN NO EVENT WILL COMPANY’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS
              AGREEMENT UNDER ANY LEGAL OR EQUITABLE THEORY, INCLUDING BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, AND OTHERWISE EXCEED
              THE TOTAL AMOUNTS PAID TO COMPANY UNDER THIS AGREEMENT IN THE THREE (3) MONTH PERIOD PRECEDING THE EVENT GIVING RISE TO THE CLAIM OR $ 100 ,
              WHICHEVER IS LESS.
            </li>
            <li>Term and Termination.</li>
          </ol>
          <pre>
            <li>
              (a) Term. The term of this Agreement begins when you first create or register an account on the Dashboard and will continue in effect until
              terminated pursuant to this Agreement&#39;s express provisions (the “Term”).
            </li>
          </pre>
          <pre>
            <li>
              (b) Termination. You may terminate this Agreement at any time and for any reason by deleting your account on the Dashboard. The Company may
              suspend or
            </li>
          </pre>
          <p>terminate this Agreement at any time and for any or no reason at its sole discretion upon written notice to you.</p>
          <p>
            (c) Effect of Expiration or Termination. Upon expiration or earlier termination of this Agreement, you shall immediately discontinue use of the
            Company IP and, without limiting your obligations under Section 5 , you shall delete, destroy, or return all copies of the Company IP and (upon
            Company’s request) certify in writing to the Company that the Company IP has been deleted or destroyed. No expiration or termination will affect
            your obligation to pay all Recipient Rewards and Fees that may have become due before such expiration, though termination may entitle you to a
            refund of your Pre-Funded Amount unless the Company reasonably determines such would be in violation of any law or valid court order or may
            otherwise unduly harm the Company’s interests in an amount larger than that of the Pre-Funded Amount subject to a refund.
          </p>
          <p>
            (d) Survival. This Section 10 (d) and Sections 1 , 3(c), 4 , 5 , 6 , 7 , Error! Reference source not found., 9 , and 11 , and any of your payment
            obligations hereunder, shall survive any termination or expiration of this Agreement.
          </p>
          <ol start="11">
            <li>Miscellaneous.</li>
          </ol>
          <p>
            (a) Entire Agreement. This Agreement, together with our Terms of Use, Privacy Policy, and any other documents incorporated herein by reference and
            all related Exhibits, constitute the sole and entire agreement of the Parties with respect to the subject matter of this Agreement and supersedes
            all prior and contemporaneous understandings, agreements, and representations and warranties, both written and oral, with respect to such subject
            matter. In the event of any inconsistency between the statements made in the body of this Agreement, and any other documents incorporated herein by
            reference, the following order of precedence governs: (i) first, this Agreement; (ii) second, any other documents incorporated herein by reference.
          </p>
          <p>
            (b) Notices. All notices, requests, consents, claims, demands, waivers, and other communications hereunder (each, a “Notice”) must be in writing
            and: (1) if intended for us, to: 17877 Von Karmen Ave., Suite 400, Irvine CA 92614, or (2) if intended for you, the contact information you provide
            to us associated with your Dashboard Account at the time Notice is sent. All Notices must be delivered by personal delivery, nationally recognized
            overnight courier (with all fees pre-paid), facsimile or email (with confirmation of transmission), or certified or registered mail (in each case,
            return receipt requested, postage pre-paid).
          </p>
          <p>
            (c) Force Majeure. In no event shall Company be liable to you, or be deemed to have breached this Agreement, for any failure or delay in performing
            its obligations under this Agreement, if and to the extent such failure or delay is caused by any circumstances beyond Company&#39;s reasonable
            control, including but not limited to acts of God, flood, fire, earthquake, epidemic, blockchain or internet delays or failures, explosion, war,
            terrorism, invasion, riot or other civil unrest, strikes, labor stoppages or
          </p>
          <p>
            slowdowns or other industrial disturbances, or passage of law or any action taken by a governmental or public authority, including imposing an
            embargo.
          </p>
          <p>
            (d) Amendment and Modification; Waiver. We may amend or modify these Terms at any time by posting such amendment or modification to the Dashboard
            with notification of such amendment or modification displayed on your Dashboard Account for thirty (30) days after it is made. The Services and any
            relevant transactions shall be governed by the last so-posted Agreement at the time those Services are rendered. No waiver by any Party of any of
            the provisions hereof will be effective unless explicitly set forth in writing and signed by the Party so waiving. Except as otherwise set forth in
            this Agreement, (i) no failure to exercise, or delay in exercising, any rights, remedy, power, or privilege arising from this Agreement will operate
            or be construed as a waiver thereof, and (ii) no single or partial exercise of any right, remedy, power, or privilege hereunder will preclude any
            other or further exercise thereof or the exercise of any other right, remedy, power, or privilege.
          </p>
          <p>
            (e) Severability. If any provision of this Agreement is invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or
            unenforceability will not affect any other term or provision of this Agreement or invalidate or render unenforceable such term or provision in any
            other jurisdiction. Upon such determination that any term or other provision is invalid, illegal, or unenforceable, the Parties shall negotiate in
            good faith to modify this Agreement so as to effect their original intent as closely as possible in a mutually acceptable manner in order that the
            transactions contemplated hereby be consummated as originally contemplated to the greatest extent possible.
          </p>
          <p>
            (f) Governing Law; Submission to Jurisdiction. This Agreement is governed by and construed in accordance with the internal laws of the State of
            California without giving effect to any choice or conflict of law provision or rule that would require or permit the application of the laws of any
            jurisdiction other than those of the State of California. Any legal suit, action, or proceeding arising out of or related to this Agreement or the
            licenses granted hereunder shall be subject to the provisions related to arbitration and class action waiver contained in our Terms of Use.
          </p>
          <p>
            (g) Assignment. You may not assign any of its rights or delegate any of its obligations hereunder, in each case whether voluntarily, involuntarily,
            by operation of law or otherwise, without the prior written consent of Company. Any purported assignment or delegation in violation of this Section
            will be null and void. No assignment or delegation will relieve the assigning or delegating Party of any of its obligations hereunder. This
            Agreement is binding upon and inures to the benefit of the Parties and their respective permitted successors and assigns.
          </p>
          <p>
            (h) Export Regulation. You shall comply with all applicable federal laws, regulations, and rules, and complete all required undertakings (including
            obtaining any necessary export license or other governmental approval), that prohibit or restrict the export or re-export of the Services or any
            Your Data outside the US.
          </p>
          <p>
            (i) Equitable Relief. Each Party acknowledges and agrees that a breach or threatened breach by such Party of any of its obligations under Section 5
            or 6 would cause the other Party irreparable harm for which monetary damages would not be an adequate remedy and agrees that, in the event of such
            breach or threatened breach, the other Party will be entitled to equitable relief, including a restraining order, an injunction, specific
            performance, and any other relief that may be available from any court, without any requirement to post a bond or other security, or to prove actual
            damages or that monetary damages are not an adequate remedy. Such remedies are not exclusive and are in addition to all other remedies that may be
            available at law, in equity, or otherwise.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsOfService
