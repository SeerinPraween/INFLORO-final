import Link from "next/link";

const content = [
"Page objective: Attract creators interested in brand partnerships and explain campaign expectations, deliverables, and application processes.",
"2.1 Hero section",
"Supporting text: Clear briefs. Defined expectations. Creative collaboration.",
"2.2 Introduction",
"Heading: More than a brand mention.",
"Brand campaigns bring creators and businesses together around a shared objective. From product launches and awareness campaigns to educational content and lifestyle storytelling, each opportunity has its own goals and requirements.",
"Explore the details, understand what the brand needs, and decide whether the collaboration is right for you.",
"2.3 Campaign types",
"Heading: Discover the campaign format that fits you.",
"Product Launches",
"Help introduce new products through relevant content and authentic storytelling.",
"Brand Awareness",
"Create content designed to introduce a brand, communicate its identity, and reach relevant audiences.",
"Product Demonstrations",
"Show how a product works through demonstrations, tutorials, or practical use cases.",
"Lifestyle Collaborations",
"Bring a brand into relevant lifestyle, fashion, travel, food, or other niche content.",
"Educational Campaigns",
"Explain products, services, or ideas through informative and audience-focused content.",
"These are examples of possible campaign formats, not a promise that every format is currently available.",
"2.4 What you'll find in a campaign brief",
"Heading: Everything important, before you apply.",
"Description: Review the information you need to understand the collaboration and make an informed decision.",
"Campaign objective",
"Understand the brand's goals, intended audience, and key message.",
"Deliverables",
"Review the requested content formats, number of assets, publishing requirements, and submission deadlines.",
"Creator requirements"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Collaborate with brands. Bring ideas to life.</h1><p>Discover brand campaigns that invite creators to turn ideas into engaging content. Explore campaign briefs, understand expectations, and find opportunities that align with your audience and creative style.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
