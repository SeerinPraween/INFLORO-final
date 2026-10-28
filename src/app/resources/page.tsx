import Link from "next/link";

const content = [
"Hero section",
"Discover practical guides, marketing strategies, templates, and insights to help you plan campaigns, build creator relationships, manage content workflows, and understand your results.",
"Whether you're launching your first creator campaign or coordinating marketing across multiple brands, find resources to help you make more informed decisions.",
"Search bar",
"Placeholder: Search guides, articles, templates, and more...",
"Button: Search Resources",
"Search helper text: Find practical answers, campaign ideas, and creator marketing insights.",
"Browse by category",
"Blog",
"Heading: Ideas worth putting into action.",
"Explore articles on creator marketing strategy, influencer discovery, campaign planning, UGC, affiliate programs, and performance measurement.",
"Guides & Ebooks",
"Heading: Go deeper into creator marketing.",
"Learn how to structure campaigns, develop creator partnerships, build repeatable workflows, and make better-informed marketing decisions.",
"Templates",
"Heading: Spend less time starting from scratch.",
"Explore planning worksheets, campaign briefs, creator evaluation frameworks, outreach templates, and reporting structures designed to support your workflow.",
"Case Studies",
"Heading: Learn from real campaign experiences.",
"Explore documented examples of creator marketing strategies, campaign execution, challenges, and results.",
"Reports & Insights",
"Heading: Understand the changing creator landscape.",
"Explore research, industry trends, and practical analysis that can inform your creator marketing strategy.",
"Webinars & Events",
"Heading: Learn from practical conversations.",
"Discover educational sessions and recordings covering creator partnerships, campaign operations, UGC, affiliate marketing, and marketing workflows.",
"Creator Marketing Glossary",
"Heading: Make industry terminology easier to understand."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Better creator marketing starts with better knowledge.</h1><p>Eyebrow: THE INFLORO RESOURCE CENTER</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
