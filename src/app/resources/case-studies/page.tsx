import Link from "next/link";

const content = [
"Hero section",
"Explore documented campaign experiences, strategies, operational challenges, and outcomes to understand how businesses approach creator partnerships.",
"Every campaign has a different objective. These stories can help you identify approaches worth considering for your own team.",
"Important publication rule: Publish customer stories only when the underlying information is verified and the necessary permissions have been obtained.",
"Case study filters",
"All Case Studies",
"E-commerce & D2C",
"Consumer Brands",
"Agencies",
"UGC Campaigns",
"Affiliate Marketing",
"Creator Campaign Operations",
"Only show categories that have relevant published case studies.",
"Case study card structure",
"Each card should display:",
"Company or approved brand name.",
"Industry.",
"Campaign type.",
"Case study title.",
"Short summary of the challenge.",
"Verified outcome or key learning.",
"Publication date.",
"Do not create fictional customer logos, fabricated testimonials, or unverified performance statistics.",
"Individual case study page template"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Learn how creator marketing works in practice.</h1><p>Eyebrow: CUSTOMER STORIES & CASE STUDIES</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
