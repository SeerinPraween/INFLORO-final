import Link from "next/link";

const content = [
"Page objective: Introduce the marketplace, help creators discover relevant opportunities, and convert visitors into registered creators.",
"1.1 Hero section",
"Discover brand campaigns, UGC projects, and affiliate opportunities in one place. Find collaborations that align with your creative strengths, interests, and audience.",
"Supporting text: Your creativity. Your interests. More ways to collaborate.",
"Design direction: Use a clean, editorial hero with confident typography, a carefully composed creator visual, and a subtle preview of opportunity cards. Avoid excessive gradients, floating elements, and generic stock-photo collages.",
"1.2 Search and discovery",
"Heading: Find opportunities that fit your creativity.",
"Description: Explore available collaborations by category, platform, opportunity type, and other relevant requirements.",
"Search placeholder: Search brands, campaigns, categories, or keywords...",
"Search CTA: Search Opportunities",
"Suggested popular searches:",
"Fashion & Lifestyle",
"Beauty & Skincare",
"Food & Beverage",
"Technology",
"Travel",
"Fitness & Wellness",
"Filter labels:",
"Opportunity Type",
"Category",
"Platform",
"Compensation",
"Location",
"Application Deadline",
"Sort options:",
"Recommended",
"Recently Added",
"Deadline: Soonest"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Your next brand collaboration starts here.</h1><p>Eyebrow: THE INFLORO CREATOR MARKETPLACE</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
