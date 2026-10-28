import Link from "next/link";

const content = [
"Hero section",
"From building your first creator strategy to improving an established workflow, discover ideas your team can put into practice.",
"Blog search and filters",
"Search placeholder: Search articles...",
"Category filters:",
"All Articles",
"Creator Marketing Strategy",
"Influencer Discovery",
"Campaign Management",
"UGC & Content",
"Affiliate Marketing",
"Analytics & Measurement",
"Marketing Operations",
"Sort options:",
"Latest",
"Most Relevant",
"Only implement sorting options that the CMS and actual content metadata support.",
"Featured article",
"Section heading: Featured Article",
"Highlight one editorial article with:",
"Featured image.",
"Category.",
"Headline.",
"Short introduction.",
"Publication date.",
"Reading time.",
"The featured article should be selected by the editorial team rather than hard-coded into the page.",
"Article listing"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Ideas, insights, and strategies for creator marketing.</h1><p>Explore practical advice and fresh perspectives on influencer marketing, creator partnerships, UGC, affiliate programs, campaign management, and marketing operations.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
