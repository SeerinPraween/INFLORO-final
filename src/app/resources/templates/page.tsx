import Link from "next/link";

const content = [
"Hero section",
"Explore practical templates designed to help teams structure creator marketing work, document campaign requirements, organize outreach, and review results.",
"Adapt each template to your team's objectives, approval processes, and operating model.",
"Template categories",
"Campaign Planning",
"Organize campaign objectives, target audiences, timelines, deliverables, and success metrics.",
"Creator Evaluation",
"Create a consistent framework for reviewing creator relevance, content quality, audience fit, and campaign suitability.",
"Outreach & Communication",
"Plan personalized creator outreach and document communication stages.",
"Briefs & Deliverables",
"Clarify campaign requirements, content formats, deliverables, timelines, and review processes.",
"UGC & Content Operations",
"Organize content requests, production stages, approvals, and usage-permission details.",
"Reporting & Measurement",
"Structure campaign summaries, KPIs, performance observations, and recommendations.",
"Template cards",
"Every template card should include:",
"Template name.",
"Short description.",
"Format, such as spreadsheet, document, or editable webpage.",
"Intended use.",
"Last updated date, if tracked.",
"Suggested templates",
"Creator Campaign Brief Template",
"Description: Structure campaign objectives, target audience, key messages, deliverables, deadlines, content requirements, and approval expectations.",
"Suggested sections:",
"Campaign overview."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Less time starting from scratch. More time moving forward.</h1><p>Eyebrow: CREATOR MARKETING TEMPLATES</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
