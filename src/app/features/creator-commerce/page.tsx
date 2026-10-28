import Link from "next/link";

const content = [
"Organize product discovery, creator promotions, tracking links, eligible sales attribution, and creator earnings within one connected workflow.",
"Infloro helps brands, agencies, and creators manage the operational details behind creator-led product promotion.",
"Bring Creator-Led Commerce Into Your Workflow",
"Creator commerce involves more than sharing a product link. Teams need to manage product eligibility, promotional terms, tracking methods, attributed orders, cancellations, commission rules, and earnings reconciliation.",
"Infloro is designed to organize these activities alongside existing creator and campaign records.",
"From Product Discovery to Earnings",
"Product catalog",
"Organize products with descriptions, categories, images, prices, availability, and participation criteria.",
"Creator product discovery",
"Help creators explore eligible products and save relevant items to collections.",
"Promotional links and codes",
"Organize supported tracking links or promotional codes and connect them to the appropriate creator or campaign.",
"Attribution records",
"Associate available clicks and eligible order data with creators and promotional activities.",
"Commission calculations",
"Apply the relevant commission rules to eligible transactions and retain a calculation breakdown.",
"Earnings visibility",
"Track pending, approved, adjusted, reversed, and paid amounts according to the configured financial workflow.",
"Reconciliation",
"Review refunds, cancellations, disputed transactions, and discrepancies before finalizing earnings.",
"How It Works",
"01 — Add Products",
"Brands or authorized administrators maintain the product catalog and eligibility requirements.",
"02 — Make Products Discoverable",
"Eligible products appear in the relevant creator discovery experience.",
"03 — Select and Promote",
"Creators explore products and receive or generate supported tracking links or promotional codes.",
"04 — Capture Available Activity"
];

export default function DocumentPage() {
  return <main className="document-page">
    <section className="document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> INFLORO</div><h1>Affiliate Marketing & Creator Commerce</h1><p>Connect Products, Creators, and Measurable Commerce.</p><div className="hero-actions"><Link href="/get-started" className="button button-primary">Get Started <span aria-hidden="true">→</span></Link><Link href="/book-a-demo" className="button button-quiet">Book a Demo ↗</Link></div></section>
    <section className="document-content">{content.map((item, index) => <article className="document-card" key={item + index}><span className="document-index">{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</section>
  </main>;
}
