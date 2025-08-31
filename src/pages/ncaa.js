import React, { useEffect, useMemo, useRef, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

const loadExternalScript = src => {
  return new Promise((resolve, reject) => {
    if (typeof document !== "undefined" && document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement("script")
    script.src = src
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("failed to load script"))
    document.body.appendChild(script)
  })
}

const NcaaPage = () => {
  const [activeTab, setActiveTab] = useState("athlete")
  const [accordionOpen, setAccordionOpen] = useState({ a: false, b: false, c: false })
  const [projection, setProjection] = useState("conservative")
  const revenueChartRef = useRef(null)
  const marketShareChartRef = useRef(null)
  const revenueChartInstanceRef = useRef(null)
  const marketShareChartInstanceRef = useRef(null)

  const revenueProjectionData = useMemo(
    () => ({
      labels: ["Year 1 (2026)", "Year 2 (2027)", "Year 3 (2028)"],
      conservative: [0.5, 2.5, 8],
      moderate: [0.8, 5, 15],
      aggressive: [1.2, 8, 25],
    }),
    []
  )

  const marketShareData = useMemo(
    () => ({
      labels: ["Football", "Men's Basketball", "Women's Basketball", "Other"],
      data: [45, 25, 15, 15],
      backgroundColor: ["rgba(37, 99, 235, 0.8)", "rgba(59, 130, 246, 0.8)", "rgba(96, 165, 250, 0.8)", "rgba(147, 197, 253, 0.8)"],
      borderColor: ["rgba(37, 99, 235, 1)", "rgba(59, 130, 246, 1)", "rgba(96, 165, 250, 1)", "rgba(147, 197, 253, 1)"],
    }),
    []
  )

  useEffect(() => {
    let isMounted = true
    const drawCharts = async () => {
      try {
        if (typeof window === "undefined") return
        if (!window.Chart) {
          await loadExternalScript("https://cdn.jsdelivr.net/npm/chart.js")
        }
        if (!isMounted) return

        // Market share doughnut
        const marketCtx = marketShareChartRef.current?.getContext("2d")
        if (marketCtx) {
          if (marketShareChartInstanceRef.current) marketShareChartInstanceRef.current.destroy()
          marketShareChartInstanceRef.current = new window.Chart(marketCtx, {
            type: "doughnut",
            data: {
              labels: marketShareData.labels,
              datasets: [
                {
                  label: "NIL Market Share",
                  data: marketShareData.data,
                  backgroundColor: marketShareData.backgroundColor,
                  borderColor: marketShareData.borderColor,
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: "top" }, title: { display: false } },
            },
          })
        }

        // Revenue projections bar
        const revenueCtx = revenueChartRef.current?.getContext("2d")
        if (revenueCtx) {
          if (revenueChartInstanceRef.current) revenueChartInstanceRef.current.destroy()
          revenueChartInstanceRef.current = new window.Chart(revenueCtx, {
            type: "bar",
            data: {
              labels: revenueProjectionData.labels,
              datasets: [
                {
                  label: "Projected Revenue (in Millions)",
                  data: revenueProjectionData[projection],
                  backgroundColor: "rgba(37, 99, 235, 0.7)",
                  borderColor: "rgba(37, 99, 235, 1)",
                  borderWidth: 1,
                  borderRadius: 5,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: { y: { beginAtZero: true, ticks: { callback: v => "$" + v + "M" } } },
              plugins: {
                legend: { display: false },
                title: { display: true, text: `Revenue Projections: ${projection.charAt(0).toUpperCase() + projection.slice(1)} Scenario`, font: { size: 16 } },
              },
            },
          })
        }
      } catch (e) {
        // ignore chart load errors
      }
    }
    drawCharts()
    return () => {
      isMounted = false
    }
  }, [projection, revenueProjectionData, marketShareData])

  return (
    <div className="ncaa-page">
      <Seo
        title="FynCom Athlete Direct | Business Plan"
        description="A proposal to leverage FynCom's technology to create a compliant new revenue stream for NCAA athletes, empowering direct fan engagement."
      >
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          body { background-color: #FDFDFB; color: #1a202c; }
          .chart-container { position: relative; width: 100%; max-width: 450px; margin-left: auto; margin-right: auto; height: 350px; max-height: 400px; }
          .bar-chart-container { position: relative; width: 100%; max-width: 800px; margin-left: auto; margin-right: auto; height: 400px; max-height: 500px; }
          .nav-link { transition: color 0.3s ease; }
          .nav-link:hover { color: #2563eb; }
          .active-tab { border-bottom-color: #2563eb; color: #2563eb; font-weight: 600; }
          .kpi-card { background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .kpi-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
          .btn-primary { background-color: #2563eb; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; transition: background-color 0.3s ease; }
          .btn-primary:hover { background-color: #1d4ed8; }
          .btn-secondary.active { background-color: #2563eb; color: white; border-color: #2563eb; }
        `}</style>
      </Seo>
      <Header />
      <main>
        <section id="home" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900">Monetizing Moments in College Sports</h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              A proposal to leverage FynCom's patented technology to create a new, compliant revenue stream for NCAA athletes, empowering them to connect
              directly with fans.
            </p>
            <div className="mt-10">
              <a href="#opportunity" className="btn-primary">
                Explore the Plan
              </a>
            </div>
          </div>
        </section>

        <section id="opportunity" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A New Frontier: The NIL Opportunity</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                The NCAA's Name, Image, and Likeness (NIL) rules have unlocked a multi-billion dollar market. Student-athletes can now monetize their personal
                brand, but they face a complex and fragmented landscape of rules, creating a critical need for safe, simple, and compliant tools.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="kpi-card">
                <div className="text-4xl font-bold text-blue-600">$1.5B+</div>
                <p className="mt-2 text-gray-700 font-semibold">Projected 2025 NIL Market Size</p>
                <p className="mt-1 text-sm text-gray-500">A massive, untapped market is growing exponentially year over year.</p>
              </div>
              <div className="kpi-card">
                <div className="text-4xl font-bold text-blue-600">480,000+</div>
                <p className="mt-2 text-gray-700 font-semibold">Student-Athletes</p>
                <p className="mt-1 text-sm text-gray-500">A large, addressable user base in need of effective monetization tools.</p>
              </div>
              <div className="kpi-card">
                <div className="text-4xl font-bold text-blue-600">Complex</div>
                <p className="mt-2 text-gray-700 font-semibold">Regulatory Landscape</p>
                <p className="mt-1 text-sm text-gray-500">
                  A patchwork of state laws and school policies creates a high barrier to entry and a need for compliance-focused solutions.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-2xl font-semibold text-center text-gray-800">Navigating the Compliance Maze</h3>
              <p className="mt-3 text-center text-gray-600">
                Any successful platform must be built on a foundation of compliance. Here are the core principles:
              </p>
              <div className="max-w-4xl mx-auto mt-8 space-y-4">
                <div className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setAccordionOpen(v => ({ ...v, a: !v.a }))}
                  >
                    <span>No "Pay-for-Play"</span>
                    <span className="text-xl">{accordionOpen.a ? "-" : "+"}</span>
                  </button>
                  {!accordionOpen.a ? null : (
                    <div className="p-5 border-t border-gray-200">
                      <p className="text-gray-600">
                        This is the cardinal rule. Compensation cannot be tied to athletic performance, used as an inducement to attend a specific school, or
                        for just being on a team. All earnings must be for legitimate work or services rendered, such as an appearance, a social media post, or,
                        in our model, for providing direct access and time for communication.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setAccordionOpen(v => ({ ...v, b: !v.b }))}
                  >
                    <span>Mandatory Disclosure</span>
                    <span className="text-xl">{accordionOpen.b ? "-" : "+"}</span>
                  </button>
                  {!accordionOpen.b ? null : (
                    <div className="p-5 border-t border-gray-200">
                      <p className="text-gray-600">
                        Athletes are required to disclose NIL activities to their university's compliance office. Deals over $600 must be reported to a national
                        clearinghouse. A platform must facilitate this reporting to be a viable partner for both athletes and institutions.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setAccordionOpen(v => ({ ...v, c: !v.c }))}
                  >
                    <span>Restricted Categories & Conflicts</span>
                    <span className="text-xl">{accordionOpen.c ? "-" : "+"}</span>
                  </button>
                  {!accordionOpen.c ? null : (
                    <div className="p-5 border-t border-gray-200">
                      <p className="text-gray-600">
                        Many schools and states prohibit deals involving gambling, alcohol, tobacco, and adult entertainment. Furthermore, an athlete's personal
                        deal cannot conflict with their school's exclusive contracts (e.g., an athlete at a Nike school cannot wear Adidas during team
                        activities). The platform must respect these limitations.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Solution: FynCom Athlete Direct</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                A premium, university-friendly platform that empowers athletes to monetize direct fan engagement safely and compliantly. We leverage FynCom's
                core "payment-for-attention" technology to create a filter and a revenue stream, turning fan outreach from a distraction into an opportunity.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mt-16">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button
                    className={`tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "athlete" ? "active-tab" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                    onClick={() => setActiveTab("athlete")}
                    data-tab="athlete"
                  >
                    For the Athlete
                  </button>
                  <button
                    className={`tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "fan" ? "active-tab" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                    onClick={() => setActiveTab("fan")}
                    data-tab="fan"
                  >
                    For the Fan
                  </button>
                  <button
                    className={`tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "university" ? "active-tab" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                    onClick={() => setActiveTab("university")}
                    data-tab="university"
                  >
                    For the University
                  </button>
                </nav>
              </div>

              <div className="mt-8">
                {activeTab === "athlete" && (
                  <div id="athlete">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Total Control, Effortless Monetization</h3>
                        <p className="mt-3 text-gray-600">
                          The athlete dashboard is the control center. Athletes set their own prices, manage their availability with a single toggle, and track
                          earnings in real-time. This isn't about creating more work; it's about adding value to interactions that are already happening.
                        </p>
                        <ul className="mt-6 space-y-4 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-blue-500 font-bold mr-2">✓</span>
                            <span>
                              <strong>Set Your Price:</strong> Define the value of your time for texts, video messages, and even "peak moment" post-game calls.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 font-bold mr-2">✓</span>
                            <span>
                              <strong>Control Your Time:</strong> Toggle "Available" or "Unavailable" status at any time. Only receive paid requests when you're
                              ready.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 font-bold mr-2">✓</span>
                            <span>
                              <strong>Compliance Built-In:</strong> Automatically generate disclosure reports for your school's compliance office.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-lg">Alex Jordan's Dashboard</h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-600">Availability</span>
                            <input type="checkbox" className="w-5 h-5" defaultChecked />
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-md mb-4">
                          <p className="text-sm text-gray-500">Total Earnings (Month)</p>
                          <p className="text-2xl font-bold text-gray-800">$1,250.00</p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Set Your Rates</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center bg-white p-3 rounded-md">
                              <span>Fan Text Message</span>
                              <span className="font-bold text-blue-600">$5</span>
                            </div>
                            <div className="flex justify-between items-center bg-white p-3 rounded-md">
                              <span>1-Min Video Shoutout</span>
                              <span className="font-bold text-blue-600">$50</span>
                            </div>
                            <div className="flex justify-between items-center bg-white p-3 rounded-md">
                              <span>Post-Game Call (Auction)</span>
                              <span className="font-bold text-blue-600">Starting Bid: $100</span>
                            </div>
                          </div>
                        </div>
                        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Generate Compliance Report</button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "fan" && (
                  <div id="fan">
                    <h3 className="text-2xl font-semibold text-gray-800">Get Closer to the Game</h3>
                    <p className="mt-3 text-gray-600">
                      For fans, Athlete Direct offers a legitimate, direct line to the athletes they admire. It's a chance to connect beyond a social media
                      like, especially during the most exciting moments of the season. All payments directly support the student-athlete.
                    </p>
                    <div className="mt-6 bg-gray-50 p-8 rounded-lg shadow-inner text-center">
                      <p className="text-lg font-medium">
                        "Get a 'Happy Birthday' video from the star quarterback, or bid for a chance to congratulate the point guard right after a
                        buzzer-beater. This is the next level of fan engagement."
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === "university" && (
                  <div id="university">
                    <h3 className="text-2xl font-semibold text-gray-800">A Partner in Compliance</h3>
                    <p className="mt-3 text-gray-600">
                      We position ourselves as a partner to athletic departments, not a disruption. Our university portal provides the tools to protect the
                      institution and support student-athletes, making us a solution they can proudly endorse.
                    </p>
                    <ul className="mt-6 space-y-4 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 font-bold mr-2">✓</span>
                        <span>
                          <strong>Compliance Oversight:</strong> View aggregated, anonymized data on NIL activities happening on the platform.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 font-bold mr-2">✓</span>
                        <span>
                          <strong>Simplified Reporting:</strong> Athletes can submit perfectly formatted disclosure reports with one click, saving your office
                          time and effort.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 font-bold mr-2">✓</span>
                        <span>
                          <strong>Brand Safety:</strong> Our platform is a closed, monitored environment, preventing the brand-damaging interactions common on
                          public social media.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="strategy" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Go-to-Market Strategy</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Our strategy focuses on building trust and demonstrating value through strategic partnerships, starting with a targeted, phased approach.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
              <div className="chart-container">
                <canvas id="marketShareChart" ref={marketShareChartRef}></canvas>
                <p className="text-center text-sm text-gray-500 mt-2">NIL Compensation Distribution by Sport</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Targeted Market Entry</h3>
                <p className="mt-3 text-gray-600">
                  While Football and Men's Basketball represent the largest share of the NIL market, our initial targets are sports with high fan engagement and
                  less saturated media coverage. This allows us to build a strong user base and prove our model effectively.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>
                    <strong>Primary Targets:</strong> Women's Basketball, College Baseball/Softball, Wrestling.
                  </li>
                  <li>
                    <strong>Secondary Targets:</strong> Gymnastics, Volleyball, and other high-engagement Olympic sports.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-2xl font-semibold text-center text-gray-800">Phased Rollout Plan</h3>
              <div className="max-w-4xl mx-auto mt-8 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-gray-300"></div>
                <div className="space-y-12">
                  <div className="flex items-center w-full">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="font-bold text-blue-600">Phase 1 (Q1 2026)</div>
                      <h4 className="font-semibold text-lg">Pilot Program</h4>
                      <p className="text-gray-600">
                        Partner with 1-2 mid-major universities. Leverage founder connections to onboard their athletic departments and a select group of 20-30
                        athletes. Focus on product refinement and gathering case studies.
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">1</div>
                  </div>
                  <div className="flex items-center w-full">
                    <div className="w-1/2 pl-8 text-left ml-auto">
                      <div className="font-bold text-blue-600">Phase 2 (Q2-Q3 2026)</div>
                      <h4 className="font-semibold text-lg">Conference Expansion</h4>
                      <p className="text-gray-600">
                        Use pilot success stories to expand to all schools within the pilot conferences. Initiate conversations with Power Five conference
                        schools. Begin targeted athlete marketing.
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 ml-auto">2</div>
                  </div>
                  <div className="flex items-center w-full">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="font-bold text-blue-600">Phase 3 (Q4 2026 & Beyond)</div>
                      <h4 className="font-semibold text-lg">National Scale</h4>
                      <p className="text-gray-600">
                        Full-scale national rollout. Onboard major Power Five programs and high-profile athletes. Launch a national fan-facing marketing
                        campaign ahead of major NCAA tournaments.
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="financials" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Business Model & Financials</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Our model is simple and transparent. We succeed when athletes succeed. We take a 20% platform fee on all transactions, which covers payment
                processing, platform maintenance, compliance tools, and support.
              </p>
            </div>
            <div className="mt-12 text-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`projection-btn btn-secondary px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 ${
                    projection === "conservative" ? "active" : ""
                  }`}
                  onClick={() => setProjection("conservative")}
                >
                  Conservative
                </button>
                <button
                  type="button"
                  className={`projection-btn btn-secondary px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 ${
                    projection === "moderate" ? "active" : ""
                  }`}
                  onClick={() => setProjection("moderate")}
                >
                  Moderate
                </button>
                <button
                  type="button"
                  className={`projection-btn btn-secondary px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 ${
                    projection === "aggressive" ? "active" : ""
                  }`}
                  onClick={() => setProjection("aggressive")}
                >
                  Aggressive
                </button>
              </div>
            </div>
            <div className="bar-chart-container mt-8">
              <canvas id="revenueProjectionChart" ref={revenueChartRef}></canvas>
            </div>
          </div>
        </section>

        <section id="next-steps" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Next Steps: Seizing the Moment</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                The time to act is now. The NIL landscape is solidifying, and the first platform to build trust with universities and athletes will become the
                market leader.
              </p>
            </div>
            <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Seed Funding</h3>
                <p className="mt-2 text-gray-600">
                  Secure a $10m seed round to fund product development for the athlete/university portals and hire key personnel for university outreach.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Product Development</h3>
                <p className="mt-2 text-gray-600">
                  Finalize the MVP of the Athlete Direct platform with a focus on a seamless onboarding experience and robust compliance reporting features.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">University Outreach</h3>
                <p className="mt-2 text-gray-600">
                  Immediately begin conversations with target universities for the pilot program, aiming for formal commitments by the end of 2025.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default NcaaPage
