import React, { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../components/mentions.css"
import Seo from "../components/seo"

const Mentions = () => {
  const [modalVideo, setModalVideo] = useState(null)
  const MENTION_INDEX = [
    {
      id: "ai-cybercrime-vibe-hacking",
      speaker: "Stuart Ritchie",
      co: "Jacob Klein, Alex Moix",
      topic: 'Anthropic - AI Cybercrime: "Vibe Hacking"',
      date: "Aug 27, 2025",
    },
    { id: "spam-filters-failure", speaker: "Andrej Karpathy", co: "", label: "Spam filters failure", date: "Aug 18, 2025" },
    { id: "shadow-economy-digital-scams", speaker: "Mariana Van Zeller", co: "Theo Von", topic: "Shadow economy & scams", date: "Aug 15, 2025" },
    { id: "ai-attention-economy", speaker: "Eric Schmidt", co: "Peter H. Diamandis", topic: "AI and the attention economy", date: "July 17, 2025" },
    {
      id: "media-manipulation-unreliable-narrators",
      speaker: "Balaji Srinivasan",
      co: "Erik Torenberg, a16z",
      topic: "Media manipulation",
      date: "July 17, 2025",
    },
    { id: "ai-agents-automated-calling", speaker: "Jack Altman", co: "Mamoon Hamid", topic: "AI agents and automated calling", date: "July 9, 2025" },
    { id: "digital-identity-trust", speaker: "Sam Lessin", co: "Joe Lonsdale", topic: "Digital identity & trust", date: "May 16, 2025" },
    { id: "communication-protocols", speaker: "David Daneshgar", co: "Higher Levels", topic: "Communication protocols", date: "May 12, 2025" },
    {
      id: "agent-communication-trust",
      speaker: "Konstantine Buhler",
      co: "Sequoia AI Ascent",
      topic: "Agent communication & trust transfer",
      date: "May 7, 2025",
    },
    { id: "infinite-spam-hyperpersonalization", speaker: "Sam Lessin", co: "TBPN", topic: "Infinite spam & hyperpersonalization", date: "Mar 17, 2025" },
    { id: "digital-vs-human-hackers", speaker: "Ezra Klein", co: "Ben Buchanan", topic: "Digital vs. human hackers", date: "Mar 4, 2025" },
    { id: "ai-manipulation-phishing", speaker: "Eli Yudkowsky", co: "Stephen Wolfram", topic: "AI manipulation & phishing", date: "Nov 11, 2024" },
    { id: "crypto-economic-prosperity", speaker: "Jeremy Allaire", co: "TOKEN 2049", topic: "Crypto & economic prosperity", date: "Sept 27, 2024" },
    { id: "ai-agents-economic-models", speaker: "Reid Hoffman", co: "Erik Brynjolfsson", topic: "AI agents and economic models", date: "Sept 5, 2024" },
    {
      id: "ai-powered-social-engineering",
      speaker: "Jeffrey Katzenberg",
      co: "WSJ's Emma Tucker, Sujay Jaswa",
      topic: "AI-powered social engineering",
      date: "Sept 25, 2023",
    },
  ]

  const openModal = videoData => {
    setModalVideo(videoData)
    document.body.style.overflow = "hidden" // Prevent background scrolling
  }

  const closeModal = () => {
    setModalVideo(null)
    document.body.style.overflow = "unset" // Restore scrolling
  }

  const VideoTrigger = ({ videoData, children }) => {
    // Check if video is embeddable or should open directly
    const isEmbeddable = videoData.isEmbeddable !== false

    const handleClick = () => {
      if (isEmbeddable) {
        openModal(videoData)
      } else {
        // Open YouTube video directly in new tab
        window.open(videoData.directUrl || videoData.embedUrl, "_blank")
      }
    }

    return (
      <button className="video-trigger" onClick={handleClick}>
        <div className="video-trigger-content">
          <div>
            <h3>{videoData.title}</h3>
            <p className="timestamp">{videoData.timestamp}</p>
          </div>
          <span className="play-icon">▶</span>
        </div>
      </button>
    )
  }

  const VideoModal = ({ video, isOpen, onClose }) => {
    if (!video) return null

    return (
      <div className={`video-modal ${isOpen ? "open" : ""}`} onClick={onClose}>
        <div className="video-modal-content" onClick={e => e.stopPropagation()}>
          <div className="video-modal-header">
            <h3>{video.title}</h3>
            <button className="close-modal" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="video-container">
            <iframe
              src={video.embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    )
  }

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
        {!!MENTION_INDEX.length && (
          <div className="mentions-index">
            <h3>Index</h3>
            <ul>
              {MENTION_INDEX.map(item => (
                <li key={item.id}>
                  {item.date ? <span className="date">{item.date} - </span> : null}
                  {item.speaker ? (
                    <span className="name">
                      {item.speaker}
                      {item.co ? ` - ${item.co} - ` : " - "}
                    </span>
                  ) : null}
                  <a href={`#${item.id}`}>{item.topic || item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <div className="mentions-container">
        {/* NEW SECTION: AI Cybercrime and Vibe Hacking */}
        <section className="mention-section" id="ai-cybercrime-vibe-hacking">
          <h2>Anthropic On AI Cybercrime and "Vibe Hacking"</h2>
          <VideoTrigger
            videoData={{
              title: "August 27th, 2025 - AI Cybercrime: Vibe Hacking",
              timestamp: "Watch ~2 minutes starting at 0:17",
              embedUrl: "https://www.youtube.com/embed/EsCNkDrIGCw?start=17",
            }}
          />
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>Lowering the Bar for Cybercrime:</strong> The concept of "vibe hacking" is introduced, describing how individuals no longer need
                technical skills to commit sophisticated cybercrime. Instead, they can use natural language prompts to direct AI to write malware, conduct
                social engineering, and execute complex hacks.
              </p>
              <p>
                <strong>Explosive Scale and Speed:</strong> The discussion highlights a case where a single actor using "vibe hacking" accomplished in weeks
                what would normally take a skilled team of cybercriminals months. This individual successfully targeted 17 organizations with data extortion,
                demonstrating a massive increase in the scale and speed of cyber threats.
              </p>
              <p>
                <strong>The Inevitability of AI-Powered Attacks:</strong> This scenario is a real-world example of the threats discussed by other leaders on
                this page. When AI makes it easy and cheap to "phish everyone," as Yudkowsky warned (see{" "}
                <a href="#ai-manipulation-phishing">ai-manipulation-phishing</a>), the volume of sophisticated attacks will skyrocket.
              </p>
              <p>
                <strong>FynCom's Economic Defense:</strong> This new reality proves that technical defenses and user education are not enough. The only way to
                counter a threat that operates at this scale is to disrupt its economic model. FynCom's refundable deposits create a necessary financial
                barrier, making it prohibitively expensive for "vibe hackers" to launch mass-scale attacks while ensuring that legitimate and important
                communications are prioritized.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Andrej Karpathy on Spam Filter Failure */}
        <section className="mention-section" id="spam-filters-failure">
          <h2>On the Failure of Modern Spam Filters</h2>
          {/* This is a styled link to the tweet, not a video trigger */}
          <a
            href="https://x.com/karpathy/status/1957574489358873054?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="tweet-trigger" // You can style this class to look like your video triggers
          >
            <div className="tweet-trigger-content">
              <div>
                <h3>Andrej Karpathy (OpenAI Co-founder) on Spam</h3>
                <p className="timestamp">Read the X Post from August 2025</p>
              </div>
              <span className="play-icon">🔗</span>
            </div>
          </a>
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>An Expert's Frustration:</strong> Andrej Karpathy, a co-founder of OpenAI and one of the world's leading AI experts, publicly shared his
                inability to stop a daily barrage of spam calls and texts. He highlights a critical failure: despite using every tool available, like
                carrier-level blockers (AT&T Active Armor), government lists (Do Not Call), and OS features (iOS "Silence Unknown Callers"); the unwanted
                communications still get through.
              </p>
              <p>
                <strong>Why Existing Systems Fail:</strong> Karpathy points out the core technical problem: spammers use new, unique numbers for every attempt,
                making the strategy of "blocking" completely obsolete. His experience proves that the current approach of filtering by identity or reputation is
                a fundamentally broken game of cat-and-mouse.
              </p>
              <p>
                <strong>The FynCom Solution: An Economic Firewall:</strong> This is a powerful, real-world validation of FynCom's mission. Karpathy's problem
                isn't a lack of technical savvy; it's a systemic failure that can't be solved with more of the same technology. The only effective solution is
                to change the economics. FynCom's refundable deposit system creates a financial barrier that makes the high-volume, low-margin business of spam
                economically impossible, solving the problem at its root.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Shadow Economy and Digital Scams */}
        <section className="mention-section" id="shadow-economy-digital-scams">
          <h2>On the Scale of the Shadow Economy and Digital Scams</h2>
          <VideoTrigger
            videoData={{
              title: "Mariana Van Zeller on the Global Black & Gray Markets",
              timestamp: "Watch 1.5 minutes starting at 51:06",
              embedUrl: "https://www.youtube.com/embed/6J4U3R5dRik?start=3066",
            }}
          />
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>The Staggering Scale:</strong> Mariana Van Zeller reveals a shocking statistic: <strong>38% of the global economy</strong> comprises
                black and gray markets. This "hidden third" includes everything from illegal drug trades to unregulated street vendors.
              </p>
              <p>
                <strong>The Exploding Scam Industry:</strong> Within this shadow economy, scams are a rapidly growing sector. Van Zeller notes that last year
                alone, Americans lost **$12.5 billion** to scams, an industry that has been "doubling and doubling" each year. This highlights the immense
                financial incentive for scammers.
              </p>
              <p>
                <strong>The FynCom Solution:</strong> This discussion powerfully underscores the need for FynCom. The digital scam industry thrives because of
                the low cost of communication. By introducing a financial cost to initiate contact, FynCom directly attacks the business model of scammers,
                making mass-scale fraud economically unsustainable and protecting consumers from this massive, growing threat.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Eric Schmidt on AI and Attention */}
        <section className="mention-section" id="ai-attention-economy">
          <h2>On AI, the Attention Economy, and Human Purpose</h2>
          <VideoTrigger
            videoData={{
              title: "Eric Schmidt on AI's Role in a World of Misinformation",
              timestamp: "Watch ~1.5 minutes starting at 1:19:20",
              embedUrl: "https://www.youtube.com/embed/qaPHK1fJL5s?start=4760",
            }}
          />
          <div className="mention-content">
            <div className="conversation-format">
              <div className="exchange">
                <h4>Managing Attention as a "Full-Time Job"</h4>
                <p>
                  <strong>Eric Schmidt:</strong> Predicts that in the near future, simply "managing the world around you" will become a purposeful, full-time
                  job. This is due to a constant barrage of misinformation, scams, and deceptive actors all competing for your attention and money.
                </p>
              </div>
              <div className="exchange">
                <h4>AI as a Productivity Tool, Not a Replacement</h4>
                <p>
                  He refutes the utopian notion that AI will lead to a world where everyone is "sitting around doing poetry." Instead, he argues AI's primary
                  role is to make existing jobs more productive. Schmidt stresses that technology changes, but human nature does not; there will always be "evil
                  people" using tools for malicious purposes and "good people" trying to stop them.
                </p>
              </div>
              <div className="exchange">
                <h4>The FynCom Connection: Automating the Attention Filter</h4>
                <p>
                  Schmidt's vision perfectly articulates the problem FynCom solves. His "full-time job" of managing attention is precisely what FynCom's
                  economic filter automates. It acts as a powerful deterrent against the "evil people" and their attempts to deceive, as they are economically
                  disincentivized from sending mass unsolicited messages. This ensures that only legitimate, important communications from the "good people" can
                  get through, preserving the user's most valuable asset: their attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Media Manipulation (Corrected) */}
        <section className="mention-section" id="media-manipulation-unreliable-narrators">
          <h2>On Media Manipulation and Unreliable Narrators</h2>
          <VideoTrigger
            videoData={{
              title: "Balaji Srinivasan on Media as Unreliable Narrators",
              timestamp: "Watch ~2.5 minutes starting at 16:53",
              embedUrl: "https://www.youtube.com/embed/cBFbXRjTVLc?start=1013",
            }}
          />
          <div className="mention-content">
            <div className="conversation-format">
              <div className="exchange">
                <h4>Journalism as a Non-Consensual Act</h4>
                <p>
                  <strong>Balaji Srinivasan:</strong> Defines legacy media as the <strong>"non-consensual invasion of privacy for profit."</strong> He argues to
                  a16z's Erik Torenberg, that individuals cannot opt out of being targeted and equates modern journalistic tactics with spamming, stalking, and
                  scamming; actions for which we have legal protections in other contexts.
                </p>
              </div>
              <div className="exchange">
                <h4>Media as Untrustworthy "Con Men"</h4>
                <p>
                  He describes journalists as "con men" who feign trust and goodwill to extract a quote, only to twist the words to "stab you in the article."
                  This refutes the notion that media corporations are neutral "referees," recasting them as profit-driven entities that manipulate narratives.
                </p>
              </div>
              <div className="exchange">
                <h4>The FynCom Connection: Restoring Consent Through Economics</h4>
                <p>
                  This perspective perfectly frames the problem FynCom solves. When communication channels are filled with manipulative actors, trust collapses.
                  Inspired by pioneers in financial communications like Balaji himself (whose company Earn.com validated this model), FynCom restores trust and
                  consent. By requiring a refundable financial stake to initiate contact - AND true to earn.com's original spirit - allows a form of continued
                  payment per minute or per response. FynCom's tech provides an objective, economic signal of a communication's importance, allowing people to
                  instantly differentiate genuine outreach from the "stalkers, spammers, the scammers" that Balaji describes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#ai-agents-automated-calling */}
        <section className="mention-section" id="ai-agents-automated-calling">
          <h2>On AI Agents and Automated Calling</h2>
          <VideoTrigger
            videoData={{
              title: "Jack Altman & Mamoon Hamid on AI Investment Opportunities",
              timestamp: "Watch 2 minutes starting at 26:21",
              embedUrl: "https://www.youtube.com/embed/PzEzKbsAp5E?start=1581",
            }}
          />
          <div className="mention-content">
            <div className="conversation-format">
              <div className="exchange">
                <h4>On AI Agents Performing Human Jobs</h4>
                <p>
                  <strong>Mamoon Hamid (Kleiner Perkins):</strong> Discusses how AI agents can now autonomously perform jobs traditionally done by skilled
                  workers like nurses. He specifically highlights autonomous agents that make "thousands of phone calls" to patients for pre-op conversations,
                  wellness checks, and post-op follow-ups.
                </p>
              </div>

              <div className="exchange">
                <h4>The Uniquely AI Advantage: Timing and Persistence</h4>
                <p>
                  <strong>Key Insight:</strong> Hamid explains that AI can succeed where humans struggle. Patients often prefer calls at specific times ("8am to
                  9am... or 5pm to 6pm"), which is hard to schedule for a human nurse. However, an AI agent can be instructed to "call only those hours."
                </p>
                <p>
                  <strong>He continues with a critical point:</strong> "AI will never give up... those calls today are probably made, they go to voicemail, and
                  then you don't do a follow-up because you just don't have enough humans to make those follow-up phone calls."
                </p>
              </div>

              <div className="exchange">
                <h4>The Double-Edged Sword of "Abundance Through AI"</h4>
                <p>
                  <strong>The Promise:</strong> Hamid describes creating "abundance through AI" where automated systems can make unlimited calls at optimal
                  times, theoretically improving healthcare outcomes.
                </p>
                <p>
                  <strong>The Peril:</strong> This vision reveals a critical challenge. When AI agents can make unlimited calls and "never give up," how do we
                  distinguish between beneficial automated calls (like a healthcare follow-up) and the inevitable explosion of harmful ones (spam, scams, and
                  unwanted solicitations)?
                </p>
              </div>

              <div className="exchange">
                <h4>The FynCom Connection: Enabling Trust in an Automated World</h4>
                <p>
                  This discussion perfectly illustrates why FynCom's economic filtering approach is essential for the future of communication. As AI agents
                  become capable of making "thousands of phone calls" that "never give up," a new layer of trust is required.
                </p>
                <p>
                  <strong>Economic Differentiation:</strong> FynCom provides this layer. Legitimate organizations like healthcare systems can afford small,
                  refundable deposits for important patient calls. In contrast, spammers and scammers cannot afford to pay for mass automated campaigns. This
                  simple economic principle enables the beneficial use of AI calling that Hamid describes while blocking the harmful automated calls that will
                  otherwise plague consumers.
                </p>
                <p>
                  <strong>Trust Through Economics:</strong> When your doctor's office or a legitimate business calls you through FynCom, you instantly know it's
                  important because they have placed a financial deposit behind the call. When a scammer tries, they're blocked, and the enterprise protects its
                  brand reputation by not being associated with spam. This is how we harness the power of AI communication while protecting users and
                  enterprises from its potential for misuse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#agent-communication-trust */}
        <section className="mention-section" id="agent-communication-trust">
          <h2>On Agent Communication and Trust Transfer</h2>
          <VideoTrigger
            videoData={{
              title: "AI's Trillion Dollar Opportunity: Sequoia AI Ascent 2025",
              timestamp: "Watch 4.5 minutes starting at 21:46",
              embedUrl: "https://www.youtube.com/embed/v9JBMnxuPX8?start=1431",
            }}
          />
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline", color: "var(--fyncom-blue)" }}
                    onClick={() =>
                      openModal({
                        title: "Seamless Communications Protocols (23:51-24:35)",
                        timestamp: "Watch from 23:51",
                        embedUrl: "https://www.youtube.com/embed/v9JBMnxuPX8?start=1431",
                      })
                    }
                  >
                    Seamless Communications Protocols (23:51-24:35)
                  </span>
                  :
                </strong>{" "}
                The discussion of seamless communication protocols is remarkably close to what FynCom is building. The speakers recognize that future AI systems
                will need robust communication frameworks that can handle trust, verification, and value transfer.
              </p>
              <p>
                <strong>
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline", color: "var(--fyncom-blue)" }}
                    onClick={() =>
                      openModal({
                        title: "Transfer of Trust (24:30-25:05)",
                        timestamp: "Watch from 24:30",
                        embedUrl: "https://www.youtube.com/embed/v9JBMnxuPX8?start=1470",
                      })
                    }
                  >
                    Transfer of Trust (24:30-25:05)
                  </span>
                  :
                </strong>{" "}
                This segment introduces the critical concept of "Transfer of Trust" between AI agents. As AI systems become more autonomous, they'll need
                mechanisms to establish and transfer trust - exactly what FynCom's refundable deposits enable in digital communications.
              </p>
              <p>
                <strong>
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline", color: "var(--fyncom-blue)" }}
                    onClick={() =>
                      openModal({
                        title: "Agent Swarms and Trust Networks (21:46-22:46)",
                        timestamp: "Watch from 21:46",
                        embedUrl: "https://www.youtube.com/embed/v9JBMnxuPX8?start=1306",
                      })
                    }
                  >
                    Agent Swarms and Trust Networks (21:46-22:46)
                  </span>
                  :
                </strong>{" "}
                The discussion of agent swarms reveals the complexity of maintaining trust in automated systems. When multiple AI agents interact, traditional
                security measures become insufficient, requiring economic incentives like those provided by FynCom's technology.
              </p>
              <p>
                <strong>Stochastic Challenges:</strong> The speakers note that the stochastic approach of agents creates additional challenges for typical spam
                prevention techniques, highlighting the need for solutions insensitive to content analysis and pattern detection. A financial filter that uses
                zero-fee currency
              </p>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#ai-agents-economic-models */}
        <section className="mention-section" id="ai-agents-economic-models">
          <h2>On AI Agents and Economic Models</h2>
          <VideoTrigger
            videoData={{
              title: "Stanford ECON295/CS323 - Business of AI, Reid Hoffman",
              timestamp: "Watch 1.5 minutes starting at 39:48-41:10 again at 48:10-49:30",
              embedUrl: "https://www.youtube.com/embed/RXjLGn14Jo4?start=2880",
              directUrl: "https://www.youtube.com/watch?v=RXjLGn14Jo4&t=2880s",
              isEmbeddable: false,
            }}
          />
          <div className="mention-content">
            <div className="conversation-format">
              <div className="exchange">
                <h4>On Communication Vulnerabilities (48:10-49:30)</h4>
                <p>
                  <strong>Reid Hoffman:</strong> Discusses an example of AI creating harm at a societal scale. Discusses how communications become increasingly
                  vulnerable due to LLM spear-phishing capabilities. The sophistication of AI-generated personalized attacks makes traditional security measures
                  insufficient.
                </p>
              </div>

              <div className="exchange">
                <h4>On Personal AI Agents and Economic Disruption (39:48-41:10)</h4>
                <p>
                  <strong>Reid Hoffman:</strong> "The AI agent that works for us to maximize what we want." He discusses how AI agents could fundamentally
                  disrupt traditional advertising revenue models by handling financial transactions directly between users and businesses.
                </p>
                <p>
                  This vision aligns perfectly with FynCom's technology, which enables direct economic relationships in communications, bypassing traditional
                  advertising-based models that often conflict with user interests.
                </p>
              </div>

              <div className="exchange">
                <h4>Economic Alignment and Trust</h4>
                <p>
                  Hoffman's insights reveal a future where AI agents need economic mechanisms to align with user interests rather than advertiser interests.
                  FynCom's refundable deposits provide exactly this kind of economic alignment in communications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#digital-identity-trust */}
        <section className="mention-section" id="digital-identity-trust">
          <h2>On Digital Identity and Trust</h2>
          <VideoTrigger
            videoData={{
              title: "The Truth About AI: Sam Lessin's Contrarian Take",
              timestamp: "Watch ~3 minutes starting at 10:15",
              embedUrl: "https://www.youtube.com/watch?v=R_aHzJGrBN0&t=615s",
              directUrl: "https://www.youtube.com/watch?v=R_aHzJGrBN0&t=615s",
              isEmbeddable: false,
            }}
          />
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>The Identity Crisis of the Open Internet:</strong> Joe starts by asking Sam about Sam's role in online identity, leading to a discussion
                about a friend working on anti-fraud in Africa. This conversation reveals a fundamental truth: the open internet brought unprecedented
                connectivity, but at the cost of identity verification and trust.
              </p>
              <p>
                <strong>The Trust Deficit:</strong> The discussion centers on how the lack of identity verification mechanisms has created a trust vacuum in
                digital communications. This is precisely the problem FynCom's refundable deposits technology addresses - creating economic incentives that
                restore trust between unknown parties.
              </p>
              <p>
                <strong>Real-World Impact:</strong> The anti-fraud work in Africa mentioned in the conversation highlights how identity and trust issues aren't
                just theoretical - they have real economic and social consequences, particularly in developing markets where digital trust is crucial for
                economic participation.
              </p>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#communication-protocols */}
        <section className="mention-section" id="communication-protocols">
          <h2>On Communication Protocols</h2>
          <VideoTrigger
            videoData={{
              title: "Bootstrapping an AI Company to $5M ARR - Whippy CEO David Daneshgar",
              timestamp: "Watch 40s starting at 26:47",
              embedUrl: "https://www.youtube.com/watch?v=OWNppXSQOlA&t=1607s",
              directUrl: "https://www.youtube.com/watch?v=OWNppXSQOlA&t=1607s",
              isEmbeddable: false,
            }}
          />
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>AI as Daily Business Tool:</strong> Daneshgar discusses how he uses AI on a daily basis for business operations, and mentions how his
                sales teams leverage AI automation for their outreach and customer engagement processes.
              </p>
              <p>
                <strong>The Personal Experience of Being Targeted:</strong> In an offhand but revealing comment, Daneshgar shares his personal experience of
                being on the receiving end of this same personalized automation technology. He's becoming increasingly jaded by the constant stream of
                AI-generated, personalized messages he receives.
              </p>
              <p>
                <strong>The Irony of Automation:</strong> This creates a fascinating irony - the same CEO who uses AI to automate customer communications is
                himself growing tired of receiving automated communications, even when they're personalized. This validates the fundamental problem FynCom
                solves: when everyone uses AI for outreach, the value of communication itself degrades.
              </p>
              <p>
                <strong>Scaling the Problem:</strong> Daneshgar's experience highlights how AI doesn't just enable better communication - it enables infinite
                communication, which paradoxically makes each individual message less valuable and more tiresome, regardless of personalization.
              </p>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#ai-powered-social-engineering */}
        <section className="mention-section" id="ai-powered-social-engineering">
          <h2>On AI-Powered Social Engineering</h2>
          <VideoTrigger
            videoData={{
              title: "Jeffrey Katzenberg on 2024 Election, Cybersecurity and New Health Venture",
              timestamp: "Watch 1 minute starting at 18:13",
              embedUrl: "https://www.youtube.com/embed/H90HY-lGraw?start=1100",
            }}
          />
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>AI Voice and Email Impersonation:</strong> Katzenberg discusses sophisticated AI systems that can imitate tone of voice and writing
                style in emails, specifically targeting vulnerable populations like elderly individuals. This represents a new frontier in social engineering
                attacks.
              </p>
              <p>
                <strong>The "Door" Analogy:</strong> Katzenberg emphasizes that "once attackers get through the door, it's over," making a compelling case for
                preventive measures. This perfectly illustrates why FynCom's approach of creating a financial barrier at the communication entry point is so
                crucial.
              </p>
              <p>
                <strong>Delegation and Filtering:</strong> The discussion touches on delegation strategies where younger people handle unknown communications
                for elderly relatives. FynCom's financial filters provide a more systematic and scalable solution to this problem. Honestly, could you imagine
                having to handle your parents and grandprent's emails / texts / calls / socil DMs on top of your own? FynCom Filters are the solution.
              </p>
              <p>
                <strong>Economic Defense:</strong> The conversation implicitly supports the idea that financial barriers are among the most effective defenses
                against automated attacks, as they make mass targeting economically unfeasible for attackers.
              </p>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#ai-manipulation-phishing */}
        <section className="mention-section" id="ai-manipulation-phishing">
          <h2>On AI Manipulation and Phishing</h2>
          <VideoTrigger
            videoData={{
              title: "Yudkowsky and Wolfram on AI Risks",
              timestamp: "Watch 1 minute starting at 59:20",
              embedUrl: "https://www.youtube.com/embed/xjH2B_sE_RQ?start=3560",
            }}
          />
          <div className="mention-content">
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
                  <strong>Stephen Wolfram:</strong> "They're good at phising, unfortunately; and humans are not very good at not being phished."
                </p>
                <p>
                  <strong>Eli Yudkowsky:</strong> "What they are is they're cheaper at phishing. They can phish everyone and see who's most vulnerable. Much
                  more cheaply than you can get a human to call up everyone on the planet."
                </p>
              </div>

              <div className="exchange">
                <h4>Key Insight: Scale vs. Sophistication</h4>
                <p>
                  The critical insight from this exchange is that AI's advantage in phishing isn't necessarily sophistication - it's{" "}
                  <strong>scale and cost-effectiveness</strong>. AI can attempt to phish everyone simultaneously and identify the most vulnerable targets,
                  something impossible for human attackers due to cost constraints.
                </p>
                <p>
                  This perfectly validates FynCom's approach: by introducing economic friction through refundable deposits, we make mass automated attacks
                  economically unfeasible while allowing legitimate communications to proceed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#infinite-spam-hyperpersonalization */}
        <section className="mention-section" id="infinite-spam-hyperpersonalization">
          <h2>On Infinite Spam and Hyperpersonalization</h2>
          <VideoTrigger
            videoData={{
              title: "Great VC Debate: Slow Ventures vs Greylock",
              timestamp: "Watch 45 seconds starting at 30:05",
              embedUrl: "https://www.youtube.com/embed/YcObLyRM15U?start=1805",
            }}
          />
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>The Paradox of Hyperpersonalization:</strong> Sam Lesin discusses using AI for hyperpersonalized outbound sales, leading to the concept
                of "infinite spam" where customized messages become meaningless because nothing is truly custom anymore.
              </p>
              <p>
                <strong>The Worthless Inbox:</strong> Lesin notes how this trend makes the inbox worthless - when every message appears personalized but is
                actually automated, recipients lose the ability to distinguish genuine communications from spam.
              </p>
              <p>
                <strong>Platform Spread:</strong> What Lesin didn't get to mention is that this spam spreads beyond email to other platforms - social media,
                messaging apps, and any communication channel becomes vulnerable to the same hyperpersonalized automation.
              </p>
              <p>
                <strong>FynCom's Solution:</strong> This scenario perfectly illustrates why economic barriers are necessary. When sending messages has a cost
                (even if refundable for legitimate communications), it becomes economically impossible to send "infinite spam" regardless of how personalized it
                appears.
              </p>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#digital-vs-human-hackers */}
        <section className="mention-section" id="digital-vs-human-hackers">
          <h2>On Digital vs Human Hackers</h2>
          <VideoTrigger
            videoData={{
              title: "The Government Knows AGI is Coming | The Ezra Klein Show",
              timestamp: "Watch 2 minutes starting at 09:18",
              embedUrl: "https://www.youtube.com/embed/Btos-LEYQ30?start=558",
            }}
          />
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>The Scale Problem:</strong> Ezra Klein discusses how the fear of human hackers gets overwhelmed by digital hackers. The sheer scale at
                which AI can operate makes traditional human-scale security measures inadequate.
              </p>
              <p>
                <strong>The Code Fallacy:</strong> Ben Buchanan believes AI can help stop other AI through code, but this falls into the same fallacy that
                technologists have relied on for decades - that pure code can stop hackers.
              </p>
              <p>
                <strong>Beyond Technical Solutions:</strong> The reality requires accounting for social engineering and financial resources that can be gained
                through successful attacks. Technical solutions alone are insufficient when attackers can leverage human psychology and economic incentives.
              </p>
              <p>
                <strong>Holistic Defense:</strong> This conversation supports FynCom's approach of combining technical filtering with economic incentives,
                addressing both the technical and human elements of digital security.
              </p>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#crypto-economic-prosperity */}
        <section className="mention-section" id="crypto-economic-prosperity">
          <h2>On Crypto and Economic Prosperity</h2>
          <VideoTrigger
            videoData={{
              title: "Next 3 years in Crypto - TOKEN 2049",
              timestamp: "Watch 3.5 minutes starting at 11:46",
              embedUrl: "https://www.youtube.com/embed/WCqzvo4bxJY?start=706",
            }}
          />
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>Unlocking Innovation:</strong> The discussion explores what people will invent with crypto and how it opens up previously unimaginable
                possibilities. This technological foundation enables new economic models like FynCom's refundable deposits.
              </p>
              <p>
                <strong>Economic Equality Through Technology:</strong> The conversation touches on how crypto can bring economic equality and increase global
                economic prosperity by reducing barriers to financial participation.
              </p>
              <p>
                <strong>Zero Marginal Cost Evolution:</strong> The key insight: "In a future where marginal cost of storing and moving value goes to zero..."
                This parallels how we previously saw the marginal cost of communications go to zero, which created the spam problem FynCom solves.
              </p>
              <p>
                <strong>The Next Phase:</strong> Just as zero-cost communication enabled global connectivity but created trust problems, zero-cost value
                transfer enables new economic models but requires new trust mechanisms - exactly what FynCom provides.
              </p>
            </div>
          </div>
        </section>

        {/* Link: https://fyncom.com/mentions#job-scam-surge-2024 */}
        <section className="mention-section" id="job-scam-surge-2024">
          <h2>On the 2024 Job Scam Text Surge</h2>
          <div className="mention-content">
            <div className="highlight-text">
              <p>
                <strong>The Predictions Come True:</strong> In January 2025, the{" "}
                <a href="https://www.linkedin.com/news/story/scam-job-texts-poised-to-multiply-7392058/" target="_blank" rel="noopener noreferrer">
                  Federal Trade Commission and LinkedIn reported
                </a>{" "}
                that Americans lost <strong>$470 million</strong> to text scams in 2024, with job scam texts ranking as the{" "}
                <strong>second most common type of hoax</strong>. This validates every prediction made by the industry leaders featured above.
              </p>
              <p>
                <strong>AI-Powered Scale:</strong> Just as Yudkowsky predicted, AI isn't necessarily better at phishing than humans; it's simply "cheaper at
                phishing" and can "phish everyone and see who's most vulnerable" at unprecedented scale. Job scammers are now using AI to send millions of
                personalized fake job offers for pennies.
              </p>
              <p>
                <strong>The Infinite Spam Reality:</strong> Sam Lessin's concept of "infinite spam" has materialized exactly as described. AI enables unlimited
                personalized job scam texts that appear custom but are actually automated, making each victim feel specially targeted while the scammer blasts
                millions simultaneously.
              </p>
              <p>
                <strong>Economic Desperation Exploitation:</strong> The combination of a rocky labor market and sophisticated AI targeting has created the
                perfect storm. Gen Z job seekers; despite being digital natives, are particularly vulnerable to these AI-generated, hyper-personalized scams.
              </p>
              <p>
                <strong>The Solution Was Always Economic:</strong> Traditional security measures (content filtering, number blocking, user education) continue
                to fail because they don't address the root cause: zero marginal cost of communication. FynCom's refundable deposit approach makes mass scamming
                economically impossible, exactly what this crisis demands.
              </p>
              <p>
                <strong>
                  Read our detailed analysis:{" "}
                  <a href="/blog/job-scam-texts-surge-2024" style={{ textDecoration: "underline", color: "var(--fyncom-blue)" }}>
                    "Job Scam Texts Cost Americans $470M in 2024 - Here's the Economic Solution"
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </section>
      </div>

      <VideoModal video={modalVideo} isOpen={!!modalVideo} onClose={closeModal} />

      <Footer />
    </div>
  )
}

export default Mentions
