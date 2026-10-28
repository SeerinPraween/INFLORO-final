import Link from "next/link";

const content = [
"Stop relying on scattered spreadsheets and endless manual searches. Infloro helps your team discover, evaluate, shortlist, and organize creators based on your brand, audience, niche, platform, and campaign requirements.",
"Build a more structured creator discovery process and move from potential collaborators to campaign-ready shortlists.",
"Find relevant creators. Organize your research. Make more informed collaboration decisions.",
"Creator Discovery Should Be More Than a Search",
"Finding creators is easy. Finding creators who fit your campaign requirements takes a more structured approach.",
"Teams often spend hours researching profiles, comparing audience information, checking content relevance, and maintaining creator lists across multiple spreadsheets.",
"Infloro brings creator research and organization into one workspace so your team can spend less time managing lists and more time evaluating potential collaborations.",
"Discover Creators Based on Your Campaign Needs",
"Search by niche and category",
"Explore creators across relevant content categories, industries, interests, and campaign themes.",
"Filter by platform and audience",
"Narrow your search using supported social platforms, audience size, location, and available audience characteristics.",
"Evaluate creator profiles",
"Review available profile information, content examples, engagement metrics, and other relevant details before adding creators to a shortlist.",
"Build organized shortlists",
"Save potential creators, add internal notes, organize lists, and prepare targeted groups for specific campaigns.",
"Keep creator research accessible",
"Maintain creator records and discovery notes in a shared workspace instead of repeatedly rebuilding lists.",
"How It Works",
"01 — Define Your Requirements",
"Specify your target audience, preferred niche, platforms, location, audience range, and other relevant campaign criteria.",
"02 — Explore Relevant Creators",
"Search and filter available creator profiles using the information and data sources supported by your workspace.",
"03 — Evaluate and Compare",
"Review profiles, available metrics, content relevance, and collaboration details.",
"04 — Create Your Shortlist",
"Save promising creators, add notes, and organize your selections into campaign-specific lists.",
"05 — Move Into Outreach"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>AI-Powered Creator Discovery</h1><p>Find the Right Creators for Every Campaign.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
