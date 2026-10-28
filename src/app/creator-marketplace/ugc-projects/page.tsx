import Link from "next/link";

const content = [
"Page objective: Position Infloro as a destination for creators who produce user-generated content and help them understand project requirements, deliverables, and content rights.",
"3.1 Hero section",
"Supporting text: Your creative skills. Clearly defined briefs. Meaningful projects.",
"3.2 Introduction",
"Heading: Your creativity has more than one format.",
"UGC gives creators an opportunity to produce content for brands without every project requiring a traditional influencer post to the creator's own audience.",
"Depending on the project, a brand may commission content for its website, social channels, product pages, advertisements, or other marketing use. The intended usage should always be stated in the project terms.",
"3.3 UGC content formats",
"Heading: Different briefs. Different creative possibilities.",
"Product Demonstrations",
"Show a product in use and explain its features through clear, practical content.",
"Tutorials & How-To Videos",
"Walk viewers through a process, product feature, or useful application.",
"Lifestyle Content",
"Create relatable scenes that place a product or service within an everyday context.",
"Product Reviews & Testimonials",
"Produce opinion-led or experience-based content where the brief, disclosure requirements, and authenticity expectations are clearly understood.",
"Unboxing Content",
"Capture the packaging, first impressions, and product experience.",
"Short-Form Video",
"Produce concise vertical videos for the formats and channels specified in the brief.",
"Photography & Static Assets",
"Create product imagery, lifestyle photos, or other visual assets where requested.",
"3.4 What makes a strong UGC project?",
"Heading: Clear direction. Creative freedom. Defined deliverables.",
"A useful creative brief",
"Understand the product, intended audience, key message, tone, and campaign objective.",
"Defined content requirements"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Create content brands can put to work.</h1><p>Explore UGC projects that value your storytelling, production skills, and creative perspective. Discover briefs for product videos, demonstrations, tutorials, lifestyle content, and other brand-focused assets.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
