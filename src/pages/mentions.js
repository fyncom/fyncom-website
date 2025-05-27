import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/mentions.css"
import Seo from "../components/seo"

const Mentions = () => {
  return (
    <div>
      <Seo
        title="Industry Mentions - FynCom"
        description="Thought leaders discussing AI, communication protocols, trust, and the future of digital interactions - concepts at the heart of FynCom's mission."
      />
      <Header />

      <section className="mentions-header">
        <h1>Industry Mentions</h1>
        <p>
          Leading voices in technology, venture capital, and AI discussing the challenges and opportunities that FynCom's refundable deposits technology
          addresses - from AI-powered phishing to trust in digital communications.
        </p>
      </section>

      <div className="mentions-container">
        <section className="mention-section">
          <h2>On Digital Identity and Trust</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID?start=900"
              title="Day One Solana Investor: Why AI is Overhyped"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mention-content">
            <h3>Day One Solana Investor: Why AI is Overhyped - Joe Sam Lesin & Joe Lonsdale</h3>
            <p className="timestamp">15:00 - 18:00</p>
            <div className="highlight-text">
              <p>
                Joe starts by asking Sam about Sam's role in online identity and then mentions how he had a friend working on anti-fraud in Africa. The
                discussion centers on how the open internet brought significant issues due to the lack of identity verification and by extension, trust.
              </p>
            </div>
          </div>
        </section>

        <section className="mention-section">
          <h2>On Communication Protocols</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID?start=1414"
              title="Bootstrapping an AI Company to $5M ARR"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mention-content">
            <h3>Bootstrapping an AI Company to $5M ARR - Whippy CEO David Daneshgar</h3>
            <p className="timestamp">23:34 - 27:10</p>
            <div className="highlight-text">
              <p>
                Whippy CEO David Daneshgar discusses communication protocols at a higher level - perfectly aligned with future expectations for seamless,
                trusted digital interactions. This is the best video out of all of these.
              </p>
            </div>
          </div>
        </section>

        <section className="mention-section">
          <h2>On Agent Communication and Trust Transfer</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/v9JBMnxuPX8?start=1431"
              title="AI's Trillion Dollar Opportunity: Sequoia AI Ascent 2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mention-content">
            <h3>AI's Trillion Dollar Opportunity: Sequoia AI Ascent 2025</h3>
            <p className="timestamp">23:51 - 24:35</p>
            <div className="highlight-text">
              <p>
                <strong>On Seamless Communications Protocols:</strong>
              </p>
              <p>Discussion of seamless communication protocols - very close to what FynCom is building.</p>

              <p>
                <strong>On Transfer of Trust (24:30 - 25:05):</strong>
              </p>
              <p>The concept of "Transfer of Trust" between agents, highlighting the critical need for trust mechanisms in AI-to-AI communications.</p>

              <p>
                <strong>On Agent Swarms (21:46 - 22:46):</strong>
              </p>
              <p>Discussion of agent swarms and the challenges of maintaining trust and preventing abuse in automated systems.</p>
            </div>
          </div>
        </section>

        <section className="mention-section">
          <h2>On AI-Powered Social Engineering</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/H90HY-lGraw?start=1093"
              title="Jeffrey Katzenberg on Cybersecurity"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mention-content">
            <h3>Jeffrey Katzenberg on 2024 Election, Cybersecurity and New Health Venture</h3>
            <p className="timestamp">18:13 - 19:00</p>
            <div className="highlight-text">
              <p>
                Katzenberg discusses AI that can imitate tone of voice and emails, targeting elderly individuals. He emphasizes that once attackers get through
                the door, it's over - making a strong case for preventive measures like financial filters that FynCom has built.
              </p>
            </div>
          </div>
        </section>

        <section className="mention-section">
          <h2>On AI Manipulation and Phishing</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/xjH2B_sE_RQ?start=3560"
              title="Yudkowsky and Wolfram on AI Risks"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mention-content">
            <h3>Yudkowsky and Wolfram on AI Risks</h3>
            <p className="timestamp">59:20 - 60:30</p>
            <div className="conversation-format">
              <div className="exchange">
                <h4>On the General Concern of LLMs "Hacking Humans"</h4>
                <p>
                  <strong>Stephen Wolfram:</strong> "Doing things which are hacking humans to get humans to believe all kinds of things."
                </p>
                <p>
                  <strong>Eli Yudkowsky:</strong> "Yeah, I'd say it's kind of borderline. It's not clear that the large language models are getting better at it
                  than average humans or better at it than the best humans."
                </p>
              </div>

              <div className="exchange">
                <h4>On LLM Capabilities in Phishing and Scalable Exploitation</h4>
                <p>
                  <strong>Stephen Wolfram:</strong> "Doing things which are hacking humans to get humans to believe all kinds of things."
                </p>
                <p>
                  <strong>Eli Yudkowsky:</strong> "I mean, they're good at phishing, unfortunately. And humans are not very good at not being phished. What they
                  are is they're cheaper at phishing. They can phish everyone and see who's most vulnerable. Much more cheaply than you can get a human to call
                  up everyone on the planet."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mention-section">
          <h2>On AI Agents and Economic Models</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/RXjLGn14Jo4?start=2880"
              title="Stanford ECON295/CS323 - Reid Hoffman"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mention-content">
            <h3>Stanford ECON295/CS323 - Business of AI, Reid Hoffman</h3>
            <p className="timestamp">48:10 - 49:30</p>
            <div className="conversation-format">
              <div className="exchange">
                <h4>On Communication Vulnerabilities</h4>
                <p>
                  <strong>Reid Hoffman:</strong> Discusses how communications become vulnerable due to LLM spear-phishing capabilities.
                </p>
              </div>

              <div className="exchange">
                <h4>On Personal AI Agents (39:48 - 41:10)</h4>
                <p>
                  <strong>Reid Hoffman:</strong> "The AI agent that works for us to maximize what we want." He discusses how AI agents could minimize
                  traditional advertising revenue models by handling financial transactions directly between users and businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mention-section">
          <h2>On Infinite Spam and Hyperpersonalization</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/YcObLyRM15U?start=1805"
              title="Great VC Debate: Slow Ventures vs Greylock"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mention-content">
            <h3>Great VC Debate: Slow Ventures vs Greylock</h3>
            <p className="timestamp">30:05 - 30:50</p>
            <div className="highlight-text">
              <p>
                Sam Lesin discusses using AI for hyperpersonalized outbound sales, leading to the concept of "infinite spam" where customized messages become
                meaningless because nothing is truly custom anymore. He notes how this makes the inbox worthless and spreads to other platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="mention-section">
          <h2>On Digital vs Human Hackers</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/Btos-LEYQ30?start=558"
              title="The Government Knows AGI is Coming"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mention-content">
            <h3>The Government Knows AGI is Coming | The Ezra Klein Show</h3>
            <p className="timestamp">09:18 - 11:22</p>
            <div className="highlight-text">
              <p>
                Ezra Klein discusses how the fear of human hackers gets overwhelmed by digital hackers. Ben Buchanan believes AI can help stop other AI through
                code, but falls into the same fallacy that technologists have relied on for decades - that pure code can stop hackers. The reality requires
                accounting for social engineering and financial resources.
              </p>
            </div>
          </div>
        </section>

        <section className="mention-section">
          <h2>On Crypto and Economic Prosperity</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/WCqzvo4bxJY?start=706"
              title="Next 3 years in Crypto - TOKEN 2049"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mention-content">
            <h3>Next 3 years in Crypto - TOKEN 2049</h3>
            <p className="timestamp">11:46 - 15:10</p>
            <div className="highlight-text">
              <p>
                Discussion about what people will invent with crypto and how it opens up previously unimaginable possibilities. Talks about how crypto can bring
                economic equality and increase global economic prosperity.
              </p>
              <p>
                <strong>Key insight:</strong> "In a future where marginal cost of storing and moving value goes to zero..." Previously, we saw the marginal cost
                of having a communications connection to someone go to zero.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Mentions
