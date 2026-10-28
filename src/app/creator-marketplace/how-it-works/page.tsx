import Link from "next/link";

const content = [
"Page objective: Explain the creator journey, build trust, answer practical questions, and encourage registration.",
"5.1 Hero section",
"Supporting text: A clearer journey from discovery to collaboration.",
"5.2 Overview",
"Heading: Your creator journey, made clearer.",
"Finding and managing collaborations can involve searching across platforms, reviewing briefs, exchanging information, and keeping track of deadlines.",
"Infloro is designed to bring key parts of that journey together through a structured marketplace and creator workflow.",
"5.3 Step-by-step creator journey",
"Step 1 — Create your profile",
"Headline: Give brands a clearer picture of your work.",
"Add your creator bio, niche, supported social profiles, content formats, and relevant portfolio examples.",
"Your profile may include:",
"Creator name and bio",
"Content niche",
"Social profile links",
"Content formats",
"Portfolio examples",
"Collaboration preferences",
"Step 2 — Discover opportunities",
"Headline: Find projects that fit your interests.",
"Explore brand campaigns, UGC projects, and affiliate opportunities. Use available search and filtering tools to narrow down the listings that interest you.",
"Step 3 — Understand the requirements",
"Headline: Know what you're signing up for.",
"Read the opportunity brief, eligibility criteria, deliverables, deadlines, compensation structure, and content usage terms.",
"Supporting text: If any material detail is unclear, ask for clarification before committing.",
"Step 4 — Apply",
"Headline: Show why you're a good fit.",
"Submit the requested information and relevant examples of your work. Make sure your profile is accurate and your portfolio links are accessible."
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>From discovering opportunities to building collaborations.</h1><p>Infloro brings creator opportunities into one organized experience. Create your profile, explore available campaigns and projects, review the terms, and apply to collaborations that fit your goals.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
