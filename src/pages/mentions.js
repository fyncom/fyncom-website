import React from "react"
import "../components/blog.css"
import "../components/markdown.css"
import { Wrapper } from "../components/Markdown-Wrapper"

const mentions = [
  {
    title: "Day One Solana Investor: Why AI is Overhyped. Joe Sam Lesin & Joe Lonsdale",
    url: "https://www.youtube.com/watch?v=",
    start: 900,
    end: 1080,
    summary:
      "Joe starts by asking Sam about Sam's role in online identity and then... also mentions something about how he had a friend who was working on anti-fraud in Africa. Talks about how the open internet brought lots of issues due to the new lack of Identity.",
    videoId: "",
    quotes: [],
  },
  {
    title: "Bootstrappng an AI Company to $5M ARR Whippy CEO David Daneshgar",
    url: "https://www.youtube.com/watch?v=",
    start: 1414,
    end: 1630,
    summary:
      "The guy talks about communication protocols at a higher level. Like it's spot on with the future thoughts / experience that should be expected. It's the best video out of all of these...",
    videoId: "",
    quotes: [],
  },
  {
    title: "AI's Trillion Dollar Opportunity: Sequoia AI Ascent 2025 keynote",
    url: "https://www.youtube.com/watch?v=v9JBMnxuPX8",
    highlights: [
      {
        label: "Transfer of Trust",
        start: 1470,
        end: 1505,
        summary: "Trust between agents.",
      },
      {
        label: "Seamless Communications Protocols",
        start: 1431,
        end: 1475,
        summary: "Very close to what we're doing.",
      },
      {
        label: "Agent Swarms",
        start: 1306,
        end: 1366,
        summary: '"Transfer of Trust"',
      },
    ],
    videoId: "v9JBMnxuPX8",
    quotes: [],
  },
  {
    title: "Jeffrey Katzenberg on 2024 Election, Cybersecurity and New Health Venture WSJ News",
    url: "https://www.youtube.com/watch?v=H90HY-lGraw",
    start: 1093,
    end: 1140,
    summary:
      "Refers 2 AI that imitate her tone of voice and emails to her elderly mother and D code guest, suggested delegation so that a younger person get all of the unwanted or a rather unknown email. Once the attackers get through the door it's over, so it's best to make a great door and that's the financial filter we've built.",
    videoId: "H90HY-lGraw",
    quotes: [],
  },
  {
    title: "Yudkowsky and wolfram on ai risks",
    url: "https://www.youtube.com/watch?v=xjH2B_sE_RQ",
    start: 3560,
    end: 3630,
    summary:
      "Yud says something about AI is convincing people to give all their money and then Wolf Ram. Mentioned that some total phishing is like they see happen if there's nothing that can be done to stop it. Wolfram says 'they're good at phishing and humans are not good at not being phished.'",
    videoId: "xjH2B_sE_RQ",
    quotes: [
      {
        q: "they're good at phishing and humans are not good at not being phished.",
        by: "Wolfram",
      },
    ],
  },
  {
    title: "Stanford ECON295/CS323 I 2024 I Business of AI, Reid Hoffman",
    url: "https://www.youtube.com/watch?v=RXjLGn14Jo4",
    highlights: [
      {
        label: "Spearphishing and LLMs",
        start: 2880,
        end: 2970,
        summary: "Talks about how communications is vulnerable due to LLM spearphishing.",
      },
      {
        label: "AI agent for user interests",
        start: 2388,
        end: 2470,
        summary:
          "The AI agent that 'works for us to maximize what we want'. He also talks about the ability for advertising revenue model to be minimized since the AI agent would be handling $$ between the user and the business.",
      },
    ],
    videoId: "RXjLGn14Jo4",
    quotes: [],
  },
  {
    title: "Next 3 years in Crypto - TOKEN 2049",
    url: "https://youtu.be/WCqzvo4bxJY",
    start: 706,
    end: 910,
    summary:
      "Interested in what people are going to invent with crypto - talks about how it opens up previously unimaginable things. Talks about how crypto can bring economic equality? Increasing global economic prosperity. In a future where 'Marginal cost of storing and moving value goes to zero…' Previously, we saw marginal cost of having a communications connection to someone zero…",
    videoId: "WCqzvo4bxJY",
    quotes: [],
  },
  {
    title: "Great VC debate Slow Venture vs Greylock",
    url: "https://youtu.be/YcObLyRM15U",
    start: 1805,
    end: 1850,
    summary:
      "Sam Lesin talks about the using AI to customize outbound sales for hyperpersonalization. Then he talks about how the inbox becomes worthless at that point. Customized Sales Messages = nothing is custom. 'Infinite Spam'. What Sam didn't get to mention… is that this spam spreads to other platforms.",
    videoId: "YcObLyRM15U",
    quotes: [],
  },
  {
    title: "The Government Knows AGI is Coming | The Ezra Klein Show",
    url: "https://youtu.be/Btos-LEYQ30",
    start: 558,
    end: 682,
    summary:
      "Ezra talks about how the fear of human hackers gets overwhelmed by digital hackers - Ben Buchanan talks about how he believes AI will be able to help stop other AI through just code, but he fails right into the same fallacy that technologists have relied on decades - that pure code can stop hackers, but you need more than that to account for the social engineering and financial resources that can be gained. Hacking issues for everyday people will include.",
    videoId: "Btos-LEYQ30",
    quotes: [],
  },
]

const getYouTubeEmbedUrl = (videoId, start) => `https://www.youtube.com/embed/${videoId}?start=${start}`

const Mentions = () => {
  const seo = {
    title: "Mentions",
    description: "Highlights and mentions of FynCom and its concepts by thought leaders, with video highlights and summaries.",
  }
  return (
    <Wrapper seo={seo}>
      <section className="mission-section">
        <h1>Mentions</h1>
        <sub>
          This page highlights specific sections of YouTube videos where FynCom or its core concepts are discussed by industry leaders. Each section includes a
          summary and a direct link to the relevant video moment.
        </sub>
      </section>
      <div style={{ marginTop: 20 }}>
        {mentions.map((item, idx) => (
          <div className="blog-item" key={idx} style={{ marginBottom: 24 }}>
            <h2>{item.title}</h2>
            {item.highlights ? (
              item.highlights.map((hl, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <a href={`${item.url}?t=${hl.start}`} target="_blank" rel="noopener noreferrer" className="text-link-button">
                    {hl.label} ({new Date(hl.start * 1000).toISOString().substr(11, 8)})
                  </a>
                  <div>{hl.summary}</div>
                  <div className="video" style={{ maxWidth: 560, marginTop: 8 }}>
                    <iframe
                      className="video"
                      src={getYouTubeEmbedUrl(item.videoId, hl.start)}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))
            ) : (
              <>
                <a href={`${item.url}?t=${item.start}`} target="_blank" rel="noopener noreferrer" className="text-link-button">
                  Watch from {new Date(item.start * 1000).toISOString().substr(11, 8)}
                </a>
                <div>{item.summary}</div>
                <div className="video" style={{ maxWidth: 560, marginTop: 8 }}>
                  <iframe
                    className="video"
                    src={getYouTubeEmbedUrl(item.videoId, item.start)}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </>
            )}
            {item.quotes && item.quotes.length > 0 && (
              <div style={{ marginTop: 8 }}>
                {item.quotes.map((q, qi) => (
                  <blockquote key={qi} style={{ marginLeft: 16 }}>
                    <em>"{q.q}"</em> <span>- {q.by}</span>
                  </blockquote>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Mentions
