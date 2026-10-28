import Link from "next/link";

const content = [
"Hero section",
"Use these guides to develop your approach, align your team, and create more consistent campaign processes.",
"Supporting microcopy: Practical knowledge for every stage of your creator marketing journey.",
"Browse guide categories",
"Strategy & Planning",
"Understand how to set objectives, identify audiences, define campaign goals, and choose relevant creator partnership models.",
"Creator Discovery",
"Learn how to evaluate creators based on content relevance, audience fit, engagement quality, and campaign requirements.",
"Campaign Operations",
"Explore campaign briefs, outreach processes, deliverables, deadlines, content review, and collaboration practices.",
"UGC & Content",
"Understand content formats, creator briefs, content review, usage permissions, and ways to organize UGC workflows.",
"Affiliate Marketing",
"Learn about commission structures, tracking, attribution, and performance evaluation.",
"Analytics & Reporting",
"Explore KPIs, reporting frameworks, measurement limitations, and ways to connect campaign outcomes with business objectives.",
"Featured guide section",
"Heading: Your next step starts here.",
"Feature an actual published guide using the following card structure:",
"Title: [Published Guide Title]",
"Description: [A concise explanation of what the reader will learn and who the guide is for.]",
"Format: PDF, webpage, or other available format.",
"Reading time: [Estimated reading time]",
"Suggested flagship guide concepts",
"The Creator Marketing Strategy Guide",
"Learn how to define campaign objectives, identify relevant creators, plan collaborations, and measure outcomes.",
"The Creator Campaign Planning Handbook",
"Explore the key stages of a campaign, from briefing and outreach to deliverables, content review, and reporting."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Go beyond the basics of creator marketing.</h1><p>Explore in-depth educational resources that help you understand the strategy, planning, and operational decisions behind effective creator partnerships.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
