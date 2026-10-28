import Link from "next/link";

const content = [
"Hero section",
"Explore research, industry analysis, and practical insights to help your team understand creator marketing trends, evaluate opportunities, and plan its next steps.",
"Report categories",
"Industry Trends",
"Explore changes in creator marketing practices, campaign structures, and brand-creator relationships.",
"Campaign Measurement",
"Understand measurement frameworks, KPI selection, attribution, and performance interpretation.",
"UGC & Content",
"Explore content formats, production workflows, usage considerations, and content strategy.",
"Affiliate & Creator Commerce",
"Understand commission structures, tracking, and performance evaluation.",
"Marketing Operations",
"Explore workflow consistency, team coordination, campaign documentation, and operational practices.",
"Featured report",
"[Published Report Title]",
"[Describe the research question, the subject covered, and why the findings matter to creator marketing teams.]",
"Report details:",
"Publication date: [Date]",
"Format: [Report format]",
"Research period: [Period, if applicable]",
"Methodology: [Brief description, if applicable]",
"Individual report page structure"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Make better-informed creator marketing decisions.</h1><p>Eyebrow: RESEARCH & INDUSTRY INSIGHTS</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
